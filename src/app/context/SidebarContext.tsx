"use client";
import { createContext, useContext, useState } from "react";

interface SidebarContextProps {
  showSidePanel: boolean;
  toggleSidePanel: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [showSidePanel, setShowSidePanel] = useState(false);

  const toggleSidePanel = () => {
    setShowSidePanel((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ showSidePanel, toggleSidePanel }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use SidebarContext
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
