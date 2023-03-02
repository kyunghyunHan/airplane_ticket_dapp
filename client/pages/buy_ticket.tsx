import { useEffect, useState } from "react";

export const moduleAddress =
  "0xa604279e6129beb5fa225673daa13f0fa87095e9a576687d1924120a7777b2be";
export const NODE_URL = "https://fullnode.testnet.aptoslabs.com";
import { AptosClient } from "aptos";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
export const client = new AptosClient(NODE_URL);

export default function Reservation() {
  const { account, signAndSubmitTransaction } = useWallet();
  const [newTask, setNewTask] = useState<any>("");
  console.log(account);
  useEffect(() => {
    const genRandomKey = async () => {
      if (!account) return [];
      const todoListResource = await client.getAccountResource(
        account?.address,
        `${moduleAddress}::tickets::Flight`
      );
      console.log(todoListResource);
      const taskCounter = (todoListResource as any).data.counter;
      setNewTask(taskCounter);
    };

    genRandomKey();
  }, [account]);

  useEffect(() => {
    const genRandomKey = async () => {
      if (!account) return [];
      const todoListResource = await client.getAccountResource(
        account?.address,
        `${moduleAddress}::tickets::AirplaneTicket`
      );
      console.log(todoListResource);
      const taskCounter = (todoListResource as any).data.counter;
      setNewTask(taskCounter);
    };

    genRandomKey();
  }, [account]);
  return (
    <>
      <div>fafa</div>
    </>
  );
}
``;
