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
    <div>
      <Header title={title} subtitle={subtitle} />
      <SiderMenu />
      <Content>{children}</Content>
    </div>
  );
};
export default Layout;
