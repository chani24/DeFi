import Image from "next/image";
import styles from "../styles/Home.module.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

export default function Home() {
  const accounts = [
    {
      logo: "aave",
      name: "AAVE",
      value: "$97.87",
      indices: "0.89",
      type: "positive",
    },
    {
      logo: "usdc",
      name: "USDC",
      value: "$1.00",
      indices: "0.00%",
      type: "neutral",
    },
    {
      logo: "usdt",
      name: "USDT",
      value: "$1.00",
      indices: "0.00%",
      type: "neutral",
    },
    {
      logo: "uni",
      name: "UNI",
      value: "$5.26",
      indices: "3.41%",
      type: "positive",
    },
    {
      logo: "link",
      name: "LINK",
      value: "$97.87",
      indices: "0.89%",
      type: "positive",
    },
    {
      logo: "dai",
      name: "DAI",
      value: "$1.00",
      indices: "0.06%",
      type: "positive",
    },
    {
      logo: "mkr",
      name: "MKR",
      value: "$1,144.78",
      indices: "0.96%",
      type: "negative",
    },
    {
      logo: "fil",
      name: "FIL",
      value: "$5.26",
      indices: "3.41%",
      type: "positive",
    },
    {
      logo: "fei",
      name: "FEI",
      value: "$1.00",
      indices: "0.11%",
      type: "positive",
    },
    {
      logo: "busd",
      name: "BUSD",
      value: "$1.00",
      indices: "0.02%",
      type: "negative",
    },
    {
      logo: "eth",
      name: "ETH",
      value: "$1.79K",
      indices: "1.12%",
      type: "negative",
    },
    {
      logo: "sushi",
      name: "SUSHI",
      value: "$1.52",
      indices: "0.83%",
      type: "positive",
    },
    {
      logo: "comp",
      name: "COMP",
      value: "$55.27",
      indices: "2.39%",
      type: "negative",
    },
    {
      logo: "shib",
      name: "SHIB",
      value: "<$0.001",
      indices: "1.72%",
      type: "negative",
    },
    {
      logo: "yfi",
      name: "YFI",
      value: "$7,608.29",
      indices: "1.51%",
      type: "positive",
    },
    {
      logo: "zrx",
      name: "ZRX",
      value: "$0.40",
      indices: "0.62%",
      type: "negative",
    },
  ];

  return (
    <div className={styles.container}>
      <TopNav activeLink="prices" isConnect={false} />

      <main className={styles.main}>
        <div>
          <h1 className="text-gradient mb-3 mt-3 text-lg">Watchlist</h1>
          <div
            className={styles.markets_card + " grow text-xs flex items-center"}
          >
            <p style={{ marginBottom: "0.5rem" }}>
              Saved tokens would appear here
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-gradient mb-2 mt-6 text-lg">Assets</h1>
        </div>
        <div className={styles.prices_container}>
          {accounts.map((account, index) => {
            return (
              <div key={index}>
                <Image
                  src={"/images/logos/large/" + account.logo + ".png"}
                  alt={account.logo + " icon"}
                  width={52}
                  height={52}
                />
                <div className="ml-3 flex flex-col justify-between py-1">
                  <div className="text-sm">{account.name}</div>
                  <div className="text-lightgray text-xs flex">
                    {account.value}{" "}
                    <div
                      className={
                        account.type === "positive"
                          ? "text-green text-xs ml-1"
                          : account.type === "negative"
                          ? "text-red text-xs ml-1"
                          : "text-lightgray text-xs ml-1"
                      }
                    >
                      {account.type === "positive"
                        ? "+"
                        : account.type === "negative"
                        ? "-"
                        : ""}
                      {account.indices}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
