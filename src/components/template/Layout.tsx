import Content from "./Content";
import Header from "./Header";
import SiderMenu from "./SiderMenu";

interface IProps {
  title: string;
  subtitle: string;
  children?: any;
}

const Layout = ({ title, subtitle, children }: IProps) => {
  return (
    <div className={`dark flex h-screen w-screen`}>
      <SiderMenu />
      <div className={`flex flex-col bg-gray-300 w-full p-7 dark:bg-gray-800`}>
        <Header title={title} subtitle={subtitle} />
        <Content>{children}</Content>
      </div>
    </div>
  );
};
export default Layout;
