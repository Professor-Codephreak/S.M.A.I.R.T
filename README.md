# 🚀 S.M.A.I.R.T Presale Contract 🚀

The S.M.A.I.R.T presale contract is designed to offer a robust and audited solution for managing token presales. It ensures transparency and security for both project owners and contributors throughout the presale lifecycle.

The contract begins with the deployment phase, where essential token parameters are defined, including:

    Hard Cap: The maximum amount of funds to be raised.
    Soft Cap: The minimum amount of funds required for the presale to be considered successful.
    Minimum and Maximum Contributions: Limits on how much each participant can contribute.
    Liquidity Allocation: The portion of funds to be allocated to liquidity.

Phases

    Deployment Phase:
        Token parameters are set.
        The owner deposits tokens into the contract.

    Presale Phase:
        Participants can contribute within the defined timeframe.
        Contributions are accepted until the hard cap is reached or the presale period ends.

    Finalization Phase:
        If the soft cap is met, the contract transitions to this phase.
        A portion of the funds is allocated to liquidity on UniswapV2.
        Contributors can claim their tokens.

    Refund Phase:
        If the soft cap is not met or the presale is cancelled, a refund mechanism is activated.
        Participants can retrieve their contributions.

Features

    Token Management: Efficiently handles token deposits and manages tokens throughout the presale lifecycle.
    Token Claim: Allows participants to claim their tokens after a successful presale conclusion.
    Cancel Functionality: Enables the owner to cancel the presale, triggering the refund mechanism under certain conditions.
    Refund Mechanism: Provides a secure way for participants to retrieve their contributions if the presale does not meet its soft cap or is cancelled.
    Hard Cap and Soft Cap: Clearly defined minimum and maximum funding goals to ensure the presale's success criteria.
    Timed Rounds: The presale has strict start and end times, preventing contributions outside the designated window.
    Automatic Liquidity Allocation: A predefined portion of the raised funds is converted into liquidity and added to UniswapV2, ensuring immediate market support for the token.

Security and Transparency

The contract ensures a transparent presale process by:

    Validating State Transitions: Ensuring that functions are called only in the appropriate contract state.
    Access Control: Restricting critical functions to the contract owner.
    Using SafeERC20: Employing secure token transfer methods from the OpenZeppelin library.
    Event Emissions: Emitting events for key actions (e.g., deposits, purchases, finalizations, cancellations, refunds) to provide a transparent log of activities.

By implementing these features and security measures, the S.M.A.I.R.T presale contract provides a reliable and efficient platform for managing token presales, benefiting both project owners and participants. This project was made possible by <a href="https://github.com/kirilradkov14/presale-contract">kirilradkov14</a> MIT license so all can benifit. This contract has been further audited and tested using S.M.A.I.R.T use of this source code is entirely your own risk.
## ✔️ How to Deploy

To get this contract up and running, you’ll need [Node.js](https://nodejs.org/) installed on your machine, along with [Hardhat](https://hardhat.org/getting-started/) set up in a TypeScript environment. Here’s how you can deploy it step by step:

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/kirilradkov14/presale-contract.git](https://github.com/Professor-Codephreak/S.M.A.I.R.T-presale)
   cd S.M.A.I.R.T-presale
   ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up your environment variables:**
    Create a `.env` file in the root of your project and populate it with necessary configurations like wallet private keys and Provider API keys as seen on example below:
    ```plaintext
    ETH_SEPOLIA_HTTPS =your-sepolia-https-rpc-here

    PK_ACCOUNT1 =your-wallet-private-key-here
    PK_ACCOUNT2 =your-wallet-private-key-here
    PK_ACCOUNT3 =your-wallet-private-key-here
    PK_ACCOUNT4 =your-wallet-private-key-here
    PK_ACCOUNT5 =your-wallet-private-key-here
    PK_ACCOUNT6 =your-wallet-private-key-here
    ```

4.  **Compile the contracts:**
    ```bash
    npx hardhat compile
    ```

5. **Deploy to the network:**
    Adjust the `hardhat.config.ts` file to include the desired network settings.
    ```bash
    import * as dotenv from 'dotenv';
    dotenv.config();

    module.exports = {
    solidity: "0.8.24",
    networks: {
        sepolia: {
            url: process.env.ETH_SEPOLIA_HTTPS as string,
            accounts: Accounts,
            timeout: 150_000
        }
    }
    };
    ```

    Then run:
    ```bash
    npx hardhat run scripts/deploy_presale.ts --network sepolia
    ```

Alernatively, use <a href="https://github.com/Professor-Codephreak/S.M.A.I.R.T-presale/blob/main/UIUX/FOUNDRY.md">foundry</a><br  />

**Verify and interact with your contract on Etherscan**

## ❗Important consideration

### Testing and Audits
It's essential to thoroughly test this contract on your testnets before production
### Use at Your Own Risk
This contract comes as is, without any guarantees that it's free of bugs or vulnerabilities. If you decide to use it, you're doing so at your own risk. Make sure you fully understand what the contract does before deploying it.

### Liquidity Considerations
The contract automatically adds unlocked liquidity to Uniswap after a presale.<br />
ROADMAP<br />
integrage with multpile EVM<br />
auto timelock<br />
integrate with foundry<br />
UI<br />
✨ created using S.M.A.I.R.T  🚀
