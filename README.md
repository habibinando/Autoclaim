# Claim It - An React App
An example of React project with Backand Inetgartion

# Prerequisites 
1. Install latest nodeJs https://nodejs.org/

# Getting started
1. Go to project folder and install dependencies:
 ```bash
 npm install
 ```

 2. Update Backand configurations in `App.js`
 ```javascript
    backand.init && backand.init({
      appName: 'autoclaim20',
      setIsMobile: false,
      runSocket: true
    });
 ```   
 
3. Launch development server, and open `localhost:8080` in your browser:
 ```bash
 npm start
 ```

 To build Production code -
 ```bash
 npm build
 ```