// components/WalletConnection.tsx
import { Button, Text, Box } from "@chakra-ui/react";
import { useAccount, useConnect, useDisconnect } from 'wagmi';

const WalletConnection = () => {
  const { address, isConnected, isConnecting } = useAccount();
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <Box textAlign="center">
      {isConnected ? (
        <>
          <Text>Connected as: {address}</Text>
          <Button mt={4} onClick={() => disconnect()}>Disconnect</Button>
        </>
      ) : (
        <Button
          mt={4}
          onClick={() => connect({ connector: connectors[0] })}
          isLoading={isConnecting}
        >
          Connect Wallet
        </Button>
      )}
      {error && <Text color="red.500" mt={2}>{error.message}</Text>}
    </Box>
  );
};

export default WalletConnection;

