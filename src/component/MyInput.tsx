import { useState } from "react";

type TInput = {
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  handleOnChange: string;
};

function MyInput(props: TInput) {
  const [input, setInput] = useState<string>("");
  return (
    <div>
      <input
        className="block w-full mb-4 px-3 py-2 text-gray-dark bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleOnChange}
        value={props.value}
      />
    </div>
  );
}

export default MyInput;
