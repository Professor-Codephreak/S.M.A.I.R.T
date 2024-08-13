// pages/index.tsx
import { Box, Heading, VStack } from "@chakra-ui/react";
import dynamic from 'next/dynamic';

const WalletConnection = dynamic(() => import('../components/WalletConnection'));
const Deposit = dynamic(() => import('../components/Deposit'), {
  loading: () => <p>Loading...</p>,
});
const Finalize = dynamic(() => import('../components/Finalize'));
const Cancel = dynamic(() => import('../components/Cancel'));
const Claim = dynamic(() => import('../components/Claim'));
const Refund = dynamic(() => import('../components/Refund'));

export default function Home() {
  return (
    <Box p={4}>
      <WalletConnection />
      <Heading as="h1" size="xl" textAlign="center" my={8}>
        Presale Management Interface
      </Heading>
      <VStack spacing={8} align="stretch">
        <Deposit />
        <Finalize />
        <Cancel />
        <Claim />
        <Refund />
      </VStack>
    </Box>
  );
}

