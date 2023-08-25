import React from "react";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import style from "@/styles/components/general/Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
  <div className={style.wrapper}>
    <Header />
    <div className={style.container}>
      <div>{props.children}</div>
      <Footer />
    </div>
  </div>
);

export default Layout;
