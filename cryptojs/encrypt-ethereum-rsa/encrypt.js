const EthRSA = require("ethereum-rsa");

//in the real application the pubKeyReceiver will be hardcoded,
//in that case pubKeyReceiver will be the verifier public key
async function encrypt(msg, privKeySender, pubKeyReceiver) {
  const encryptMessage = await EthRSA.encryptMessage(
    msg,
    privKeySender,
    pubKeyReceiver
  );

  console.log("encrypted message: ", encryptMessage);
}

encrypt(
  "test 1",
  "ecb8e554bba690eff53f1bc914941d34ae7ec446e0508d14bab3388d3e5c9457",
  "040e79e2a202a478840fdcb3483972c22b14e37108193e00e71f501f8351ec96226b319d785978a49643a8a16d3babbcc635b9ab431a5228c4b7e012fba908d75b"
);

// key examples:

// priv key: 969266c6cd906c2865d937ddeeaf0f2933282bd7ebefea854c16eeed9a861f68
// pub key: 040e79e2a202a478840fdcb3483972c22b14e37108193e00e71f501f8351ec96226b319d785978a49643a8a16d3babbcc635b9ab431a5228c4b7e012fba908d75b

// priv key: ac26a72c0a8bb64e71001b60c974a15170aae98100099a92a6112d6ef1a2f07e
// pub key: 04ce5ce3d801e7b65c05eedc2452a07665df753a9538b9b6705de1ad6da42049bc54c017d53b809c9e018babf435bedbbd566b7f6ce8a05bd9d5fd368731ceeda5

// priv key: f58ee70fce1ca86138736f91c46aa010b93e82d3d579dade3143fbeada205cb9
// pub key: 042b9726d3c7bd89a595f4b551643831a1c265b5dee88d604dc3d039cc653785b5516bf806812f2ef01c0eb506d0f076328c98933d2495f25c00b8abdbd9f1c635
