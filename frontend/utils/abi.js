const abi = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      { type: "address", name: "v", internalType: "address" },
      { type: "bytes", name: "pubKey", internalType: "bytes" },
    ],
  },
  {
    type: "event",
    name: "Requested",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
        indexed: false,
      },
      { type: "bytes", name: "", internalType: "bytes", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "changeProofContracts",
    inputs: [
      { type: "uint8", name: "series", internalType: "uint8" },
      { type: "address", name: "c", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "changeVerifier",
    inputs: [
      { type: "address", name: "_v", internalType: "address" },
      { type: "bytes", name: "_pubKey", internalType: "bytes" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "oTp",
    inputs: [{ type: "bytes32", name: "_o", internalType: "bytes32" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "otpHash",
    inputs: [{ type: "bytes32", name: "", internalType: "bytes32" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "proofContract",
    inputs: [{ type: "uint8", name: "", internalType: "uint8" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "register",
    inputs: [
      { type: "uint8", name: "seriesNumber", internalType: "uint8" },
      {
        type: "tuple",
        name: "proof",
        internalType: "struct Proof",
        components: [
          {
            type: "tuple",
            name: "a",
            internalType: "struct Pairing.G1Point",
            components: [
              { type: "uint256", name: "X", internalType: "uint256" },
              { type: "uint256", name: "Y", internalType: "uint256" },
            ],
          },
          {
            type: "tuple",
            name: "b",
            internalType: "struct Pairing.G2Point",
            components: [
              {
                type: "uint256[2]",
                name: "X",
                internalType: "uint256[2]",
              },
              {
                type: "uint256[2]",
                name: "Y",
                internalType: "uint256[2]",
              },
            ],
          },
          {
            type: "tuple",
            name: "c",
            internalType: "struct Pairing.G1Point",
            components: [
              { type: "uint256", name: "X", internalType: "uint256" },
              { type: "uint256", name: "Y", internalType: "uint256" },
            ],
          },
        ],
      },
      {
        type: "uint256[1]",
        name: "_areaCode",
        internalType: "uint256[1]",
      },
      { type: "address", name: "_to", internalType: "address" },
      { type: "bytes", name: "hash", internalType: "bytes" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256", name: "areaCode", internalType: "uint256" },
      { type: "address", name: "to", internalType: "address" },
      { type: "bytes", name: "numberHash", internalType: "bytes" },
    ],
    name: "requests",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "verified",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "verifier",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bytes", name: "", internalType: "bytes" }],
    name: "verifierPubkey",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "verify",
    inputs: [
      { type: "uint256", name: "_otp", internalType: "uint256" },
      { type: "address", name: "user", internalType: "address" },
    ],
  },
];
