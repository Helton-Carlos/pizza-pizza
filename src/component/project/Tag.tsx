import fries from "../../assets/home/fries.png";

type TTag = {
  title?: string;
};

const Tag = ({ title }: TTag) => {
  return (
    <div>
      <div className="flex bg-magenta px-4 py-2 rounded-xl text-center mx-auto">
        <img src={fries} alt={fries} />
        <span className="text-primary pl-2">{title}</span>
      </div>
    </div>
  );
};

export default Tag;
