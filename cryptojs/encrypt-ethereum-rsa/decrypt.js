const EthRSA = require("ethereum-rsa");

async function decrypt(cipherText, recipientPrivateKey, senderPublicKey) {
  const message = await EthRSA.decryptMessage(
    cipherText,
    recipientPrivateKey,
    senderPublicKey
  );

  console.log(message);
}

//ex.:
decrypt(
  "nZ6cW3TMGW8PlXtm++S+ucpiubMVsvnsOudzU5AtEKY=",
  "969266c6cd906c2865d937ddeeaf0f2933282bd7ebefea854c16eeed9a861f68",
  "04f21b2b2fec758670c2906e685afa6bdec4a3655a2bcd5f12cabf0ebfbcc83d44eba21d1ba84e520cdd163d510a1e27f8f803c0ad941c7b50a91bd5e11556edaf"
);

// key examples:

// priv key: 969266c6cd906c2865d937ddeeaf0f2933282bd7ebefea854c16eeed9a861f68
// pub key: 040e79e2a202a478840fdcb3483972c22b14e37108193e00e71f501f8351ec96226b319d785978a49643a8a16d3babbcc635b9ab431a5228c4b7e012fba908d75b

// priv key: ac26a72c0a8bb64e71001b60c974a15170aae98100099a92a6112d6ef1a2f07e
// pub key: 04ce5ce3d801e7b65c05eedc2452a07665df753a9538b9b6705de1ad6da42049bc54c017d53b809c9e018babf435bedbbd566b7f6ce8a05bd9d5fd368731ceeda5

// priv key: f58ee70fce1ca86138736f91c46aa010b93e82d3d579dade3143fbeada205cb9
// pub key: 042b9726d3c7bd89a595f4b551643831a1c265b5dee88d604dc3d039cc653785b5516bf806812f2ef01c0eb506d0f076328c98933d2495f25c00b8abdbd9f1c635
