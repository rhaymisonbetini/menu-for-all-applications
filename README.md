# MENU FOR ALL APPLICATIONS (VUE-QUASAR-LARAVEL-NOVA)

This library aims to create a dropdown menu with redirection to multiple applications <br/> 
that the user can access. Application provisioning, authentication and all data is provided by your api<br/> 
Responsive is available for screen width less 800px

![alt text](https://github.com/rhaymisonbetini/menu-for-all-applications/blob/main/src/assets/Screen-Recording-_23-02-2023-09-18-06_.gif)

resposive<br>

![alt text](https://github.com/rhaymisonbetini/menu-for-all-applications/blob/main/src/assets/responsive_.gif)

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

## CDN file ou import script tag

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


Once done, an icon will be created at the bottom of the page where, when clicked, <br/>
the drop-down menu with the data returned from your api will be shown. If an error occurs, an offline display will be given <br/>
![alt text](https://github.com/rhaymisonbetini/menu-for-all-applications/blob/main/src/assets/error.jpg)