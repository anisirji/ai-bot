export const dynamic = "force-dynamic";

import { translator } from "@/typechat/main";
import React from "react";

type AgentResponse = {
  success: boolean;
  data?: any;
  error?: string;
};

const agents = [
  { message: "i want to transfer 500 from account A to account B" },
  { message: "i want to swap 200 from account C to account D" },
  { message: "i want to create 300 wallets" },
  {
    message:
      "I want swap USDT to SOL from Ethereum to Solana amount 10 adress F1hmxBrZLmY93vvHeuXmZg5bNP98tA44KiAVJB33JedV",
  },
];

async function fetchResponses() {
  const responses = await Promise.all(
    agents.map(async (agent) => {
      try {
        const response: AgentResponse = await translator.translate(
          agent.message as string
        );
        return response;
      } catch (error) {
        return {
          success: false,
          error: (error as Error).message,
        };
      }
    })
  );

  return responses;
}

const Home = async () => {
  const responses = await fetchResponses();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="absolute inset-0 bg-gray-900 opacity-50 backdrop-filter backdrop-blur-lg"></div>
      <div className="relative z-10 p-8 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg">
        {/* some more changes  */}
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to Termix-Ai Bot
        </h1>
        <p className="text-lg mb-6 text-center">
          The server is running successfully and you can connect to the API.
        </p>
        {responses.length > 0 ? (
          responses.map((response, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-col lg:flex-row">
                <div className="bg-gray-800 p-4 rounded-lg max-w-[600px] shadow-inner m-2 flex-1">
                  <h3 className="text-lg font-semibold mb-2">Request</h3>
                  <pre className="overflow-x-auto">
                    <code className="text-green-400 text-[8px]">
                      {JSON.stringify(
                        { message: agents[index].message },
                        null,
                        2
                      )}
                    </code>
                  </pre>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-inner m-2 flex-1">
                  <h3 className="text-lg font-semibold mb-2">Response</h3>
                  <pre className="overflow-x-auto">
                    <code className="text-green-400 text-xs">
                      {JSON.stringify(response, null, 2)}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
