import type { AppProps } from "next/app";
import { Layout, Space } from "antd";
import Navbar from "components/Layout/navbar";
export default function App({ Component, pageProps }: AppProps) {
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle: React.CSSProperties = {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    height: 64,
    lineHeight: "62px",
    backgroundColor: "white",
    top: 0,
    position: "fixed",
  };

  const contentStyle: React.CSSProperties = {
    marginTop: "64px",
    textAlign: "center",
    height: "100%",
    minHeight: 1000,
    color: "#fff",
    backgroundColor: "#108ee9",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };
  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Layout>
          <Header style={headerStyle}>
            <Navbar />
          </Header>
          <Content style={contentStyle}>
            <Component {...pageProps} />
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
    </>
  );
}
