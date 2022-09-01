import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoadingScreen from "../components/LoadingScreen";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import { useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const accounts = [
    {
      logo: "metamask",
      name: "MetaMask",
    },
    {
      logo: "coinbase",
      name: "Coinbase",
    },
    {
      logo: "trustwallet",
      name: "Trust Wallet",
    },
    {
      logo: "metamask",
      name: "Wallet Connect",
    },
    {
      logo: "binance",
      name: "Binance",
    },
    {
      logo: "algorand",
      name: "Algorand",
    },
  ];
  const modalRef = useRef();
  const openModal = () => {
    gsap.to(modalRef.current, {
      opacity: "1",
      pointerEvents: "auto",
      delay: 0,
      duration: 1,
      ease: "expo.inOut",
    });
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: "0",
      pointerEvents: "none",
      delay: 0,
      duration: 1,
      ease: "expo.inOut",
    });
  };

  const connectAccount = () => {
    router.push("/dashboard");
    closeModal();
  };

  return (
    <div className={styles.container}>
      <LoadingScreen />

      <TopNav activeLink="dashboard" isConnect={true} buttonClick={openModal} />

      <main className={styles.main}>
        <div className="flex justify-end text-end">
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
        <div className={"mt-8 " + styles.card}>
          <div className="mb-8">Please connect your wallet</div>
          <button className="btn" onClick={openModal}>
            Connect wallet
          </button>
        </div>
      </main>

      <Footer />
      <div className={styles.modal_background} ref={modalRef}>
        <div className={styles.modal_container}>
          <div className="font-semibold mb-6">Connect a wallet</div>
          <div className={styles.modal_accounts}>
            {accounts.map((account, index) => {
              return (
                <div onClick={connectAccount} key={index}>
                  <Image
                    src={"/images/logos/" + account.logo + ".png"}
                    alt={account.logo + " logo"}
                    width={20}
                    height={20}
                  />{" "}
                  <span className="ml-1">{account.name}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center text-xs mt-6">
            <div>By connecting your wallet, you agree to UNTITLED</div>
            <div className="font-bold">Privacy policy and terms of service</div>
          </div>
          <div className={styles.modal_close} onClick={closeModal}>
            <Image
              src="/images/icons/close.svg"
              alt="close"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
