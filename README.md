# CG 40166 Style4VisRF Project

## 1. Installation
First make sure you have npm and node, please check with the following commands, they should output corresponding version:
```
npm -v
node -v
```
All packages information are automatically saved in package.json. To install these package, first delete package-lock.json, then install necessary packages with 
"npm install" in root dir.
```
git clone https://github.com/TouKaienn/CG40166_Style4VisRF_Project.git
cd CG40166_Style4VisRF_Project
rm package-lock.json
npm install
```
Once installation finished, you could run the react-app with:
```
npm start .
```
Once you run this commands, you will open a browser page (by default, you will use port: http://localhost:3000/). It is recommands to use FireFox instead of Chrome to open the page since Chrome may encounter some issue on Three.js code.

## 2. File Structure
This project is built with React.js and Three.js. The file structure tree is:
```
├── node_modules
├── package.json        /*dependency packages */
├── public              
│   ├── data            /*will save original/stylized baken radiance field*/
│   ├── favicon.ico
│   ├── index.html      /*Static HTML page*/
│   ├── index.js        /*ThreeJS Code for rendering*/
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src                 /*Dynamic UI component based on ReactJS and MUI*/
```
The left front-end code will mostly be implemented in src. All rendering code is located in index.js. 

## 3. Compile and Deployment
After everything is finished, the code can be compiled and deployed on a server. First compile the code with:
(Note that if you have "serve" package, you do not need to install it again)
```
npm run build 
sudo npm install -g serve
```
Once finished, start server with commands:
```
serve -s build
```
Now you can check your page on the url output in terminal. After you compile the code, you will get a "build" dir in your root dir. Those are the files will be saved in server. 