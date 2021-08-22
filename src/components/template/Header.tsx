import Head from "next/head";
import Title from "./Title";

interface IProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: IProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Title title={title} subtitle={subtitle} />
    </div>
  );
};
export default Header;
