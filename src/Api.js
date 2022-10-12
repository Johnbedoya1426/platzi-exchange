const url = "https://api.coincap.io/v2/assets";

function getAssets() {
  return fetch(`${url}?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAsset(Coin) {
  return fetch(`${url}/${Coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAssetHistory(CoinDetail) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/${CoinDetail}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

function getMarkets(coin) {
    return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getExchange(id) {
    return fetch(`${url}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}
export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory,
};
