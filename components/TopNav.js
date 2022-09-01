import Image from "next/image";
import styles from "../styles/Nav.module.css";

export default function TopNav({ activeLink, isConnect, buttonClick }) {
  return (
    <div className={"flex " + styles.container}>
      <div className="mr-4 flex items-center">
        <Image src="/images/logo.svg" alt="DeFi logo" width={43} height={24} />
      </div>{" "}
      <div className="flex justify-between grow">
        <div className="flex sm-hide">
          <div
            className={
              activeLink === "dashboard"
                ? " active py-2  flex items-center mr-3"
                : "py-2  flex items-center mr-3"
            }
          >
            <a className="text-xs" href="/dashboard">
              Dashboard
            </a>
          </div>
          <div
            className={
              activeLink === "market"
                ? " active py-2  flex items-center mr-3"
                : "py-2  flex items-center mr-3"
            }
          >
            <a className="text-xs" href="/market">
              Market
            </a>
          </div>
          <div
            className={
              activeLink === "prices"
                ? " active py-2  flex items-center mr-3"
                : "py-2  flex items-center mr-3"
            }
          >
            <a className="text-xs" href="/prices">
              Prices
            </a>
          </div>
        </div>
        <div className="py-2 flex items-center justify-end grow">
          <Image
            src="/images/icons/ethereum-badge.png"
            alt="ethereum logo"
            width={20}
            height={20}
          />
          <span className="mr-1 ml-2 text-xs">0</span>
          <span className="mr-2 text-xs">ETH</span>
          <Image
            src="/images/icons/arrow-down.svg"
            alt="ethereum logo"
            width={15}
            height={8}
          />
          {isConnect ? (
            <button className="ml-6 btn" onClick={buttonClick}>
              Connect Wallet
            </button>
          ) : (
            <button className="ml-6 btn">
              <div className="text-xs flex items-center">
                <div className="mr-1">0E8a9fr20P...</div>
                <Image
                  src="/images/icons/settings.svg"
                  alt={"settings icon"}
                  width={16}
                  height={16}
                />
              </div>
            </button>
          )}

          <div></div>
        </div>
      </div>
    </div>
  );
}
