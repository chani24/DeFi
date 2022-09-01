import Image from "next/image";
import styles from "../styles/Nav.module.css";

export default function Footer() {
  return (
    <div className={"flex " + styles.footer}>
      {" "}
      <div className="flex justify-between grow">
        <div className="flex">
          <div className=" flex items-center mr-5">
            <a href="/dashboard">Dashboard</a>
          </div>
          <div className=" flex items-center mr-5">
            <a href="/market">Market</a>
          </div>
          <div className=" flex items-center mr-5">
            <a href="/prices">Prices</a>
          </div>
          <div className=" flex items-center mr-5">
            <a>Support</a>
          </div>
          <div className=" flex items-center">
            <a>Terms</a>
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
