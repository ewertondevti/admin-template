import Title from "./Title";

interface IProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: IProps) => {
  return (
    <div>
      <Title title={title} subtitle={subtitle} />
    </div>
  );
};
export default Header;
