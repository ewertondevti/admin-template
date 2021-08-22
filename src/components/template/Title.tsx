interface IProps {
  title: string;
  subtitle: string;
}

const Title = ({ title, subtitle }: IProps) => {
  return (
    <div>
      <h1 className={``}>{title}</h1>
      <h2 className={``}>{subtitle}</h2>
    </div>
  );
};
export default Title;
