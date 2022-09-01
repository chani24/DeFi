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
      name: "AAVE",
      apy: "3.344",
      isCollateral: true,
      bapy: "12.70",
      liquidity: "974k",
    },
    {
      logo: "usdc",
      name: "USDC",
      apy: "1.04",
      isCollateral: true,
      bapy: "2.20",
      liquidity: "730.73M",
    },
    {
      logo: "usdt",
      name: "USDT",
      apy: "1.78",
      isCollateral: false,
      bapy: "3.65",
      liquidity: "209.11M",
    },
    {
      logo: "uni",
      name: "UNI",
      apy: "0.19",
      isCollateral: true,
      bapy: "6.99",
      liquidity: "37.29M",
    },
    {
      logo: "link",
      name: "LINK",
      apy: "0.98",
      isCollateral: true,
      bapy: "4.05",
      liquidity: "15.37M",
    },
    {
      logo: "dai",
      name: "DAI",
      apy: "1.65",
      isCollateral: true,
      bapy: "2.87",
      liquidity: "393.61M",
    },
    {
      logo: "mkr",
      name: "MKR",
      apy: "1.41",
      isCollateral: true,
      bapy: "2.31",
      liquidity: "5.78M",
    },
    {
      logo: "fil",
      name: "FIL",
      apy: "0.85",
      isCollateral: false,
      bapy: "3.43",
      liquidity: "297.95k",
    },
  ];

  return (
    <div className={styles.container}>
      <TopNav activeLink="dashboard" isConnect={false} />

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
              <div className="text-gray text-xs">Net APY</div>
              <div>% 0</div>
            </div>
            <div
              className="px-5"
              style={{
                borderRight: "1px solid #3B3D41",
                borderLeft: "1px solid #3B3D41",
              }}
            >
              <div className="text-gray text-xs">Supply balance</div>
              <div>$ 0</div>
            </div>
            <div className="pl-5">
              <div className="text-gray text-xs">Borrow balance</div>
              <div>$ 0</div>
            </div>
          </div>
        </div>
        <div className={"mt-4 " + styles.accounts_container}>
          <div className={styles.markets_card}>
            <h1 className="text-gradient mb-4 text-lg">Supply Markets</h1>
            <div className="text-lightgray text-xs flex mb-3">
              <div className="w-20 sm-w-30">Assets</div>
              <div className="w-10 flex justify-center">Wallet</div>
              <div className="w-15 sm-w-30 flex justify-center">APY</div>
              <div className="w-15 flex justify-center">Collateral</div>
            </div>
            <div className="text-sm">
              {accounts.map((account, index) => {
                return (
                  <div className={styles.card_item} key={index}>
                    <div className="w-20 sm-w-30 ">
                      <div className="flex items-center">
                        <Image
                          src={"/images/logos/" + account.logo + ".png"}
                          alt={account.logo + " icon"}
                          width={31}
                          height={31}
                        />
                        <div className="ml-3">{account.name}</div>
                      </div>
                    </div>
                    <div className="w-10 flex justify-center items-center">
                      0
                    </div>
                    <div className="w-15 sm-w-30 flex justify-center items-center">
                      {account.apy + "%"}
                    </div>
                    <div className="w-15 flex justify-center">
                      <Image
                        src={
                          account.isCollateral
                            ? "/images/icons/check.svg"
                            : "/images/icons/restricted.svg"
                        }
                        alt={account.logo + " collateral"}
                        width={15}
                        height={15}
                      />
                    </div>
                    <div className="w-40 sm-hide flex justify-around items-center text-xs">
                      <div className="text-gray flex items-center justify-center small-btn disabled-btn">
                        Supply
                      </div>
                      <div className="flex items-center justify-center small-btn">
                        Details
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.markets_card}>
            <h1 className="text-gradient mb-3 text-lg">Demand Markets</h1>
            <div className="text-lightgray text-xs flex mb-3">
              <div className="w-20 sm-w-30">Assets</div>
              <div className="w-10 flex justify-center">Wallet</div>
              <div className="w-15 sm-w-30 flex justify-center">APY</div>
              <div className="w-15 flex justify-center">Liquidity (%)</div>
            </div>
            <div className="text-sm">
              {accounts.map((account, index) => {
                return (
                  <div className={styles.card_item} key={index}>
                    <div className="w-20 sm-w-30">
                      <div className="flex items-center">
                        <Image
                          src={"/images/logos/" + account.logo + ".png"}
                          alt={account.logo + " icon"}
                          width={31}
                          height={31}
                        />
                        <div className="ml-3">{account.name}</div>
                      </div>
                    </div>
                    <div className="w-10 flex justify-center items-center">
                      0
                    </div>
                    <div className="w-15 sm-w-30 flex justify-center items-center">
                      {account.bapy + "%"}
                    </div>
                    <div className="w-15 flex justify-center items-center">
                      {account.liquidity}
                    </div>
                    <div className="w-40 flex justify-around items-center text-xs sm-hide">
                      <div className="text-gray flex items-center justify-center small-btn disabled-btn">
                        Supply
                      </div>
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
