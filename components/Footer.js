import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Footer() {
  return (
    <div className={"flex " + styles.footer}>
      {" "}
      <div className="flex justify-between grow">
        <div className="flex">
          <div className=" flex items-center mr-5">
            <Link href="/dashboard">Dashboard</Link>
          </div>
          <div className=" flex items-center mr-5">
            <Link href="/market">Market</Link>
          </div>
          <div className=" flex items-center mr-5">
            <Link href="/prices">Prices</Link>
          </div>
          <div className=" flex items-center mr-5">
            <Link href="">Support</Link>
          </div>
          <div className=" flex items-center">
            <Link href="">Terms</Link>
          </div>
        </div>
        <div className="flex items-center sm-hide">
          <span className="mr-1">$USD</span>
          <Image
            src="/images/icons/options.svg"
            alt="options"
            width={12}
            height={12}
          />
          <span className="ml-2 mr-1">Language</span>
          <Image
            src="/images/icons/gb-flag.svg"
            alt="Great britain flag"
            width={16}
            height={12}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
}
