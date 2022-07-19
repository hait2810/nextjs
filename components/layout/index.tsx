import React from "react";
import { LayoutProps } from "../../models/layout";

type Props = {};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      Client
      {children}
    </div>
  );
};

export default Layout;
