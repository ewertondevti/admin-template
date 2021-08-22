import Link from "next/link";

interface IProps {
  url?: string;
  text: string;
  icon: any;
  className?: string;
  onClick?: () => void;
}

const ItemMenu = ({ url, text, icon, className, onClick }: IProps) => {
  const renderLink = () => (
    <a
      onClick={onClick}
      className={`flex flex-col justify-center 
      items-center w-20 h-20 text-gray-600 
      dark:text-gray-200
      ${className ?? ""}`}
    >
      {icon}
      <span className={`text-xs font-light`}>{text}</span>
    </a>
  );

  const renderContent = () => {
    if (url) return <Link href={url}>{renderLink()}</Link>;

    return renderLink();
  };

  return (
    <li className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}>
      {renderContent()}
    </li>
  );
};
export default ItemMenu;
