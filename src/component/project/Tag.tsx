import fries from "../../assets/home/fries.png";

function Tag() {
  return (
    <div>
      <div className="flex bg-magenta px-4 py-2 rounded-xl text-center mx-auto w-full">
        <img src={fries} alt={fries} />
        <p className="text-primary pl-2">O MELHOR FASTFOOD DELIVERY DE BRASÍLIA </p>
      </div>
    </div>
  );
}

export default Tag;
