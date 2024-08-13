// components/Deposit.tsx
import { Button, Text, Stack, useToast } from "@chakra-ui/react";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { useState } from "react";
import IPresaleABI from '../abi/IPresale.json';
import { PRESALE_CONTRACT_ADDRESS } from '../utils/config';

const Deposit = () => {
  const [isDepositing, setIsDepositing] = useState(false);
  const toast = useToast();
  const { config } = usePrepareContractWrite({
    addressOrName: PRESALE_CONTRACT_ADDRESS,
    contractInterface: IPresaleABI,
    functionName: 'deposit',
  });

  const { write, isLoading, error } = useContractWrite({
    ...config,
    onSuccess: () => {
      setIsDepositing(false);
      toast({
        title: "Success",
        description: "Tokens deposited successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
    onError: (err) => {
      setIsDepositing(false);
      toast({
        title: "Error",
        description: `Failed to deposit tokens: ${err.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return (
    <Stack spacing={3}>
      <Text>Deposit Tokens for Presale</Text>
      <Button
        onClick={() => { setIsDepositing(true); write?.(); }}
        isLoading={isLoading || isDepositing}
        isDisabled={!write || isDepositing}
      >
        Deposit Tokens
      </Button>
      {error && <Text color="red.500">Error: {error.message}</Text>}
    </Stack>
  );
};

export default Deposit;

