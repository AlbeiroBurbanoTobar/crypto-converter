import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [crypto, setCrypto] = useState('');
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = async () => {
    if (crypto && currency && amount) {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`
        );
        const rate = response.data[crypto][currency];
        setResult((rate * amount).toFixed(2));
      } catch (error) {
        console.error('Error fetching conversion rate:', error);
      }
    }
  };

  return (
    <div className="app-container">
      <div className="converter-container">
        <img src="https://raw.githubusercontent.com/AlbeiroBurbano/ImagenesIconos/main/cripto-conversor.png" alt="Crypto Converter Logo" className="logo" />
        <p>Convierta sus tenencias de criptomonedas a su moneda preferida.</p>
        <div className="input-group">
          <label>Criptomoneda</label>
          <select value={crypto} onChange={(e) => setCrypto(e.target.value)}>
            <option value="">Seleccione la criptomoneda</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="litecoin">Litecoin</option>
            <option value="bitcoin-cash">Bitcoin Cash</option>
            <option value="cardano">Cardano</option>
            <option value="stellar">Stellar</option>
            <option value="binancecoin">Binance Coin</option>
            <option value="tether">Tether</option>
          </select>
        </div>
        <div className="input-group">
          <label>Divisa</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="">Selecciona la divisa</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
            <option value="gbp">GBP</option>
            <option value="cad">CAD</option>
          </select>
        </div>
        <div className="input-group">
          <label>Cantidad</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ingresa la cantidad"
          />
        </div>
        <div className="input-group">
          <label>Resultado</label>
          <input type="text" value={result} readOnly placeholder="Resultado de la conversión" />
        </div>
        <button onClick={handleConvert}>Convertir</button>
      </div>
      <footer className="app-footer">
        <p>Creado por Albeiro Burbano - Encuéntrame en:</p>
        <a href="https://www.freelancer.com/u/Albeiro73?sb=t" target="_blank" rel="noopener noreferrer">Freelancer</a> | 
        <a href="http://www.linkedin.com/in/albeiro-jose-burbano-tobar-759ba4297" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
        <a href="https://github.com/AlbeiroBurbanoTobar/ppi_pl_BurbanoA" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://stackoverflow.com/users/24090991/albeiro-burbano" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
      </footer>
  
    </div>
  );
};

export default App;
