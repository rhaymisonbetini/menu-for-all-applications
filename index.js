'use strict'

const Config = require('./src/config')
const axios = require('axios').default;
let applications = []

class MenuForAllApplications {

    /**
     * Contructor method need to receive a token do api application, mail o user app acess e application uri (post) 
     * @param {string} token 
     * @param {string} userMail 
     * @param {string} applicationUrl 
     * @returns {void}
     */
    constructor(token = null, userMail = null, applicationUrl = null) {
        this.token = token
        this.userMail = userMail
        this.applicationUrl = applicationUrl;
        this.internalConfig = new Config();
        this.icons = this.internalConfig.getIcons()
        this.state = false;
    }

    /**
     * This method init the manu application with return of the api passsed in applicationUrl
     * @returns {void}
     */
    async initMenu() {
        if (this.token || this.userMail || this.applicationUrl) {
            this.createMainMenu(false)
            return;
        }

        let menuAndConfig = await axios.post(this.applicationUrl, {
            email: this.userMail
        }, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        })
        this.createMainMenu(menuAndConfig.data)
    }

    /**
    * This method create main menu ( the circle buttom in the bottom of the page)
    * @param {Object} data 
    * @returns {void}
    */
    createMainMenu(data) {
        var div = document.createElement('div');
        div.id = "divID"
        div.style = "position:fixed; bottom:50px; right:50px; width:60px; height:60px; border:2px solid #fff; background: #fff; z-index: 99999999999999; border-radius:50%;cursor: pointer; display:flex; justify-content:center;align-items:center"
        document.getElementById("q-app").appendChild(div);
        var imgIcon = document.createElement('img');
        imgIcon.style = " width:50px; height:50px;"
        div.appendChild(imgIcon);

        if (data) {
            applications = data
            imgIcon.src = this.icons.menurounded
            div.addEventListener("click", (_) => {
                this.openApplicationMenu()
            })
        } else {
            imgIcon.src = this.icons.error
        }
    }

    /**
     * This method is called when the user clicked on the circle and create a menu in the top of the browsers
     * @returns {void}
     */
    openApplicationMenu() {
        !this.state ? this.state = true : this.state = false
        if (this.state) {
            var menu = document.createElement('div');
            menu.id = "masterMenu"
            menu.style = "position:fixed; top:50px; width:100%; height:100px;background: #06d1d1; z-index: 99999999999999; pointer; display:flex; justify-content:center;align-items:center; opacity:0display:flex; justify-content:center;align-items:center"
            document.getElementById("q-app").appendChild(menu);
            this.mount()
            return;
        } else {
            var node = document.getElementById("masterMenu");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        }
    }

    /**
    * This method execute a loop in the applications array and create a link with the application in the menu on the top
    * @returns {void}
    */
    mount() {
        for (const app of applications) {
            let body = document.getElementById("masterMenu");
            let link = document.createElement('a');
            link.style = `font-size: 24px; padding: 10px;font-weight: bold; text-decoration: none; color: #fff`
            link.innerText = app.title
            link.href = app.link
            body.appendChild(link);
            link.addEventListener("mouseover", (_) => {
                link.style = `font-size: 24px; padding: 10px; color:#757575 !important`
            })
            link.addEventListener("mouseout", (_) => {
                link.style = `font-size: 24px; padding: 10px;font-weight: bold; text-decoration: none; color: #fff`
            })
        }
        this.show()
    }

    /**
   * This method just execute a fadde in effect 
   * @returns {void}
   */
    show() {
        var body = document.getElementById("masterMenu");
        for (var i = 0; i < 1; i += 0.00001) {
            body.style.opacity = i;
        }
    }
}

module.exports = MenuForAllApplications;