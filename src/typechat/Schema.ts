
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

// Reprensents parameters for Wallet Creation Operation
export interface EthereumWalletCreationPrams {
  total_wallets : number; //total number of wallets need to be created for eg. if user type i want to create 2000 wallets then here it will bw 2000
  blockchain:string; //name of the bitcoin to which i need to create wallet
}

export interface cryptocurrencyBridgeAgent {
  sourceBlockchain:string; //"this is the name of blockchain from where it need to convert"
  destinationBlockchain:string;  //"this is the name of blockchain to where it need to convert"
  fromToken:string; //"this is the name of token from where it need to convert"
  toToken: string;//"this is the name of token to where it need to convert"
  destinationAddress: string; //"this is the address to where it need to convert"
  amount:number;//amount of tokens
}


export interface cryptoCurrencyBridgeAgentResponse {
  agent_id:string;  // The unique ID of the agent
  name:"cryptoCurrency Bridge";  // The name of the agent
  params:cryptocurrencyBridgeAgent; //The parameter specific to wallet creation agent
}


//Represent the response for an Wallet Creation Agent
export interface EthereumWalletCreationAgentResponse {
  agent_id:string;  // The unique ID of the agent
  name:"Wallet Creation Agent";  // The name of the agent
  params:EthereumWalletCreationPrams; //The parameter specific to wallet creation agent
}

// Represents the response for an Ethereum Transfer Agent
export interface EthereumTransferAgentResponse {
    agent_id: string;              // The unique ID of the agent
    name: "Ethereum Transfer Agent";  // The name of the agent
    params: EthereumTransferParams;  // The parameters specific to the transfer operation
}
//sdfhbdskfbsdkfbsjkdf ignore
// Represents the response for an Ethereum Swap Agent
export interface EthereumSwapAgentResponse {
    agent_id: string;           // The unique ID of the agent
    name: "Ethereum Swap Agent";  // The name of the agent
    params: EthereumSwapParams;  // The parameters specific to the swap operation
}

//Represent response for zk airdrop open
export interface openZkAirdrop {
  agent_id:string; //agent_id --> 5
  name:"Z K airdrop";
  desc:"Create an account that can obtain zksync airdrop";

}


// Combined interface for both agent responses
export type AgentResponse = EthereumTransferAgentResponse | EthereumSwapAgentResponse | cryptoCurrencyBridgeAgentResponse | EthereumWalletCreationAgentResponse | openZkAirdrop;



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

// Reprensents parameters for Wallet Creation Operation
export interface EthereumWalletCreationPrams {
  total_wallets : number; //total number of wallets need to be created for eg. if user type i want to create 2000 wallets then here it will bw 2000
  blockchain:string; //name of the bitcoin to which i need to create wallet
}

export interface cryptocurrencyBridgeAgent {
  sourceBlockchain:string; //"this is the name of blockchain from where it need to convert"
  destinationBlockchain:string;  //"this is the name of blockchain to where it need to convert"
  fromToken:string; //"this is the name of token from where it need to convert"
  toToken: string;//"this is the name of token to where it need to convert"
  destinationAddress: string; //"this is the address to where it need to convert"
  amount:number;//amount of tokens
}


export interface cryptoCurrencyBridgeAgentResponse {
  agent_id:string;  // The unique ID of the agent
  name:"cryptoCurrency Bridge";  // The name of the agent
  params:cryptocurrencyBridgeAgent; //The parameter specific to wallet creation agent
}


//Represent the response for an Wallet Creation Agent
export interface EthereumWalletCreationAgentResponse {
  agent_id:string;  // The unique ID of the agent
  name:"Wallet Creation Agent";  // The name of the agent
  params:EthereumWalletCreationPrams; //The parameter specific to wallet creation agent
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


//Represent response for zk airdrop open
export interface openZkAirdrop {
  agent_id:string; //agent_id --> 5
  name:"Z K airdrop",
      desc:"Create an account that can obtain zksync airdrop"

}


// Combined interface for both agent responses
export type AgentResponse = EthereumTransferAgentResponse | EthereumSwapAgentResponse | cryptoCurrencyBridgeAgentResponse | EthereumWalletCreationAgentResponse | openZkAirdrop;


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
    operation_id: string;          // "1" | "2" | "3" | "4" | "5"
    type: string;                  // The type of the operation (e.g., transfer, swap,  cryptocurrency bridge,  wallet creation, zk airdrop opening)
    description: string;           // "Transfers ETH from one account to another." || "Swap tokens on ETH." || "cryptocurrency bridge" || "create wallet" || "zk airdrop open"
    blockchain: string;            // "Ethereum" || "will be mentioned on user request"
    params: Parameter[];           // The list of parameters for the operation
}

