import { ethers, providers } from "ethers";
import EthereumEncryption from "ethereum-encryption";

export const encrypt = async (msg, pubAddr) => {
  const signer = provider.getSigner();

  const hash = EthereumEncryption.hash(msg);

  let signedHash = await wallet.signMessage(hash);

  console.log(signedHash);
};
