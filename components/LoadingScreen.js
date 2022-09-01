import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "../styles/LoadingScreen.module.css";

export default function LoadingScreen() {
  const containerRef = useRef();
  const fadeRef = useRef();
  const loaderRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(containerRef.current, {
      height: "0",
      delay: 7,
      duration: 2,
      ease: "power4.out",
    });
    gsap.to(fadeRef.current, {
      height: "0",
      display: "none",
      delay: 7,
      duration: 1,
      ease: "expo.inOut",
    });
    gsap.to(loaderRef.current, {
      width: "100%",
      delay: 1,
      duration: 6,
      ease: "power2.inOut",
    });
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.progress__wrapper} ref={fadeRef}>
        <Image src="/images/logo.svg" alt="DeFi logo" width={86} height={48} />
        <div className={styles.progress__container}>
          <div className={styles.progress__bar} ref={loaderRef} />
        </div>
      </div>
    </div>
  );
}
