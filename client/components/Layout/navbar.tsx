import { Layout, Menu, Row, Col } from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";

import type { MenuProps } from "antd";
const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
  },

  {
    label: "Navigation Three ",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];
const Navbar: React.FC = () => (
  <Row align={"stretch"}>
    <Col
      style={{ textAlign: "left" }}
      xl={{ span: 4, offset: 2 }}
      lg={{ span: 4, offset: 2 }}
      sm={{ span: 4, offset: 10 }}
      xs={{ span: 4, offset: 10 }}
    >
      <h1 style={{ bottom: 2 }}>AirLine</h1>
    </Col>
    <Col
      xl={{ span: 8, offset: 6 }}
      lg={{ span: 8, offset: 6 }}
      sm={{ offset: 0, span: 0 }}
      xs={{ offset: 0, span: 0 }}
    >
      <Menu
        mode="horizontal"
        style={{ backgroundColor: "transparent" }}
        items={items}
      ></Menu>
    </Col>
    <Col
      xl={{ span: 0, offset: 0 }}
      lg={{ span: 0, offset: 0 }}
      sm={{ span: 2, offset: 8 }}
      xs={{ span: 2, offset: 8 }}
      style={{ textAlign: "right" }}
    >
      <a href="">메뉴</a>
    </Col>
    <Col
      xl={{ span: 2, offset: 2 }}
      lg={{ span: 2, offset: 2 }}
      sm={{ span: 0, offset: 2 }}
      xs={{ span: 0, offset: 2 }}
      style={{ textAlign: "right" }}
    >
      <WalletSelector />
    </Col>
  </Row>
);

export default Navbar;
