import fries from "../../assets/home/fries.png";

type TTag = {
  title?: string;
};

const Tag = ({ title }: TTag) => {
  return (
    <div>
      <div className="flex w-fit bg-magenta px-4 py-2 rounded-full text-center">
        <img src={fries} alt={fries} />
        <span className="text-primary pl-2 pt-1">{title}</span>
      </div>
    </div>
  );
};

export default Tag;