//this are simply different workflow id for different opration
export interface Workflow {
    workflow_id: string;           // "1" | "2" | "3" | "4" | "5"
    agent_id: string;              // "1" | "2" | "3" | "4" | "5"
    operations: Operation[];       // The list of operations in the workflow
}

//this table contains information about agents which agent perform what action
export interface Agent {
    agent_id: string;              // "1" | "2" | "3" | "4" | "5"
    name: string;                  // "Ethereum Transfer Agent" | "Ethereum swap Agent" | "This agent handles transferring assets between different blockchain networks" | "wallet creation agent"  | "zk airdrop open agent"
    description: string;           // "This agent handles the transfer of ETH between accounts on the Ethereum blockchain." | "This agent handles the swap of tokens on the Ethereum blockchain." | "This agent handles transferring assets between different blockchain networks" | "this agent create wallets" | "This is used to open zk airdrop"
    icon_url: string;              // "http://example.com/eth-transfer-icon.png" | "http://example.com/eth-transfer-icon.png"
    workflow: Workflow;            // "1" | "2" | "3" | "4" | "5"
}

// Different kinds of operations
// - transfer: Transfers cryptocurrency from one account to another.
// - swap: Swaps one type of token for another.
// - cryptocurrency bridge
// - wallet creation: create multiple wallet on for user. 
// - stake: Stakes tokens into a staking contract.
// - withdraw: Withdraws tokens from a staking contract.
// - provideLiquidity: Adds liquidity to a liquidity pool.
// - removeLiquidity: Removes liquidity from a liquidity pool.
// - approve: Approves a certain amount of tokens for spending by a contract.
// - delegate: Delegates tokens to another address for governance purposes.
// - open: open zk airdrop

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
  },
  {
    "agent_id": "3",
    "name": "cryptocurrency bridge",
    "description": "This agent handles transferring assets between different blockchain networks",
    "icon_url": "http://example.com/eth-transfer-icon.png",
    "workflow": {
      "workflow_id": "3",
      "agent_id": "3",
      "operations": [
        {
          "operation_id": "3",
          "type": "cryptocurrency bridge",
          "description": "transferring assets between different blockchain networks",
          "blockchain": "Ethereum",
          "params": [
            {
              "name": "sourceBlockchain",
              "type": "string",
              "isRequired": true,
              "description": "The name of the source of the blockchain from where need to perform action"
            },
            {
              "name": "destinationBlockchain",
              "type": "string",
              "isRequired": true,
              "description": "Destination Blockchain Name"
            },
            {
              "name": "fromToken",
              "type": "string",
              "isRequired": true,
              "description": "fromToken Name" //name of from token
            },
            {
              "name": "toToken",
              "type": "string",
              "isRequired": true,
              "description": "toToken Name" //name of to token
            },
            {
              "name": "destinationAddress",
              "type": "string",
              "isRequired": true,
              "description": "Destination Wallet Address" //where to send
            },
            {
              "name": "amount",
              "type": "number",
              "default": 0,
              "description": "The amount to transfer"
            }
          ]
        }
      ]
    }
  },
   {
    "agent_id": "4",
    "name": "Create Wallet",
    "description": "This agent handles creation of wallet.",
    "icon_url": "http://example.com/eth-transfer-icon.png",
    "workflow": {
      "workflow_id": "4",
      "agent_id": "4",
      "operations": [
        {
          "operation_id": "4",
          "type": "creation",
          "description": "Create wallet.",
          "blockchain": "Ethereum", //by default its Ethereum but generally it could be anything
          
        }
      ]
    }
  },
  {
    "agent_id": "5",
    "name": "ZK Airdrop",
    "description": "This agent handles zk airdrop.",
    "icon_url": "http://example.com/eth-transfer-icon.png",
    "workflow": {
      "workflow_id": "5",
      "agent_id": "5",
      "operations": [
        {
          "operation_id": "5",
    desc:"Create an account that can obtain zksync airdrop".,
          "SamplePropmt": "open zk airdrop",
         // "Comment" : "Whenever user type this propmt regarding opening zk airdrop then we send this agent"          
        }
      ]
    }
  }
]
*/
`;

