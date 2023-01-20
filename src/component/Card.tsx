import pizza from "@/assets/sabores/portuguesa.jpg";

type TCard = {
  sabor?: string;
  ingredientes?: string;
  image?: string;
};

function Card({ sabor, ingredientes, image }: TCard) {
  return (
    <div className="p-4 my-4 bg-white rounded-lg shadow-md md:w-full cursor-pointer">
      <div className="flex justify-between items-center space-x-4">
        <div className="flex items-center">
          <img
            src={pizza}
            alt={pizza}
            className="w-[50px] h-[50px] flex-shrink-0 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-full truncate capitalize">
              {sabor}
            </p>
            <p className="text-sm text-gray-medio">{ingredientes}</p>
          </div>
        </div>

        <p>{image}</p>
      </div>
    </div>
  );
}

export default Card;
