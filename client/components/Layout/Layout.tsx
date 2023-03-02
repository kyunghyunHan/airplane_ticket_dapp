import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
type Props = {
  children: React.ReactNode;
};
interface HeaderActionProps {
  links: {
    link: string;
    label: string;
  }[];
}
let test = [
  {
    link: "/reservation",
    label: "Reservation",
  },
  {
    link: "/buy_ticket",
    label: "Buy Ticket",
  },
];

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  height: "100%",
  minHeight: 1000,
  marginTop: 0,
  color: "#fff",
  backgroundColor: "#108ee9",
};

export default function Layout<HeaderActionProps>(props: Props) {
  return (
    <div className="w-full p-0">
      <Navbar links={test} />
      <div style={contentStyle}> {props.children}</div>
      <Footer />
    </div>
  );
}
