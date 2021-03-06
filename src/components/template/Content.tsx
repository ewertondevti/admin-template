interface IProps {
  children?: any;
}

const Content = ({ children }: IProps) => {
  return (
    <div className={`flex flex-col mt-7 dark:text-gray-200`}>{children}</div>
  );
};
export default Content;
