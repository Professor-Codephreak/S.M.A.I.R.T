    PresaleOptions: This structure holds configuration options for the presale.
        tokenDeposit: The total number of tokens deposited for sale and liquidity.
        hardCap: The maximum amount of Wei to be raised.
        softCap: The minimum amount of Wei to be raised for the presale to be considered successful.
        max: The maximum Wei contribution per address.
        min: The minimum Wei contribution per address.
        start: The start timestamp of the presale.
        end: The end timestamp of the presale.
        liquidityBps: Basis points of funds raised to be allocated to liquidity.

    Pool: This structure holds information about the presale pool.
        token: The address of the ERC20 token being sold.
        uniswapV2Router02: The address of the Uniswap V2 router.
        tokenBalance: The token balance in this contract.
        tokensClaimable: The number of tokens available for claiming.
        tokensLiquidity: The number of tokens allocated for liquidity.
        weiRaised: The total amount of Wei raised.
        weth: The address of the WETH token.
        state: The current state of the presale (1: Initialized, 2: Active, 3: Canceled, 4: Finalized).
        options: The PresaleOptions struct containing configuration for the presale.

Modifiers

    onlyRefundable: Allows actions only if the presale is refundable. This checks if the presale is in a state where refunds are permitted.

Constructor

    constructor: Initializes the presale contract with the given parameters and validates the pool configuration.

Functions

    receive: Fallback function to handle direct ETH transfers to the contract.
    deposit: Allows the owner to deposit tokens into the contract.
    finalize: Finalizes the presale, providing liquidity to Uniswap, withdrawing raised funds, and enabling token claiming.
    cancel: Cancels the presale, allowing contributors to get a refund.
    claim: Allows contributors to claim their tokens after the presale is finalized.
    refund: Allows contributors to get a refund when the presale fails or is canceled.
    _purchase: Internal function to handle token purchases.
    _liquify: Internal function to handle liquidity provisioning.
    _prevalidatePurchase: Internal function to validate purchase conditions.
    _prevalidatePool: Internal function to validate the presale pool configuration.
    userTokens: Calculates the tokens per user rate dynamically.
    _tokensForLiquidity: Calculates the number of tokens allocated for liquidity.
    _tokensForPresale: Calculates the number of tokens allocated for the presale.
    _weiForLiquidity: Calculates the amount of Wei allocated for liquidity provisioning.
