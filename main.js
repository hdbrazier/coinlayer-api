const API_KEY = '6ccc52bf280e35801cec4753aa007e1c'


async function getCoinData() {
    const url = `http://api.coinlayer.com/api/live?access_key=${API_KEY}`
    
    let result = await fetch(url);
    let data = await result.json();
    console.log(data)


    const bitcoinPrice = data.rates.BTC;
    const ethereumPrice = data.rates.ETH;
    const tetherPrice = data.rates.USDT;
    const litecoinPrice = data.rates.LTC;
    const bnbPrice = data.rates.BNB;
    const tronPrice = data.rates.TRX;

    document.getElementById('bitcoin-price').innerHTML = bitcoinPrice
    document.getElementById('ethereum-price').innerHTML = ethereumPrice
    document.getElementById('tether-price').innerHTML = tetherPrice
    document.getElementById('litecoin-price').innerHTML = litecoinPrice
    document.getElementById('bnb-price').innerHTML = bnbPrice
    document.getElementById('tron-price').innerHTML = tronPrice

}

getCoinData()