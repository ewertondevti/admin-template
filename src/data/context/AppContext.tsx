import { createContext, useState } from "react";

type Theme = "dark" | "";

interface IContextProps {
  theme?: Theme;
  children?: any;
  changeTheme?: () => void;
}

export const AppContext = createContext<IContextProps>({});

export const AppProvider = ({ theme: themeProps, children }: IContextProps) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const changeTheme = () => {
    setTheme(!!theme ? "" : "dark");
  };

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
};
