// components/Refund.tsx
import { Button, Text, Stack, useToast } from "@chakra-ui/react";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { useState } from "react";
import IPresaleABI from '../abi/IPresale.json';
import { PRESALE_CONTRACT_ADDRESS } from '../utils/config';

const Refund = () => {
  const [isRefunding, setIsRefunding] = useState(false);
  const toast = useToast();
  const { config } = usePrepareContractWrite({
    addressOrName: PRESALE_CONTRACT_ADDRESS,
    contractInterface: IPresaleABI,
    functionName: 'refund',
  });

  const { write, isLoading, error } = useContractWrite({
    ...config,
    onSuccess: () => {
      setIsRefunding(false);
      toast({
        title: "Success",
        description: "Refund processed successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
    onError: (err) => {
      setIsRefunding(false);
      toast({
        title: "Error",
        description: `Failed to process refund: ${err.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return (
    <Stack spacing={3}>
      <Text>Request Refund</Text>
      <Button
        onClick={() => { setIsRefunding(true); write?.(); }}
        isLoading={isLoading || isRefunding}
        isDisabled={!write || isRefunding}
      >
        Request Refund
      </Button>
      {error && <Text color="red.500">Error: {error.message}</Text>}
    </Stack>
  );
};

export default Refund;

