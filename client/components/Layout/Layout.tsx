import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
type Props = {
  children: React.ReactNode;
};
let test = [
  { name: "dad", link: "dada" },
  { name: "dad", link: "dada" },
  { name: "dad", link: "dada" },
  { name: "dad", link: "dada" },
];
const contentStyle: React.CSSProperties = {
  textAlign: "center",
  height: "100%",
  minHeight: 1000,
  marginTop: 64,
  color: "#fff",
  backgroundColor: "#108ee9",
};

export default function Layout(props: Props) {
  return (
    <div className="w-full p-0">
      <Navbar logo={"Mu"} menuItems={test} />
      <div style={contentStyle}> {props.children}</div>
      <Footer />
    </div>
  );
}
