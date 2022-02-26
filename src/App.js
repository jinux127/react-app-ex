import React, { useEffect, useState } from 'react';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [conins, setCoins] = useState([]);
    const [money, setMoney] = useState(1);
    const [price,setPrice] = useState(1);
    const onChange = (e) =>{
        setMoney(e.target.value);
    }
    const onChangePrice = (e) =>{
        setPrice(e.target.value);
    }
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
            .then(json => {
                setCoins(json);
                setLoading(false);
            });
    },[])
    return ( 
        <div>
            <h1>The Coins!  {loading ? <strong>|Loading...</strong>: `| search result: (${conins.length})`}</h1>
            <hr></hr>
            <label>USD: </label>
            <input onChange={onChange} value={money}></input>
            <hr></hr>
            <select onChange={onChangePrice}>
                <option value ={1}> Please select coin!</option>
                {conins.map((coin)=><option id={coin.symbol} value={coin.quotes.USD.price} key={coin.id}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price}USD</option>)}
            </select>
            <h2>You can get {money/price}</h2>
        </div>
     );
}
 
export default App;