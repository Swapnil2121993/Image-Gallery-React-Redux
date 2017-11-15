This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure

my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js 
    App.test.js
    index.css
    index.js
    logo.svg
  containers/
    ImageDetail 
    ImageList 
  images/ 
  redux/
    action
    reducer 
    store
  routes/
    index.js


App.js - Root component of the application
ImageDetail.js - for rendering single image with title and description
ImageList - for rendering list of images on right.
images - .jpg files
action - for selecting image
reducer - return particul image state
src/index.js - JavaScript entry point.
public/index.html -Page Template.

Use media queries for mobile and tablets.

npm start
Runs the app in development mode
Open localhost:3000 to view it in the browser 


Use npm install first when you clone project and than use npm start to run it on localhost.
