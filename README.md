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
This project is built with React.js and Three.js. The file strucutre tree