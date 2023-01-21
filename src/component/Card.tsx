import pizza from "@/assets/sabores/portuguesa.jpg";

type TCard = {
  sabor?: string;
  ingredientes?: string;
  image?: string;
  preco?: string;
};

function Card({ sabor, ingredientes, image, preco }: TCard) {
  return (
    <div className="p-4 my-5 bg-white rounded-lg shadow-md md:w-full cursor-pointer">
      <div className="flex justify-between items-center space-x-4">
        <div className="flex items-center">
          <img
            src={pizza}
            alt={image}
            className="w-[50px] h-[50px] flex-shrink-0 rounded-full"
          />
          <div className="pl-2">
            <p className="text-base pb-1">{sabor}</p>
            <p className="text-sm text-gray">{ingredientes}</p>
          </div>
        </div>
        <p className="text-base">R${preco}</p>
      </div>
    </div>
  );
}

export default Card;
