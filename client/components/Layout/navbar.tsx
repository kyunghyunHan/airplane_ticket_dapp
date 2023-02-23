import { Breadcrumb, Layout, Menu, theme, Row, Col } from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
const Navbar: React.FC = () => (
  <Layout>
    <Row align="middle">
      <Col
        style={{ textAlign: "left" }}
        xl={{ span: 4, offset: 1 }}
        lg={{ span: 4, offset: 1 }}
        sm={{ span: 4, offset: 10 }}
        xs={{ span: 4, offset: 10 }}
      >
        <a href="">비행기</a>
      </Col>
      <Col
        xl={{ span: 4, offset: 10 }}
        lg={{ span: 4, offset: 10 }}
        sm={{ offset: 0, span: 0 }}
        xs={{ offset: 0, span: 0 }}
      >
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
        sm={{ span: 0, offset: 0 }}
        xs={{ span: 0, offset: 0 }}
        style={{ textAlign: "right" }}
      >
        <WalletSelector />
      </Col>
    </Row>
  </Layout>
);

export default Navbar;
