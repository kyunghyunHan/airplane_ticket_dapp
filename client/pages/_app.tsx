import type { AppProps } from "next/app";
import { Layout, Space } from "antd";
import Navbar from "components/Layout/navbar";
export default function App({ Component, pageProps }: AppProps) {
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    height: "500px",
    minHeight: 1000,

    color: "#fff",
    backgroundColor: "#108ee9",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
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
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>
            <Component {...pageProps} />
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
    </>
  );
}
