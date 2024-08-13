Errors

    Unauthorized: Emitted when an unauthorized address attempts an action requiring specific permissions.
    InvalidState(uint8 currentState): Emitted when an action is performed in an invalid state.
    SoftCapNotReached: Emitted when attempting to finalize a presale that has not reached its soft cap.
    HardCapExceed: Emitted when a purchase attempt exceeds the presale's hard cap.
    NotClaimable: Emitted when a user with no contribution attempts to claim tokens.
    NotInPurchasePeriod: Emitted when a purchase or refund attempt is made outside the presale period.
    PurchaseBelowMinimum: Emitted when a purchase amount is below the minimum allowed.
    PurchaseLimitExceed: Emitted when a participant's purchase would exceed the maximum allowed contribution.
    NotRefundable: Emitted when a refund is requested under conditions that do not permit refunds.
    LiquificationFailed: Emitted when the process of adding liquidity to a liquidity pool fails.
    InvalidInitializationParameters: Emitted when the initialization parameters provided to the contract are invalid.
    InvalidCapValue: Emitted when the pool validation parameters provided to the contract are invalid.
    InvalidLimitValue: Emitted when the pool validation parameters provided to the contract are invalid.
    InvalidLiquidityValue: Emitted when the pool validation parameters provided to the contract are invalid.
    InvalidTimestampValue: Emitted when the pool validation parameters provided to the contract are invalid.

Events

    Deposit(address indexed creator, uint256 amount, uint256 timestamp): Emitted when the presale contract owner deposits tokens for sale.
    Purchase(address indexed beneficiary, uint256 contribution): Emitted for each purchase made during the presale.
    Finalized(address indexed creator, uint256 amount, uint256 timestamp): Emitted when the presale is successfully finalized.
    Refund(address indexed beneficiary, uint256 amount, uint256 timestamp): Emitted when a participant successfully claims a refund.
    TokenClaim(address indexed beneficiary, uint256 amount, uint256 timestamp): Emitted when participants claim their purchased tokens after the presale is finalized.
    Cancel(address indexed creator, uint256 timestamp): Emitted when the presale is cancelled by the contract owner.

Functions

    deposit() external returns (uint256): Allows for the deposit of presale tokens by the owner.
    finalize() external returns (bool): Finalizes the presale, allowing for the distribution of tokens to participants and the withdrawal of funds raised to the beneficiary.
    cancel() external returns (bool): Cancels the presale and enables the refund process for participants.
    claim() external returns (uint256): Allows participants to claim their purchased tokens after the presale is finalized.
    refund() external returns (uint256): Enables participants to request a refund of their contribution if the presale is cancelled or if they are otherwise eligible for a refund according to the presale's terms.

Security Considerations

    Access Control:
        Ensure only authorized addresses can call functions like deposit, finalize, and cancel.
        Use modifiers to restrict access based on roles and permissions.

    State Validation:
        Validate the contract state before performing actions. For example, ensure the presale is in the correct state before finalizing or canceling.

    Contribution Limits:
        Enforce contribution limits (max and min) to prevent abuse.
        Validate that contributions do not exceed the hard cap and fall within the allowed range.

    Refund Logic:
        Ensure the refund process is secure and only allowed under valid conditions.
        Use the NotRefundable error to handle invalid refund attempts.

    Token Handling:
        Safely handle token transfers to prevent loss of funds.
        Use safe transfer methods from libraries like OpenZeppelin.

    Liquidity Provision:
        Carefully manage the liquidity provisioning process to prevent LiquificationFailed errors.

    Timestamp Validation:
        Ensure timestamps for the presale period are correctly validated to prevent off-schedule actions.

IPresale is an interface that defines the essential operations and events related to managing a presale contract. The presale contract facilitates the sale of tokens before they are listed on exchanges, allowing participants to contribute funds (usually in ETH) in exchange for tokens at a predetermined rate. This interface includes functionalities for depositing tokens, finalizing or canceling the presale, claiming tokens, and refunding contributions.

