const NETWORK_ENV = process.env.BUILD_ENV;

const configMap = {
  mainnet: {
    botToken: process.env.TELEGRAM_BOT_TOKEN_MAINNET,
    serviceUrl: "https://home.awaken.finance",
    marketUrl: "https://app.awaken.finance/overview",
    tradeUrl: "https://app.awaken.finance/trading",
    swapUrl: "https://app.awaken.finance/swap",
  },
  testnet: {
    botToken: process.env.TELEGRAM_BOT_TOKEN_TESTNET,
    serviceUrl: "https://test-home.awaken.finance",
    marketUrl: "https://test-app.awaken.finance/overview",
    tradeUrl: "https://test-app.awaken.finance/trading",
    swapUrl: "https://test-app.awaken.finance/swap",
  },
};

module.exports = configMap[NETWORK_ENV];
