import { useState } from "react";
import { Menu, Grid, GridColumn } from "semantic-ui-react";

import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { AptosClient } from "aptos";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
type Props = {
  logo: string;
  menuItems: { name: string; link: string }[];
};

const Navbar = ({ logo, menuItems }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItemsJSX = menuItems.map((item, index) => {
    return (
      <Menu.Item key={index} href={item.link}>
        {item.name}
      </Menu.Item>
    );
  });
  let teat = ["dada", "dada", "dada"];
  const togle = teat.map((item, index) => {
    return (
      <Grid.Row columns={1} only="mobile tablet">
        <h1>Muziks</h1>
      </Grid.Row>
    );
  });

  return (
    <Grid>
      <Grid.Row columns={1} textAlign={"center"} only={"computer"}>
        <Grid.Column>
          <Menu borderless fixed="top">
            <Menu.Item header>
              <h1>Muziks</h1>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>{menuItemsJSX}</Menu.Item>
            </Menu.Menu>
            <Menu.Item>
              <WalletSelector />
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1} only="mobile tablet" textAlign="center">
        <Menu borderless fixed="top">
          <Menu.Item header position="right">
            <h1>Muziks</h1>
          </Menu.Item>
          <Menu.Item
            icon="sidebar"
            position="right"
            onClick={e => {
              if (menuOpen == true) {
                setMenuOpen(false);
              } else if (menuOpen == false) {
                setMenuOpen(true);
              }
            }}
          />
        </Menu>
      </Grid.Row>
      <Grid.Row columns={1} only="mobile tablet">
        {menuOpen == true ? <>{togle}</> : null}
      </Grid.Row>
    </Grid>
  );
};

export default Navbar;
