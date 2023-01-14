type TButtonProps = {
  text?: string;
  onClick?: any;
};

const MyButton = ({ onClick, text }: TButtonProps) => {
  return (
    <button
      className="bg-primary text-white py-2 px-4 rounded-xl my-2 hover:bg-magenta hover:text-primary"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MyButton;
