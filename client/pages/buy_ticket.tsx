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
      const available_tickets = (todoListResource as any).data
        .available_tickets;
      setNewTask(available_tickets);
      console.log(available_tickets);
    };

    genRandomKey();
  }, [account]);

  const add = async () => {
    if (!account) return;

    const payload = {
      type: "entry_function_payload",
      function: `${moduleAddress}::tickets::create_flight`,
      type_arguments: ["30"],
      arguments: [],
    };
    console.log(payload);
    const response = await signAndSubmitTransaction(payload);
    console.log(response);
    await client.waitForTransaction(response.hash);
    window.location.reload();
  };
  const buy = async () => {
    if (!account) return;

    const payload = {
      type: "entry_function_payload",
      function: `${moduleAddress}::tickets::buy_ticket`,
      type_arguments: ["0x1::aptos_coin::AptosCoin"],
      arguments: [moduleAddress, "A2", 2],
    };
    console.log(payload);
    const response = await signAndSubmitTransaction(payload);
    console.log(response);
    await client.waitForTransaction(response.hash);
    window.location.reload();
  };
  return (
    <>
      <button
        onClick={e => {
          add();
        }}
      >
        dadada
      </button>
      <div>fafa</div>
      <button
        onClick={e => {
          add();
        }}
      >
        dadada
      </button>
      <button
        onClick={e => {
          add();
        }}
      >
        dadada
      </button>
      <button
        onClick={e => {
          add();
        }}
      >
        dadada
      </button>
      <button
        onClick={e => {
          add();
        }}
      >
        dadada
      </button>
      <div>fafa</div>
      <div>fafa</div>
      <button
        onClick={e => {
          add();
        }}
      >
        dadada
      </button>
      <button
        onClick={e => {
          buy();
        }}
      >
        buy
      </button>
    </>
  );
}
``;
