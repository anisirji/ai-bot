
// Represents parameters for an Ethereum transfer operation
export interface EthereumTransferParams {
    toAddress: string;   // The Ethereum address to which the ETH will be sent
    amount: number;      // The amount of ETH to transfer, specified in ether (not wei)
}

// Represents parameters for an Ethereum swap operation
export interface EthereumSwapParams {
    fromToken: string;   // The token to swap from
    toToken: string;     // The token to swap to
    amount: number;      // The amount of tokens to swap
    amountType: string;  // Specifies whether the amount is for the fromToken or toToken
}

// Represents the response for an Ethereum Transfer Agent
export interface EthereumTransferAgentResponse {
    agent_id: string;              // The unique ID of the agent
    name: "Ethereum Transfer Agent";  // The name of the agent
    params: EthereumTransferParams;  // The parameters specific to the transfer operation
}

// Represents the response for an Ethereum Swap Agent
export interface EthereumSwapAgentResponse {
    agent_id: string;           // The unique ID of the agent
    name: "Ethereum Swap Agent";  // The name of the agent
    params: EthereumSwapParams;  // The parameters specific to the swap operation
}

// Combined interface for both agent responses
export type AgentResponse = EthereumTransferAgentResponse | EthereumSwapAgentResponse;



// Schema for the interfaces
export const agentSchema = `


// Represents parameters for an Ethereum transfer operation
export interface EthereumTransferParams {
    toAddress: string;   // The Ethereum address to which the ETH will be sent
    amount: number;      // The amount of ETH to transfer, specified in ether (not wei)
}

// Represents parameters for an Ethereum swap operation
export interface EthereumSwapParams {
    fromToken: string;   // The token to swap from
    toToken: string;     // The token to swap to
    amount: number;      // The amount of tokens to swap
    amountType: string;  // Specifies whether the amount is for the fromToken or toToken
}

// Represents the response for an Ethereum Transfer Agent
export interface EthereumTransferAgentResponse {
    agent_id: string;              // The unique ID of the agent
    name: "Ethereum Transfer Agent";  // The name of the agent
    params: EthereumTransferParams;  // The parameters specific to the transfer operation
}

// Represents the response for an Ethereum Swap Agent
export interface EthereumSwapAgentResponse {
    agent_id: string;           // The unique ID of the agent
    name: "Ethereum Swap Agent";  // The name of the agent
    params: EthereumSwapParams;  // The parameters specific to the swap operation
}

// Combined interface for both agent responses
export type AgentResponse = EthereumTransferAgentResponse | EthereumSwapAgentResponse;



export interface Parameter {
    name: string;                  // The name of the parameter 
    type: string;                  // The type of the parameter (e.g., string, number)
    description: string;           // The description of the parameter
    isRequired: boolean;           // Indicates if the parameter is required
    options?: string[];            // Optional list of options for the parameter (if applicable)
}


//This table contain details about what operation to perform there are two different kinds of operations here
//1) transfer | swap
export interface Operation {
    operation_id: string;          // "1" | "2"
    type: string;                  // The type of the operation (e.g., transfer, swap)
    description: string;           // "Transfers ETH from one account to another." || "Swap tokens on ETH." || "other"
    blockchain: string;            // "Ethereum"
    params: Parameter[];           // The list of parameters for the operation
}

//this are simply different workflow id for different opration
export interface Workflow {
    workflow_id: string;           // "1" | "2"
    agent_id: string;              // "1" | "2"
    operations: Operation[];       // The list of operations in the workflow
}

//this table contains information about agents which agent perform what action
export interface Agent {
    agent_id: string;              // "1" | "2" | "undefined"
    name: string;                  // "Ethereum Transfer Agent" | "Ethereum swap Agent"
    description: string;           // "This agent handles the transfer of ETH between accounts on the Ethereum blockchain." | "This agent handles the swap of tokens on the Ethereum blockchain."
    icon_url: string;              // "http://example.com/eth-transfer-icon.png" | "http://example.com/eth-transfer-icon.png"
    workflow: Workflow;            // "1" | "2" | "other"
}

// Different kinds of operations
// - transfer: Transfers cryptocurrency from one account to another.
// - swap: Swaps one type of token for another.
// - stake: Stakes tokens into a staking contract.
// - withdraw: Withdraws tokens from a staking contract.
// - provideLiquidity: Adds liquidity to a liquidity pool.
// - removeLiquidity: Removes liquidity from a liquidity pool.
// - approve: Approves a certain amount of tokens for spending by a contract.
// - delegate: Delegates tokens to another address for governance purposes.

//refer to the below data for more example
/*
[
  {
    "agent_id": "1",
    "name": "Ethereum Transfer Agent",
    "description": "This agent handles the transfer of ETH between accounts on the Ethereum blockchain.",
    "icon_url": "http://example.com/eth-transfer-icon.png",
    "workflow": {
      "workflow_id": "1",
      "agent_id": "1",
      "operations": [
        {
          "operation_id": "1",
          "type": "transfer",
          "description": "Transfers ETH from one account to another.",
          "blockchain": "Ethereum",
          "params": [
            {
              "name": "amount",
              "type": "number",
              "description": "The amount of ETH to transfer, specified in ether (not wei).",
              "isRequired": true
            }
          ]
        }
      ]
    }
  },
  {
    "agent_id": "2",
    "name": "Ethereum swap Agent",
    "description": "This agent handles the swap of tokens on the Ethereum blockchain.",
    "icon_url": "http://example.com/eth-transfer-icon.png",
    "workflow": {
      "workflow_id": "2",
      "agent_id": "1",
      "operations": [
        {
          "operation_id": "2",
          "type": "swap",
          "description": "Swap tokens on ETH.",
          "blockchain": "Ethereum",
          "params": [
            {
              "name": "amountType",
              "type": "string",
              "description": "Specifies whether the amount is for the fromToken or toToken.",
              "isRequired": true,
              "options": ["fromToken", "toToken"]
            }
          ]
        }
      ]
    }
  }
]
*/
`;

