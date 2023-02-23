'use strict'

const Config = require('./src/config')
const axios = require('axios').default;
let applications = []

class MenuForAllApplications {

    constructor(token = null, userMail = null, applicationUrl = null) {
        this.token = token
        this.userMail = userMail
        this.applicationUrl = applicationUrl;
        this.internalConfig = new Config();
        this.icons = this.internalConfig.getIcons()
        this.state = false;
    }

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
        }else{
            imgIcon.src = this.icons.error
        }
    }

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

    mount() {
        for (const app of applications) {
            console.log(app)
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

    show() {
        var body = document.getElementById("masterMenu");
        for (var i = 0; i < 1; i += 0.00001) {
            body.style.opacity = i;
        }
    }
}

module.exports = MenuForAllApplications;