import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "./context";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider value={{
          button: {
            defaultProps: {
              variant: "filled",
              size: "md",
              color: "blue",
              fullWidth: false,
              ripple: true,
              className: "",
            },
            styles: {
              base: {
                initial: {
                  textTransform: "normal",
                },
              },
            },
          },
          card: {
            defaultProps: {
              variant: "filled",
              color: "white",
              shadow: true,
              className: "",
            },
            styles: {
              base: {
                initial: {
                  backgroundColor: "white",
                  color: "black",
                },
              },
            },
          },
          navbar: {
            defaultProps: {
              variant: "filled",
              color: "white",
              shadow: true,
              blurred: false,
              fullWidth: false,
              className: "",
            },
            styles: {
              base: {
                navbar: {
                  initial: {
                    display: "flex",
                    alignItems: "items-center",
                    width: "w-full",
                  },
                },
              },
            },
          },
        }}>
          <MaterialTailwindControllerProvider>
            <App />
          </MaterialTailwindControllerProvider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} 