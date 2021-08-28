import Head from "next/head";
import useAppData from "../../data/hook/useAppData";
import ChangeThemeButton from "./ChangeThemeButton";
import Title from "./Title";

interface IProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: IProps) => {
  const { theme, changeTheme } = useAppData();

  return (
    <div className={`flex `}>
      <Title title={title} subtitle={subtitle} />

      <div className={`flex flex-grow justify-end`}>
        <ChangeThemeButton theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
};
export default Header;
