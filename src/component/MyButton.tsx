type TButtonProps = {
  text?: string;
  condition?: boolean;
  onClick?: any;
};

const MyButton = ({ onClick, text, condition }: TButtonProps) => {
  const myComponentClass = condition
    ? "bg-primary text-white py-2 px-4 rounded-full my-2 border-2 hover:bg-magenta hover:text-primary"
    : "text-primary py-2 px-4 rounded-full my-2 border-2 hover:border-none";
  return (
    <button className={myComponentClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
