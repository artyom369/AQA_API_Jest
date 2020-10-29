
const axios = require('axios');

test ('historical rate for 2020-10-22, base=USD', () => {

    const expectedRateBaseUSD = {
        "rates": {
            "CAD": 1.3162169021,
            "EUR": 0.8459521191,
            "JPY": 104.6611961763,
            "USD": 1.0,
            "GBP": 0.7636663565
        },
        "base": "USD",
        "date": "2020-10-22"
    }
    
    axios.get('https://api.exchangeratesapi.io/2020-10-22?symbols=USD,EUR,CAD,JPY,GBP&base=USD').then(resp => {
        
    expect(resp.data).toEqual(expectedRateBaseUSD);

    });

});

test('historical rate for 2020-10-22, base=CAD', () => {
    const expectedReteBaseCAD = {
        "rates": {
            "CAD": 1.0,
            "EUR": 0.6427148274,
            "JPY": 79.5166784498,
            "USD": 0.7597531975,
            "GBP": 0.5801979562
        },
        "base": "CAD",
        "date": "2020-10-22"
    };
    
    axios.get('https://api.exchangeratesapi.io/2020-10-22?symbols=USD,EUR,CAD,JPY,GBP&base=CAD').then(resp => {

        expect(resp.data).toEqual(expectedReteBaseCAD);
    
        });
});

test('wrong data of the historical rate (2020-10-21), base=USD', () => {
    const expectedRateBaseUSD = {
        "rates": {
            "CAD": 1.3126054674,
            "EUR": 0.8437394533,
            "JPY": 104.8515018562,
            "USD": 1.0,
            "GBP": 0.7657273034
        },
        "base": "USD",
        "date": "2020-10-21"
    }
    axios.get('https://api.exchangeratesapi.io/2020-10-22?symbols=USD,EUR,CAD,JPY,GBP&base=USD').then(resp => {

        expect(resp.data).toEqual(expectedRateBaseUSD);
    
        });
})