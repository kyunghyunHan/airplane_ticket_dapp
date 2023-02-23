import { Breadcrumb, Layout, Menu, theme, Row, Col } from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
const Navbar: React.FC = () => (
  <Layout>
    <Row align="middle">
      <Col xl={{ span: 2 }}>
        <a href="">비행기</a>
      </Col>
      <Col xl={{ offset: 10 }} xs={{ offset: 1 }} offset={10}>
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
      <Col xs={2} xl={0} style={{ textAlign: "right" }}>
        <a href="">비d</a>
      </Col>
      <Col xl={2} lg={0} xs={0} style={{ textAlign: "right" }}>
        <WalletSelector />
      </Col>
    </Row>
  </Layout>
);

export default Navbar;
