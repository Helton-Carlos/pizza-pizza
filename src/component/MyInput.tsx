import { useState } from "react";

type TInput = {
  type: string;
  name: string;
  placeholder: string;
};

function MyInput(props: TInput) {
  const [input, setInput] = useState<string>("");
  return (
    <div>
      <input
        className="block w-full mb-4 px-3 py-1 text-gray-dark bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default MyInput;
