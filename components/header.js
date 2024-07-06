import React, { useState } from "react";
import styled from "styled-components";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client, chain } from "../utils/constants";
import ModalWrapper from "../components/ModalWrapper";
import TransferModal from '../components/modal/TransferModal';
import Link from "next/link";

const Header = ({walletAddress , sanityTokens, thirdWebTokens}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#0a0b0d',
      padding: 0,
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgba(10, 11, 13, 0.75)',
    },
  }

    return(
        <Wrapper>
            <Title>Assets</Title>
            <ButtonsContainer>
            <div style={{ marginRight: "16px" }}>
            <ConnectButton
                        client={client}
                        chain={chain}
                        connectModal={{
                        size: "compact",
                        }}
                    />
                    </div>
            <Button style={{ backgroundColor: '#3773f5', color: '#000'}}>Buy/Sell</Button>
            <Link href={'/?transfer=1'}>
            <Button onClick={handleModalOpen}>Send/Receive</Button>
            </Link>
            </ButtonsContainer>
            <ModalWrapper isOpen={isOpen} onClose={handleModalClose} customStyles={customStyles}>
              <TransferModal 
              sanityTokens={sanityTokens} 
              thirdWebTokens={thirdWebTokens}
              walletAddress={walletAddress} 
              />
            </ModalWrapper> 
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`
const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex-grow: 1;
  margin-right: 500px;
`

const ButtonsContainer = styled.div`
  display: flex;
  margin-left: 0px;
`

const Button = styled.div`
   border: 1px solid #282b2f;
   padding: 1rem;
   font-size: 1.3rem;
   font-weight: 500;
   border-radius: 0.4rem;
   margin-right: 1rem;

   &:hover {
    cursor: pointer;
   }
   `
