import React from "react";

interface DarkLayoutProps {
  children: React.ReactNode;
}

export const DarkLayout = ({ children }: DarkLayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  );
};
