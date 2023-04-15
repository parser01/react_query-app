import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      border: 0; 
   }
   
   *, 
   *::before, 
   *::after {
      box-sizing: border-box; 
   }
   
   :focus, 
   :active {
      outline: none; 
   }
   
   a:focus, 
   a:active {
      outline: none; 
   }
   
   header, 
   nav, 
   main, 
   section, 
   aside, 
   footer, 
   article, 
   figure {
      display: block; 
   }

   html {
      background: #1e1e1e;
   }
   
   html, 
   body {
      width: 100%;
      height: 100%;
      line-height: 1;
      font-size: 16px;
      text-size-adjust: 100%;
   }

   a, 
   a:hover,
   a:visited {
      text-decoration: none; 
   }
   
   ul li {
      list-style: none; 
   }
   
   img {
      vertical-align: top; 
      user-select: none;
   }

   button {
      cursor: pointer;
      user-select: none;
   }

   input::placeholder {
		user-select: none;
	}

   body {
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
   }

   #root {
      min-height: 100vh;
   }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<GlobalStyle />
		<App />
	</>
);
