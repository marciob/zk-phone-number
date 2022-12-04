import React, { useEffect, useState } from "react";
import { useAccount, useContract, useProvider, erc721ABI } from "wagmi";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import abi from "../utils/abi";
import { ethers } from "ethers";
import EthereumEncryption from "ethereum-encryption";

function Form() {
  let { address } = useAccount();

  function onSubmitForm(values) {
    // do something
  }

  const contractAddress = "0x0dF279766C3E235dFcDc05a4bC36F35A97c15B69";

  const provider = new ethers.providers.WebSocketProvider("");

  const contractInst = new ethers.Contract(contractAddress, abi, provider);

  //listen for event Requested()
  //event Requested signature:
  //event Requested(address,bytes)
  contractInst.on("Requested", (var1, var2) => {
    let info = {
      var1: var1,
      var2: var2,
    };
  });

  function updateOnChange(event) {}

  //call blockchain function here
  function handleNumberField(e) {
    e.preventDefault();
    console.log("handleNumberField being called ", e.target.value);
  }

  // hook for prepare a write contract function to be sent via useContractWrite
  //register function signature:
  //register(uint8 seriesNumber,Proof memory proof, uint[1] memory _areaCode,address _to,bytes memory hash) external {}
  const { config } = usePrepareContractWrite({
    addressOrName: contractAddress,
    contractInterface: abi,
    functionName: "register",
    args: ["_____"], //fill it
    chainId: 1402, //Polygon zkEvm Testnet
  });

  const {
    write: register,
    data,
    isLoading,
    isSuccess,
  } = useContractWrite(config);

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              ZK Phone Validation
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Validate your phone number preserving your privacy.
              {isLoading && <div>Check Wallet</div>}
              {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {/* form */}
            <form>
              <div className="m-2">
                {/* price field */}
                <div className="p-2 w-1/2 flex mx-auto">
                  <div className="mx-auto text-center">
                    <label
                      form="price"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Phone Number:
                    </label>
                    <input
                      type="number"
                      step="any"
                      id="phoneNumber"
                      name="phoneNumber"
                      onBlur={handleNumberField}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* button field */}
                <div className="p-2 w-full">
                  <button
                    onClick={(e) => {
                      console.log("onclick button clicked ");
                      e.preventDefault();

                      try {
                        // safeMint?.();
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none border-blue-600 rounded text-lg"
                  >
                    Validate
                  </button>
                </div>
                {/* footer field */}
                {/* <TheFoot /> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;

//to do:
//not harding code address
