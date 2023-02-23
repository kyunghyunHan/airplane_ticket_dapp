import { Breadcrumb, Layout, Menu, theme } from "antd";

const Navbar: React.FC = () => (
  <Menu mode="horizontal">
    <div className="logo">Logo</div>
    <Menu.Item key="mail">
      <a href="">Signin</a>
    </Menu.Item>
    <Menu.Item key="app">
      <a href="">Signup</a>
    </Menu.Item>
  </Menu>
);

export default Navbar;
