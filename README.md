# MENU FOR ALL APPLICATIONS 

This library aims to create a dropdown menu with redirection to multiple applications 
that the user can access. Application provisioning, authentication and all data is provided by your api
Responsive is available for screen width less 800px


<p align="center">
   <img src="https://img.shields.io/bower/l/MI?style=flat-square">
   <img src="https://img.shields.io/badge/version-1.4.7-blue">
   <img src="https://img.shields.io/github/issues/rhaymisonbetini/menu-for-all-applications.svg">
   <img src="https://img.shields.io/github/issues-closed/rhaymisonbetini/menu-for-all-applications.svg">
   <img src="https://img.shields.io/github/issues-pr/rhaymisonbetini/menu-for-all-applications.svg">
   <img src="https://img.shields.io/github/issues-pr-closed/rhaymisonbetini/menu-for-all-applications.svg">
</p>

<p align="center">
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white">
   <img src="https://img.shields.io/badge/AngularJS-E23237?style=for-the-badge&logo=angularjs&logoColor=white">
   <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
   <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D">
</p>

![alt text](https://github.com/rhaymisonbetini/menu-for-all-applications/blob/main/src/assets/menu1.gif)

resposive<br>

![alt text](https://github.com/rhaymisonbetini/menu-for-all-applications/blob/main/src/assets/menu3.gif)

## Installation

run the command

```
npm i menu-for-all-applications

```

## Configuration

After the installation process you must import the library:

```javascript

import MenuForAllApplications from 'menu-for-all-applications'

```

In your App.vue or in your main page you must have a main div with the id:"q-app". <br/> 
This id is very important because the menu will hang on it

Now in your code run the library
You must pass 3 parameters in the constructor:

* auth token ( sanctum, jwt, etc..) of the api that will provide the applications that the user has access to. <br/>
* User email so that the search can be done in the destination api<br/>
* Endpoint of your api ( POST )<br/>

```javascript
 const menuForAll = new MenuForAllApplications(token, userMail, apiUrl);
 menuForAll.initMenu();

```

## Return from your API

Your api's return should be an array of objects.
This object must have the following format

* title: string
* link:  string

```javascript

 [
    {
        title:"Name displayed in menu",
        link: "Url to destination application"
    }
 ]

```

### STAND ALONE

If you don't see the need to build your menu on the backend, just pass the same array of objects to the standAlone method and it will provide a menu

```javascript
  menuForAll.standAlone([
        {
          title: "Google",
          link: "www.google.com",
        },
        {
          title: "Facebook",
          link: "www.facebook.com",
        },
        {
          title: "Instagram",
          link: "www.instagram.com",
        },
      ]);
```

## STYLE YOUR MENU

If you want to change the color of the menu, its position from the top and the centering of the text just call the methods
```javascript
      //color, position-top, justify-content
      menuForAll.setMenuStyle('#38761d', 0, 'left')
      //color for mouse-houver
      menuForAll.setMouseOnHover('#fff')
      //color and position for menu mobile
      menuForAll.setMobileMenu('#38761d', 0)

```
![alt text](https://github.com/rhaymisonbetini/menu-for-all-applications/blob/main/src/assets/menu2.gif)


## CDN file or import script tag

If you don't want to use npm to install the package and call it directly in your html.<br/>
Download the js file to your preferred directory.The file is located in <br/>

```
    .src/cdn/cdnmenu.js
```

In you HTML add <br/>


* auth token ( sanctum, jwt, etc..) of the api that will provide the applications that the user has access to. <br/>
* User email so that the search can be done in the destination api<br/>
* Endpoint of your api ( POST )<br/>

```html
  <script src="./cdnmenu.js" type="text/javascript"></script>    
  <script>
        initMenu(token, email, endpointApplication)
  </script>
```

Obs: Stylemenu and standAlone not allowed in CDN file


## ERROR

Once done, an icon will be created at the bottom of the page where, when clicked, <br/>
the drop-down menu with the data returned from your api will be shown. If an error occurs, an offline display will be given <br/>
![alt text](https://github.com/rhaymisonbetini/menu-for-all-applications/blob/main/src/assets/errorvue.jpg)