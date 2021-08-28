import { MoonIcon, SunIcon } from "../icons";

interface IProps {
  theme?: "dark" | "";
  changeTheme?: () => void;
}

const ChangeThemeButton = ({ theme, changeTheme }: IProps) => {
  if (theme === "dark")
    return (
      <div
        onClick={changeTheme}
        className={`hidden sm:flex items-center justify-between cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-32 h-8 p-1 rounded-full`}
      >
        <div
          className={`flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}
        >
          <SunIcon />
        </div>
        <div
          className={`hidden lg:flex items-center justify-end pr-2 text-white text-sm`}
        >
          Daymode
        </div>
      </div>
    );

  return (
    <div
      onClick={changeTheme}
      className={`hidden sm:flex items-center justify-between cursor-pointer bg-gradient-to-r from-gray-500 to-gray-900 w-14 lg:w-32 h-8 p-1 rounded-full`}
    >
      <div
        className={`hidden lg:flex items-center justify-center pl-2 text-gray-300 text-sm`}
      >
        Nightmode
      </div>
      <div
        className={`flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full`}
      >
        <MoonIcon />
      </div>
    </div>
  );
};
export default ChangeThemeButton;