```solidity
Unauthorized()
```
Triggered when an address without the required permissions attempts an action reserved for authorized users.
Use Case: Prevents unauthorized access to sensitive operations like finalization or cancellation of the presale.
```solidity
InvalidState(uint8 currentState)
```
Emitted when an operation is attempted in a state where it is not allowed.
Use Case: Ensures that operations are performed only in valid states (e.g., finalizing a presale that hasn't ended).
```solidity
SoftCapNotReached()
```
Raised when an attempt to finalize the presale is made, but the soft cap has not been met.
Use Case: Protects participants by ensuring that a presale cannot be finalized without meeting its minimum funding goal.
```solidity

HardCapExceed()
```
Emitted when a purchase exceeds the presale's maximum allowable contributions (hard cap).
Use Case: Prevents the contract from accepting more funds than it is designed to handle.
```solidity
NotClaimable()
```
Triggered when an attempt is made to claim tokens by a user who hasn't contributed or when claiming is not yet allowed.
Use Case: Ensures that only eligible participants can claim tokens.
```solidity
NotInPurchasePeriod()
```
Raised when a purchase or refund attempt is made outside the designated presale period.
Use Case: Maintains the integrity of the presale timeline.
```solidity
PurchaseBelowMinimum()
```
Emitted when a purchase amount is less than the minimum allowed contribution.
Use Case: Enforces minimum contribution requirements to participate in the presale.
```solidity
PurchaseLimitExceed()
```

Raised when a participant attempts to contribute more than the maximum allowed per individual.
Use Case: Prevents any single participant from dominating the presale.
```solidity
NotRefundable()
```
Triggered when a refund is requested under conditions that do not allow refunds.
Use Case: Ensures that refunds are only processed under valid circumstances, such as when the presale is canceled.
```solidity
LiquificationFailed()
```
Raised when an attempt to add liquidity to a pool fails.
Use Case: Signals failure in post-presale operations, such as adding liquidity to an automated market maker (AMM).
```solidity
InvalidInitializationParameters()
```
Emitted when the initialization parameters provided to the contract are invalid.
Use Case: Ensures the contract is initialized with valid and correct parameters.
```solidity
InvalidCapValue()
```
Triggered when the provided cap values (soft cap or hard cap) are invalid.
Use Case: Prevents the presale from operating with incorrect funding limits.
```solidity
InvalidLimitValue()
```

Raised when participant limits (minimum or maximum contributions) are invalid.
Use Case: Ensures participant limits are set correctly.
```solidity
InvalidLiquidityValue()
```
Emitted when the liquidity parameters provided to the contract are invalid.
Use Case: Ensures proper configuration for liquidity provisioning.
```solidity
InvalidTimestampValue()
```
Triggered when the provided timestamps (e.g., start and end times) are invalid.
Use Case: Ensures the presale timeline is set correctly.

# Events
```solidity
Deposit(address indexed creator, uint256 amount, uint256 timestamp)
```
Emitted when the presale contract owner deposits tokens to be sold during the presale.
Parameters:
creator: The address of the contract owner making the deposit.
amount: The number of tokens deposited.
timestamp: The block timestamp when the deposit occurred.
```solidity
Purchase(address indexed beneficiary, uint256 contribution)
```
Emitted when a participant contributes ETH to the presale.
Parameters:
beneficiary: The address of the participant.
contribution: The amount of ETH contributed.
```solidity
Finalized(address indexed creator, uint256 amount, uint256 timestamp)
```
Emitted when the presale is successfully finalized.
Parameters:
creator: The address of the contract owner finalizing the presale.
amount: The total amount of ETH raised.
timestamp: The block timestamp of the finalization.
```solidity
Refund(address indexed beneficiary, uint256 amount, uint256 timestamp)
```
Emitted when a participant successfully claims a refund.
Parameters:
beneficiary: The address of the participant receiving the refund.
amount: The amount of wei refunded.
timestamp: The block timestamp of the refund.
```solidity
TokenClaim(address indexed beneficiary, uint256 amount, uint256 timestamp)
```
Emitted when participants claim their purchased tokens after the presale is finalized.
Parameters:
beneficiary: The address of the participant claiming tokens.
amount: The amount of tokens claimed.
timestamp: The block timestamp of the claim.
```solidity
Cancel(address indexed creator, uint256 timestamp)
```
Emitted when the presale is canceled by the contract owner.
Parameters:
creator: The address of the contract owner canceling the presale.
timestamp: The block timestamp of the cancellation.
Functions
```solidity
deposit() external returns (uint256)
```
Allows the presale contract owner to deposit tokens into the contract for sale.
Returns: The amount of tokens deposited.
Use Case: This function is typically called before the presale starts to ensure tokens are available for participants to purchase.
```solidity
finalize() external returns (bool)
```
Finalizes the presale, allowing token distribution and withdrawal of funds.
Returns: A boolean indicating success.
Use Case: Called after the presale ends and the soft cap is reached, this function triggers the distribution of tokens and funds.
```solidity
cancel() external returns (bool)
```
Cancels the presale, enabling participants to claim refunds.
Returns: A boolean indicating success.
Use Case: Used if the presale fails to meet its goals or is otherwise terminated by the owner.
```solidity
claim() external returns (uint256)
```
Allows participants to claim their purchased tokens after the presale is finalized.
Returns: The number of tokens claimed.
Use Case: Participants call this function to receive the tokens they purchased once the presale is complete.
```solidity
refund() external returns (uint256)
```
Enables participants to request a refund if the presale is canceled or under eligible conditions.
Returns: The amount refunded.
Use Case: This function is used when participants want their contributions returned, typically when the presale is canceled.

By implementing security best practices, the S.M.A.I.R.T-presale attempts to provide a smooth and secure presale process.
