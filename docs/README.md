# react_node_webshop
 React SPA-application.

## Requirements
- The web application is designed to run on a web server capable of running Node.js and Express.

-The MySQL database should be compatible with the version used by the Node.js mysql2 package.

## Limitations
- No specific adaptations have been made to support older browser versions. The site should work well in most modern browsers.

- Flexbox is used for layout, which may impose some limitations on older browsers that do not fully support flexbox features.

## Dependencies
- cors: ^2.8.5 or later.
- dotenv: ^16.3.1 or later.
- express: ^4.18.2 or later.
- mysql2: ^3.6.5 or later.
- stripe: ^14.14.0 or later.

## Aims 
To develop a modular e-commerce website featuring: 
-product filtering, 
-sorting, 
-shopping cart management, 
-a seamless checkout process, and 
-integrated payment solutions. 
The modularity of the application allows for effortless transitions between different databases or payment processing platforms.

## Instructions
#### Install dependencies

### Backend (Node.js and Express)
1.Building and Running the Backend:
Install Dependencies: Before running the backend, you need to install the dependencies listed in your package.json file. You can do this by running:

```
npm install
```
2. Start the Development Server: To run the backend server using nodemon for automatic restarts during development, you can use:
```
npm run dev
```
This command will start the server on the specified port (default is usually 3000).


#### Build the application
Build for Production: If you want to build the backend for production, you can use:
```
npm build
```
This command will transpile TypeScript files to JavaScript files and build your application.
Running the Production Server: After building for production, you can start the server using:
node <path-to-built-file>
Replace <path-to-built-file> with the path to your built JavaScript file.
####

### Frontend (React)
1. Building and Running the Frontend:
Install Dependencies: Similar to the backend, you need to install dependencies for the frontend. Run:
```
npm install
```
Start the Development Server: To run the backend server using nodemon for automatic restarts during development, you can use:

```
npm run dev
```
This command will start the server on the specified port (default is usually 3000).

Build for Production: If you want to build the backend for production, you can use:

```
npm run build
```
This command will transpile TypeScript files to JavaScript files and build your application.

Running the Production Server: After building for production, you can start the server using:
node <path-to-built-file>
Replace <path-to-built-file> with the path to your built JavaScript file.

### Frontend (React)
1. Building and Running the Frontend:
Install Dependencies: Similar to the backend, you need to install dependencies for the frontend. Run:
```
npm install
```
2. Start the Development Server: To start the frontend development server, use:
```
npm run dev
```
This command will start the Vite server for development.

3. Build for Production: For production builds of the frontend, you can use:
```
npm run build
```
This command will create an optimized build of your React application.

4. Preview the Production Build: After building for production, you can preview the build using:
```
npm run preview
```
This command will serve the production build locally for previewing.