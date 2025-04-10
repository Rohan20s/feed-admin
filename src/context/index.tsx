import React from "react";

interface MaterialTailwindControllerContextType {
  sidenavColor: string;
  sidenavType: string;
  setSidenavColor: (color: string) => void;
  setSidenavType: (type: string) => void;
}

export const MaterialTailwindControllerContext = React.createContext<MaterialTailwindControllerContextType>({
  sidenavColor: "blue",
  sidenavType: "dark",
  setSidenavColor: () => {},
  setSidenavType: () => {},
});

export function MaterialTailwindControllerProvider({ children }: { children: React.ReactNode }) {
  const [sidenavColor, setSidenavColor] = React.useState("blue");
  const [sidenavType, setSidenavType] = React.useState("dark");

  const value = {
    sidenavColor,
    setSidenavColor,
    sidenavType,
    setSidenavType,
  };

  return (
    <MaterialTailwindControllerContext.Provider value={value}>
      {children}
    </MaterialTailwindControllerContext.Provider>
  );
}

export const useMaterialTailwindController = () => {
  const context = React.useContext(MaterialTailwindControllerContext);

  if (!context) {
    throw new Error(
      "useMaterialTailwindController should be used inside the MaterialTailwindControllerProvider."
    );
  }

  return context;
}; 