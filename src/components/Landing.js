import React, { useState, useEffect } from "react";

// Api
import { getCoin } from "../services/api";

// Components
import Loader from "./Loader";
import Coin from "./Coin";

// Styles
import styles from "./Landing.module.css";

const Landing = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin();
            setCoins(data);
        };
        fetchApi();
    }, []);

    const searchHandler = (event) => {
        setSearch(event.target.value);
    };

    const searchedCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {coins.length ? (
                <>
                    <input
                        type="text"
                        placeholder="Search"
                        className={styles.input}
                        onChange={searchHandler}
                    />
                    <div className={styles.coinContainer}>
                        {searchedCoins.map((coin) => (
                            <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.price_change_percentage_24h}
                                rank={coin.market_cap_rank}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Landing;
