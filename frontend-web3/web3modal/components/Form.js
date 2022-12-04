import React, { useEffect, useState } from "react";
import abi from "../constants/contractABI";
import { ethers } from "ethers";
import EthereumEncryption from "ethereum-encryption";
import encrypt from "../utils/encrypt";

function Form() {
  function onSubmitForm() {
    //
  }

  function updateOnChange() {
    //
  }

  function handleInputNumber(e) {
    e.preventDefault();
    console.log("handleInputNumber being called: ", e.target.value);

    console.log("encrypted data");
  }

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
                      form="number"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Number
                    </label>
                    <input
                      type="number"
                      step="any"
                      id="number"
                      onSubmit={handleInputNumber}
                      name="number"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* button field */}
                <div className="p-2 w-full">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("onclick button clicked ");
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
