import React from "react";

// Styles
import styles from "./Coin.module.css";

const Coin = ({
    name,
    image,
    symbol,
    price,
    marketCap,
    priceChange,
    rank,
    key,
}) => {
    return (
        <div className={styles.container}>
            <div className={rank < 10 ? styles.rank : styles.bigRank}>
                {rank}
            </div>
            <img src={image} alt="name" className={styles.image} />
            <span className={styles.name}>{name}</span>
            <span
                className={symbol.length > 3 ? styles.bigSymbol : styles.symbol}
            >
                {symbol.toUpperCase()}
            </span>
            <div
                className={priceChange > 0 ? styles.greenDot : styles.redDot}
            ></div>
            <span className={styles.currentPrice}>
                {price.toLocaleString()} $
            </span>
            <span
                className={
                    priceChange > 0
                        ? styles.greenPriceChange
                        : styles.redPriceChange
                }
            >
                {priceChange.toFixed(2)} %
            </span>
            <span className={styles.marketCap}>
                {marketCap.toLocaleString()} $
            </span>
        </div>
    );
};

export default Coin;
