# Coincex

**CoinCex** is a Crypto Currency Dashboard.

## Getting Started

Clone the repository on your local machine with the command below in your terminal, and cd into the **CoinCex**

```bash
https://github.com/reddyarun59/Coincex.git

cd Coincex
```

Install dependencies (if you are using yarn then do with that)

```bash
npm install
```
Start the server

```bash
npm start
```

## Live Link

[CoinCex](https://coincex.herokuapp.com)


CoinCex is a Crypto Currency Dashboard. 
      Users can watch current coin prices of top 100 coins, access their portfolio, buy and sell coins and visualize coin history by charts. 
      
Technologies used:
- ReactJS
- Redux Toolkit
- Tailwind CSS
- React-ChartJS-2
- Axios
- Coin-GeckoApi for API’s 

## Copmonents

### Header Component
- Its a simple header with Logo and Name of the App.  
      
### Coins Component
- Users can watch and scroll through top 100 coins by Market Cap.
- Users can see the price deflection of a particular coin from past 24 hours in various native currencies 

### Chart Component
- User can see the price history of a particular coin against time from 1 day to throughout 1 year 
- Implemented the Line Chart for current app(Beta version) 
### Navbar Component
- User can toggle between Native currencies and check the market cap and price in native currency
- Added Search input to find Coins

### Exchange Component
- Users can Buy and Sell Various coins through native currency. 
      
### Portfolio Component
- Users can Access their Portfolio
- Implemented the Pie Chart to visualize the current portfolio size and breakdown of coins which they are owning


