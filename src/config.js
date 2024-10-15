const NETWORK_ENV = process.env.BUILD_ENV;

const configMap = {
  mainnet: {
    botToken: process.env.TELEGRAM_BOT_TOKEN_MAINNET,
    serviceUrl: "https://home.awaken.finance",
    swapUrl: "https://app.awaken.finance/swap",
    communityUrl: "https://t.me/AwakenSwap",
    twitterUrl: "https://x.com/AwakenSwap",
  },
  testnet: {
    botToken: process.env.TELEGRAM_BOT_TOKEN_TESTNET,
    serviceUrl: "https://test-home.awaken.finance",
    swapUrl: "https://test-app.awaken.finance/swap",
    communityUrl: "https://t.me/AwakenSwap",
    twitterUrl: "https://x.com/AwakenSwap",
  },
};

module.exports = configMap[NETWORK_ENV];
