import React, { useState, useEffect } from "react";
import Header from "../components/header";
import styled from "styled-components";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/85df9deaf58c49009c3c40b84942bd4f');
        const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_METAMASK_KEY, provider);
        const sdk = new ThirdwebSDK(wallet);

        const coins = await fetch("https://oj5x0nki.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%27coins%27%5D%7B%0A++++name%2C%0A++++usdPrice%2C%0A++++contractAddress%2C%0A++++symbol%2C%0A++++logo%0A%7D");
        const sanityTokens = (await coins.json()).result;
        setSanityTokens(sanityTokens);

        const thirdWebTokensPromises = sanityTokens.map(token => sdk.getContract(token.contractAddress, "token"));
        const thirdWebTokens = await Promise.all(thirdWebTokensPromises);
        setThirdWebTokens(thirdWebTokens);
      } catch (error) {
        console.error("Error initializing SDK or fetching tokens:", error);
      }
    };

    init();
  }, [address]);

  // console.log('Sanity -', sanityTokens);
  // console.log('Thirdweb -', thirdWebTokens);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header 
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
        <Main
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;
