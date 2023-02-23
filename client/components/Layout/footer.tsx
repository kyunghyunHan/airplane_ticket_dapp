import { Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",

  backgroundColor: "#7dbcea",
};
const App: React.FC = () => (
  <>
    <Header style={headerStyle}>Header</Header>
  </>
);

export default App;
