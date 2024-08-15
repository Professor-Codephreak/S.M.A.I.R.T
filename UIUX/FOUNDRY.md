# install foundry
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

```bash
cd S.M.A.I.R.T-presale/UIUX
forge init --force
anvil --chain-id 666666


```
# install metamask
<a href="https://metamask.io/download/">https://metamask.io/download/</a><br />
# add ANVIL to metamask
```bash
Adding Custom Network to MetaMask
Open MetaMask and go to Settings > Networks > Add Network.
Fill in the details:
Network Name: ANVIL (Custom)
RPC URL: http://127.0.0.1:8545
Chain ID: 666666
Currency Symbol: ETHVIL
Click Save
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
