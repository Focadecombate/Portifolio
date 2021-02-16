import React, { useState, useContext } from "react";

const NavContext = React.createContext<number>(0);
const UpdateNavContext = React.createContext((number: number) => {});

export function useNav() {
  return useContext(NavContext);
}

export function useUpdateNav() {
  return useContext(UpdateNavContext);
}

export const NavProvider: React.FC = ({ children }) => {
  const [Nav, setNav] = useState<number>(0);

  function toggleNav(newValue: number) {
    setNav(newValue);
  }

  return (
    <NavContext.Provider value={Nav}>
      <UpdateNavContext.Provider value={toggleNav}>
        {children}
      </UpdateNavContext.Provider>
    </NavContext.Provider>
  );
};
