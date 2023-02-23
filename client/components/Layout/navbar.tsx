import { Breadcrumb, Layout, Menu, theme, Row, Col } from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
const Navbar: React.FC = () => (
  <Layout>
    <Row align="middle">
      <Col span={2}>
        <a href="">비행기</a>
      </Col>
      <Col span={4} offset={16}>
        <Menu mode="horizontal">
          <Menu.Item key="mail">
            <a href="">비행기</a>
          </Menu.Item>
          <Menu.Item key="app">
            <a href="">구매</a>
          </Menu.Item>
          <Menu.Item key="app">
            <a href="">Mypage</a>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={2} style={{ textAlign: "right" }}>
        <WalletSelector />
      </Col>
    </Row>
  </Layout>
);

export default Navbar;
