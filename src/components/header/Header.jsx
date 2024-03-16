import Image from "next/image";
import logo from "./logo.svg";

const Header = () => {
  return (
    <header>
      <Image src={logo} alt="Error upload a logo" />
    </header>
  );
};

export default Header;
