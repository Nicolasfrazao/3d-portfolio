import Image from "next/image";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <Image src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" width={20} height={20} />
        </div>
        <div className="social-icon">
          <Image src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" width={20} height={20} />
        </div>
        <div className="social-icon">
          <Image src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" width={20} height={20}/>
        </div>
      </div>

      <p className="text-white-800">© 2024 Nicolas Frazao. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
