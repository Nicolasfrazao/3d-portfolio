import Image from "next/image";

import instagram from "@/assets/instagram.svg"
import Twitter from "@/assets/twitter.svg"
import GitHub from "@/assets/github.svg"

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-500 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-800 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <Image src={GitHub} alt="github" className="" width={20} height={20} />
        </div>
        <div className="social-icon">
          <Image src={Twitter} alt="twitter" className="" width={20} height={20} />
        </div>
        <div className="social-icon">
          <Image src={instagram} alt="instagram" className="" width={20} height={20}/>
        </div>
      </div>

      <p className="text-white-800">© 2024 Nicolas Frazao. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
