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

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const menuItemsJSX = menuItems.map((item, index) => {
    return (
      <Menu.Item key={index} href={item.link} onClick={handleCloseMenu}>
        {item.name}
      </Menu.Item>
    );
  });

  return (
    <Grid>
      <Grid.Row columns={1} textAlign={"center"} only={"computer"}>
        <Grid.Column>
          <Menu borderless fixed="top">
            <Menu.Item header>
              <img src={logo} alt="logo" className="logo" />
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
      <Grid.Row columns={2} only="mobile tablet" textAlign="center">
        <Menu borderless fixed="top">
          <Menu.Item header position="right">
            <img src={logo} alt="logo" className="logo" />
          </Menu.Item>
          <Menu.Item
            className="hamburger-icon"
            icon="sidebar"
            onClick={handleMenuClick}
            position="right"
          />
        </Menu>
      </Grid.Row>
    </Grid>
  );
};

export default Navbar;
