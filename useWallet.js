import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { connectWallet } from "./utils/interact";

const WalletContext = createContext({});

const WalletProvider = ({ children }) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      setStatus(walletResponse.status);
      setWallet(walletResponse.address);
    };
    console.log(walletAddress);
    connectWalletPressed();
  }, []);

  return (
    <WalletContext.Provider
      value={{ walletAddress, setStatus, setWallet, connectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;

export function useWallet() {
  return useContext(WalletContext);
}
