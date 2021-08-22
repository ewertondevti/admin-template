import { AdjustmentsIcon, BellIcon, HomeIcon, LogoutIcon } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

interface IProps {}

const SiderMenu = ({}: IProps) => {
  const handleClick = () => alert("TODO:");

  return (
    <aside
      className="flex flex-col 
    bg-gray-200 text-gray-900
    dark:bg-gray-900 dark:text-gray-200"
    >
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <ItemMenu url="/" text="Home" icon={<HomeIcon />} />
        <ItemMenu
          url="/adjustments"
          text="Adjustments"
          icon={<AdjustmentsIcon />}
        />
        <ItemMenu
          url="/notifications"
          text="Notifications"
          icon={<BellIcon />}
        />
      </ul>
      <ul>
        <ItemMenu
          text="Logout"
          icon={<LogoutIcon />}
          onClick={handleClick}
          className="text-red-600 dark:text-red-400 
          hover:bg-red-400 hover:text-white
          dark:hover:text-white"
        />
      </ul>
    </aside>
  );
};
export default SiderMenu;
