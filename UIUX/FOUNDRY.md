# install foundry
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

```bash
cd S.M.A.I.R.T-presale/UIUX
forge init

Start Anvil with Alchemy as the Forking Provider
You can start Anvil by forking the Sepolia testnet using Alchemy’s endpoint:

```bash
anvil --fork-url https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY --chain-id 11155111
```
# Run Tests Using Foundry
Once Anvil is running with the Sepolia fork provided by Alchemy, you can proceed to run your tests as usual:

```bash
forge test
```

Deploying to Sepolia via Alchemy using forge
```bash
forge create --rpc-url https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY --private-key YOUR_PRIVATE_KEY src/YourPresaleContract.sol:YourPresaleContract
Replace YOUR_PRIVATE_KEY with your private key.
Replace src/YourPresaleContract.sol:YourPresaleContract with the correct path and contract name
```
