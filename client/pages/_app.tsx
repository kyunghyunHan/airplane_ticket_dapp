import type { AppProps } from "next/app";
import { Layout, Space, Affix } from "antd";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import Navbar from "components/Layout/navbar";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
export default function App({ Component, pageProps }: AppProps) {
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle: React.CSSProperties = {
    width: "100%",
    color: "black",
    height: 64,
    backgroundColor: "white",
    top: 0,
  };
  const wallets = [new MartianWallet()];
  const contentStyle: React.CSSProperties = {
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
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Layout>
            <Header style={headerStyle}>
              <Affix offsetTop={0} className="app__affix-header">
                <Navbar />
              </Affix>
            </Header>
            <Content style={contentStyle}>
              <Component {...pageProps} />
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Space>
      </AptosWalletAdapterProvider>
    </>
  );
}
