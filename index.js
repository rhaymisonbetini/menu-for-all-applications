'use strict'

const Config = require('./src/config')
const axios = require('axios').default;
let applications = []

class MenuForAllApplications {

    /**
     * Contructor method need to receive a token do api application, mail o user app acess e application uri (post) 
     * @param string token 
     * @param string userMail 
     * @param string applicationUrl 
     * @returns void
     */
    constructor(token = null, userMail = null, applicationUrl = null, config = {}) {
        this.token = token
        this.userMail = userMail
        this.applicationUrl = applicationUrl;
        this.internalConfig = new Config();
        this.icons = this.internalConfig.getIcons()
        this.generalConfig = this.internalConfig.getGeneralConfig()
        this.css = this.internalConfig.getCss()
        this.state = false;
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.hasRezised = false;
        this.personalCss = null;
        this.personalCssMenuMobile = null;
        this.personalMouseHover =null;
    }


        this.personalCss = this.internalConfig.setMenuNormalStyle(positionTop, color, aling)
    }

    async setMouseOnHover(color){
        this.personalMouseHover = this.internalConfig.setMouseOnHover(color)
    }

    async setMobileMenu(color, positionTop){
        this.personalCssMenuMobile = this.internalConfig.setMenuMobile(positionTop, color)
    }

    /**
     * This method init the manu application with return of the api passsed in applicationUrl
     * @returns void
     */
    async initMenu() {
        if (!this.token || !this.userMail || !this.applicationUrl) {
            this.createMainMenu(false)
            return;
        }

        let menuAndConfig = await axios.post(this.applicationUrl, {
            email: this.userMail
        }, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }).catch((error) => {
            console.log('========menuerrorcall==========')
            console.log(error)
            this.createMainMenu(false)
        })
        this.createMainMenu(menuAndConfig.data)
    }

    /**
    * This method create main menu ( the circle buttom in the bottom of the page)
    * @param Object data 
    * @returns void
    */
    createMainMenu(data) {
        var div = document.createElement('div');
        div.id = "divID"
        div.style = this.css.circleBottom
        document.getElementById("q-app").appendChild(div);
        var imgIcon = document.createElement('img');
        imgIcon.style = this.css.iconSizes
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
     * @returns void
     */
    openApplicationMenu() {
        !this.state ? this.state = true : this.state = false
        if (this.state) {
            var menu = document.createElement('div');
            menu.id = "masterMenu"
            if (this.screenWidth <= this.generalConfig.limitWidth) {
                menu.style = this.personalCssMenuMobile ?? this.css.menuMobile
                applications.push({
                    title: 'Close Menu',
                    link: null
                })
            } else {
                menu.style = this.personalCss ??this.css.menuNormal
            }
            document.getElementById("q-app").appendChild(menu);
            this.mount()
            return;
        } else {
            this.close()
        }
    }

    /**
    * This method execute a loop in the applications array and create a link with the application in the menu on the top
    * @returns void
    */
    mount() {
        for (const app of applications) {
            let body = document.getElementById("masterMenu");
            if (app.title !== 'Close Menu') {
                this.createLink(body, app)
            } else {
                this.createParagraph(body, app)
            }
        }
        this.show()
        window.addEventListener("resize", (_) => {
            setTimeout(() => {
                this.screenSizeListener()
            }, 1000)
        });
    }


    /**
    * This method observer screenSize do create responsive menu
    * @returns void
    */
    screenSizeListener() {
        var menu = document.getElementById('masterMenu');
        if (!menu) {
            return
        }
        if (window.innerWidth <= this.generalConfig.limitWidth) {
            menu.style =this.personalCssMenuMobile ?? this.css.menuMobile
            let hasClosed = applications.findIndex(element => element.title === 'Close Menu');
            if (hasClosed == -1 && !this.hasRezised) {
                applications.push({
                    title: 'Close Menu',
                    link: null
                })
                this.createParagraph(menu, { title: "Close Menu" })
                this.hasRezised = true
            }
        } else {
            let hasClosed = applications.findIndex(element => element.title === 'Close Menu');
            if (hasClosed && hasClosed !== -1 && this.hasRezised) {
                applications.splice(hasClosed, 1)
                var menu = document.getElementById('masterMenu');
                menu.style = this.personalCss ?? this.css.menuNormal
                this.destroiById("closeMenu")
                this.hasRezised = false
            }
        }
    }

    /**
    * This method just create a link in menu
    * @param HTMLElement body 
    * @param Object app 
    * @returns void
    */
    createLink(body, app) {
        let link = document.createElement('a');
        link.style = this.css.linkMenuDefault
        link.innerText = app.title
        link.href = app.link
        body.appendChild(link);
        link.addEventListener("mouseover", (_) => {
            link.style = this.personalMouseHover ?? this.css.mouseHoverLink
        })
        link.addEventListener("mouseout", (_) => {
            link.style = this.css.mouseOutLink
        })
    }

    /**
    * This method just create Paragraph to clonse menu
    * @param HTMLElement body 
    * @param Object app 
    * @returns void
    */
    createParagraph(body, app) {
        let paragraph = document.createElement('p');
        paragraph.style = this.css.linkMenuDefault
        paragraph.innerText = app.title
        paragraph.id = 'closeMenu'
        body.appendChild(paragraph);
        paragraph.addEventListener("mouseover", (_) => {
            paragraph.style = this.personalMouseHover ?? this.css.mouseHoverLink
        })
        paragraph.addEventListener("mouseout", (_) => {
            paragraph.style = this.css.mouseOutLink
        })

        paragraph.addEventListener("click", () => {
            this.close()
        })
    }

    /**
    * This method just execute a fadde in effect 
    * @returns void
    */
    show() {
        var body = document.getElementById("masterMenu");
        for (var i = 0; i < 1; i += this.generalConfig.faddeInTimer) {
            body.style.opacity = i;
        }
    }

    /**
    * This method just execute menu destroy
    * @returns void
    */
    close() {
        var node = document.getElementById("masterMenu");
        if (node && node.parentNode) {
            node.parentNode.removeChild(node);
            let hasClosed = applications.findIndex(element => element.title === 'Close Menu');
            if (hasClosed && hasClosed !== -1) {
                applications.splice(hasClosed, 1)
            }
            this.state = false;
        }
    }

    /**
    * This method destroy htmelemt by id
    * @returns void
    */
    destroiById(id) {
        var node = document.getElementById(id);
        if (node && node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
}

module.exports = MenuForAllApplications;