# MENU FOR ALL APPLICATIONS (VUE-QUASAR-LARAVEL-NOVA)

This library aims to create a dropdown menu with redirection to multiple applications <br/> 
that the user can access. Application provisioning, authentication and all data is provided by your api<br/> 

![alt text](https://github.com/rhaymisonbetini/menu-for-all-applications/blob/main/src/assets/Screen-Recording-_23-02-2023-09-18-06_.gif)

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

*** auth token ( sanctum, jwt, etc..) of the api that will provide the applications that the user has access to.
*** User email so that the search can be done in the destination api
*** Endpoint of your api ( POST )

```javascript
 const menuForAll = new MenuForAllApplications(token, userMail, apiUrl);
 menuForAll.initMenu();

```

Once done, an icon will be created at the bottom of the page where, when clicked, <br/>
the drop-down menu with the data returned from your api will be shown. If an error occurs, an offline display will be given <br/>
![alt text](https://github.com/rhaymisonbetini/menu-for-all-applications/blob/main/src/assets/error.jpg)