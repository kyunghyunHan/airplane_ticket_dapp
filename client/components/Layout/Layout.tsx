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

export default function Layout(props: Props) {
  return (
    <div className="w-full p-0">
      <Navbar logo={"Mu"} menuItems={test} />
      {props.children}
      <Footer />
    </div>
  );
}
