// components/Finalize.tsx
import { Button, Text, Stack, useToast } from "@chakra-ui/react";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { useState } from "react";
import IPresaleABI from '../abi/IPresale.json';
import { PRESALE_CONTRACT_ADDRESS } from '../utils/config';

const Finalize = () => {
  const [isFinalizing, setIsFinalizing] = useState(false);
  const toast = useToast();
  const { config } = usePrepareContractWrite({
    addressOrName: PRESALE_CONTRACT_ADDRESS,
    contractInterface: IPresaleABI,
    functionName: 'finalize',
  });

  const { write, isLoading, error } = useContractWrite({
    ...config,
    onSuccess: () => {
      setIsFinalizing(false);
      toast({
        title: "Success",
        description: "Presale finalized successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
    onError: (err) => {
      setIsFinalizing(false);
      toast({
        title: "Error",
        description: `Failed to finalize presale: ${err.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return (
    <Stack spacing={3}>
      <Text>Finalize Presale</Text>
      <Button
        onClick={() => { setIsFinalizing(true); write?.(); }}
        isLoading={isLoading || isFinalizing}
        isDisabled={!write || isFinalizing}
      >
        Finalize Presale
      </Button>
      {error && <Text color="red.500">Error: {error.message}</Text>}
    </Stack>
  );
};

export default Finalize;

