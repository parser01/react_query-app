import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
      background: #fff;
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
      color: #000;
      font-family: Arial, Helvetica, sans-serif;
   }

   #root {
      min-height: 100vh;
   }
`;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<QueryClientProvider client={queryClient}>
		<GlobalStyle />
		<ReactQueryDevtools />
		<App />
	</QueryClientProvider>
);
