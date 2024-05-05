import { WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <NavBar>
        <Logo>Sol-Incinerator</Logo>
        <WalletMultiButtonStyled />
      </NavBar>
      <Content>
        <h1>Welcome to the Sol-Incinerator</h1>
        <p>Connect your wallet and start burning!</p>
        <WalletMultiButtonStyled />
        <WalletDisconnectButtonStyled />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #121212; /* Dark background */
  color: #00FF00; /* Neon green color */
`;

const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #1e1e1e; /* Darker nav background */
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const WalletMultiButtonStyled = styled(WalletMultiButton)`
  &&& {
    background-color: #282c34; /* Slightly lighter dark color */
    color: #00FF00; /* Neon green */
    font-size: 1rem;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
`;

const WalletDisconnectButtonStyled = styled(WalletDisconnectButton)`
  &&& {
    background-color: #444; /* Darker color for disconnect */
    color: #fff;
    font-size: 1rem;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
  }
`;

const Content = styled.div`
  text-align: center;
  margin-top: 5rem;
`;
