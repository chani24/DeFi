import Image from "next/image";
import styles from "../styles/Home.module.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import { useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const accounts = [
    {
      logo: "aave",
      abb: "AAVE",
      name: "AAVE TOKEN",
      totalSupply: {
        value: "1.52M",
        indices: null,
        type: "positive",
      },
      supplyApy: {
        value: "3.41",
        indices: null,
        type: "positive",
      },
      totalBorrow: {
        value: "572k",
        indices: null,
        type: "positive",
      },
      borrowApy: {
        value: "12.66",
        indices: null,
        type: "positive",
      },
    },
    {
      logo: "usdc",
      abb: "USDC",
      name: "USD COIN",
      totalSupply: {
        value: "1,112.38M",
        indices: 4.41,
        type: "negative",
      },
      supplyApy: {
        value: "0.73",
        indices: 0.04,
        type: "negative",
      },
      totalBorrow: {
        value: "412.65M",
        indices: 6.5,
        type: "negative",
      },
      borrowApy: {
        value: "2.14",
        indices: 0.05,
        type: "negative",
      },
    },
    {
      logo: "usdt",
      abb: "USDT",
      name: "TETHER",
      totalSupply: {
        value: "552.02M",
        indices: 0.53,
        type: "negative",
      },
      supplyApy: {
        value: "2.13",
        indices: null,
        type: "negative",
      },
      totalBorrow: {
        value: "338.91M",
        indices: 0.48,
        type: "negative",
      },
      borrowApy: {
        value: "3.67",
        indices: null,
        type: "negative",
      },
    },
    {
      logo: "uni",
      abb: "UNI",
      name: "UNISWAP",
      totalSupply: {
        value: "41.76M",
        indices: 0.01,
        type: "negative",
      },
      supplyApy: {
        value: "0.57",
        indices: null,
        type: "negative",
      },
      totalBorrow: {
        value: "4.67M",
        indices: 0.02,
        type: "positive",
      },
      borrowApy: {
        value: "6.98",
        indices: null,
        type: "negative",
      },
    },
    {
      logo: "link",
      abb: "LINK",
      name: "CHAIN LINK",
      totalSupply: {
        value: "18.03M",
        indices: 1.37,
        type: "positive",
      },
      supplyApy: {
        value: "0.19",
        indices: null,
        type: "negative",
      },
      totalBorrow: {
        value: "1.16M",
        indices: 0.01,
        type: "positive",
      },
      borrowApy: {
        value: "5.02",
        indices: 0.02,
        type: "negative",
      },
    },
    {
      logo: "dai",
      abb: "DAI",
      name: "DAI",
      totalSupply: {
        value: "661.67M",
        indices: 10.62,
        type: "negative",
      },
      supplyApy: {
        value: "0.14",
        indices: 0.06,
        type: "negative",
      },
      totalBorrow: {
        value: "319.74M",
        indices: 12.87,
        type: "negative",
      },
      borrowApy: {
        value: "2.79",
        indices: 0.07,
        type: "negative",
      },
    },
    {
      logo: "mkr",
      abb: "MKR",
      name: "MAKER",
      totalSupply: {
        value: "12.04M",
        indices: null,
        type: "negative",
      },
      supplyApy: {
        value: "0.00",
        indices: null,
        type: "negative",
      },
      totalBorrow: {
        value: "1K",
        indices: null,
        type: "negative",
      },
      borrowApy: {
        value: "2.31",
        indices: null,
        type: "negative",
      },
    },
    {
      logo: "fil",
      abb: "FIL",
      name: "FILE COIN",
      totalSupply: {
        value: "66.43K",
        indices: null,
        type: "negative",
      },
      supplyApy: {
        value: "0.85",
        indices: null,
        type: "negative",
      },
      totalBorrow: {
        value: "25.63K",
        indices: null,
        type: "negative",
      },
      borrowApy: {
        value: "3.43",
        indices: null,
        type: "negative",
      },
    },
  ];

  return (
    <div className={styles.container}>
      <TopNav activeLink="market" isConnect={false} />

      <main className={styles.main}>
        <div className="flex justify-between">
          <div className="flex sm-hide items-center">
            <Image
              src="/images/avatar.png"
              alt={"user avatar"}
              width={48}
              height={48}
            />
            <div className=" ml-3 pr-5">
              <div className="flex items-center">
                <div className="mr-1">0E8a9...fr20</div>
                <Image
                  src="/images/icons/link.svg"
                  alt={"link icon"}
                  width={16}
                  height={16}
                />
              </div>
              <div className="text-lightgray text-xs flex items-center">
                <div className="mr-1">0E8a9...fr20</div>
                <Image
                  src="/images/icons/copy.svg"
                  alt={"link icon"}
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
          <div className="flex  text-end">
            <div className="pr-5">
              <div className="text-gray text-xs">Total market size</div>
              <div>$ 10.65B</div>
            </div>
            <div
              className="px-5"
              style={{
                borderRight: "1px solid #3B3D41",
                borderLeft: "1px solid #3B3D41",
              }}
            >
              <div className="text-gray text-xs">Total supply</div>
              <div>$ 7.73B</div>
            </div>
            <div className="pl-5">
              <div className="text-gray text-xs">Total borrow</div>
              <div>$ 3.31B</div>
            </div>
          </div>
        </div>
        <div className={"mt-4 " + styles.accounts_container}>
          <div className={styles.markets_card + " grow"}>
            <h1 className="text-gradient mb-3 text-lg">All Markets</h1>
            <div className="text-lightgray text-xs flex mb-3">
              <div className="w-25 sm-w-50">Assets</div>
              <div className="w-15 flex justify-end sm-w-25">Total supply</div>
              <div className="w-15 sm-w-30 flex justify-end sm-hide">
                Supply APY
              </div>
              <div className="w-15 flex justify-end sm-w-25">Total borrow</div>
              <div className="w-15 flex justify-end sm-hide">Borrow APY</div>
            </div>
            <div className="text-sm">
              {accounts.map((account, index) => {
                return (
                  <div className={styles.card_item} key={index}>
                    <div className="w-25 sm-w-50 ">
                      <div className="flex items-center">
                        <Image
                          src={"/images/logos/" + account.logo + ".png"}
                          alt={account.logo + " icon"}
                          width={31}
                          height={31}
                        />
                        <div className="ml-3">
                          <div className="text-sm">{account.name}</div>
                          <div className="text-lightgray text-xs">
                            {account.abb}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-15 flex flex-col items-end sm-w-25">
                      <div className="text-sm">
                        {"$" + account.totalSupply.value}
                      </div>
                      {account.totalSupply.indices ? (
                        <div
                          className={
                            account.totalSupply.type === "positive"
                              ? "text-green text-xs"
                              : "text-red text-xs"
                          }
                        >
                          {account.totalSupply.type === "positive" ? "+" : "-"}
                          {account.totalSupply.indices + "%"}
                        </div>
                      ) : (
                        <Image
                          src="/images/icons/restricted.svg"
                          alt={account.logo + " indices"}
                          width={15}
                          height={15}
                        />
                      )}
                    </div>
                    <div className="w-15 flex flex-col items-end sm-hide">
                      <div className="text-sm">
                        {account.supplyApy.value + "%"}
                      </div>
                      {account.supplyApy.indices ? (
                        <div
                          className={
                            account.supplyApy.type === "positive"
                              ? "text-green text-xs"
                              : "text-red text-xs"
                          }
                        >
                          {account.supplyApy.type === "positive" ? "+" : "-"}
                          {account.supplyApy.indices + "%"}
                        </div>
                      ) : (
                        <Image
                          src="/images/icons/restricted.svg"
                          alt={account.logo + " indices"}
                          width={15}
                          height={15}
                        />
                      )}
                    </div>
                    <div className="w-15 flex flex-col items-end sm-w-25">
                      <div className="text-sm">
                        {"$" + account.totalBorrow.value}
                      </div>
                      {account.totalBorrow.indices ? (
                        <div
                          className={
                            account.totalBorrow.type === "positive"
                              ? "text-green text-xs"
                              : "text-red text-xs"
                          }
                        >
                          {account.totalBorrow.type === "positive" ? "+" : "-"}
                          {account.totalBorrow.indices + "%"}
                        </div>
                      ) : (
                        <Image
                          src="/images/icons/restricted.svg"
                          alt={account.logo + " indices"}
                          width={15}
                          height={15}
                        />
                      )}
                    </div>
                    <div className="w-15 flex flex-col items-end sm-hide">
                      <div className="text-sm">
                        {account.borrowApy.value + "%"}
                      </div>
                      {account.borrowApy.indices ? (
                        <div
                          className={
                            account.borrowApy.type === "positive"
                              ? "text-green text-xs"
                              : "text-red text-xs"
                          }
                        >
                          {account.borrowApy.type === "positive" ? "+" : "-"}
                          {account.borrowApy.indices + "%"}
                        </div>
                      ) : (
                        <Image
                          src="/images/icons/restricted.svg"
                          alt={account.logo + " indices"}
                          width={15}
                          height={15}
                        />
                      )}
                    </div>
                    <div className="w-15 sm-hide flex justify-end items-center text-xs">
                      <div className="flex items-center justify-center small-btn">
                        Details
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
