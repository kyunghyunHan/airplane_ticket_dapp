import type { AppProps } from "next/app";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import Layout from "components/Layout/Layout";
import "semantic-ui-css/semantic.min.css";
import "../styles/Navbar.css";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
export default function App({ Component, pageProps }: AppProps) {
  const wallets = [new MartianWallet()];

  return (
    <>
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AptosWalletAdapterProvider>
    </>
  );
}
