import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

const Main = ({ thirdWebTokens, sanityTokens, walletAddress }) => {
    return(
        <Wrapper>
            <Portfolio
            walletAddress={walletAddress}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens} 
            />
            <Promos />
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
   display: flex;
   max-height: calc(100vh-64px);
   overflow: hidden;

   & div {
    border-radius: 0.4rem;
   }
`