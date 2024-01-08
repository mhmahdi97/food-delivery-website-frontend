import logo from "../../assets/images/logo.png";
import MenuButton from "./MenuButton";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

const Navbar = () => {
    return (
      <div className="flex gap-2 justify-center sm:justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-2 items-center">
          <SearchBar />
          <MenuButton />
        </div>
        <div className="hidden sm:block">
          <UserProfile />
        </div>
      </div>
    );
};

export default Navbar;