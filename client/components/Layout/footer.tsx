import { Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const App: React.FC = () => (
  <>
    <Header style={headerStyle}>Header</Header>
  </>
);

export default App;
