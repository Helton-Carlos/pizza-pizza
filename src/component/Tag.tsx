type TTag = {
  title?: string;
  icon?: string;
};

const Tag = ({ title, icon }: TTag) => {
  return (
    <div>
      <div className="flex w-fit bg-magenta px-4 py-2 rounded-full text-center">
        <img src={icon} alt={icon} />
        <span className="text-primary pl-2 pt-1">{title}</span>
      </div>
    </div>
  );
};

export default Tag;
