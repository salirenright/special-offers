'use strict';
const update = {
    date: '20 июля',
    usd: {
        buyRate: '73,75',
        sellRate: '75,24',
    },
    eur: {
        buyRate: '86,70',
        sellRate: '88,74',
    }
};

function updateExchangeRates(data) {
    const newDate = document.getElementById('date');
    newDate.textContent = data.date;

    const newUsdBuyRate = document.getElementById('usd-buy-rate');
    newUsdBuyRate.textContent = data.usd.buyRate;
    const newUsdSellRate = document.getElementById('usd-sell-rate');
    newUsdSellRate.textContent = data.usd.sellRate;


    const newEurBuyRate = document.getElementById('eur-buy-rate');
    newEurBuyRate.textContent = data.eur.buyRate;
    const newEurSellRate = document.getElementById('eur-sell-rate');
    newEurSellRate.textContent = data.eur.sellRate;

}

updateExchangeRates(update);