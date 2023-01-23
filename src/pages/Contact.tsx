import { useState } from "react";
import MyInput from "../component/MyInput";
import MyButton from "../component/MyButton";

function Contact() {
  const [project, setProject] = useState<string>("");

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  function handleOnChange(e: any) {
    setProject({ ...project, [e.target.name]: e.target.value });
    console.log(e);
  }
  return (
    <div className="mx-8 md:mt-12">
      <div className="my-5">Contact</div>
      <form onSubmit={handleSubmit}>
        <MyInput
          type="e-mail"
          name="e-mail"
          placeholder="E-mail"
          handleOnChange={handleOnChange}
        />
        <MyInput
          type="text"
          name="nome"
          placeholder="Nome"
          handleOnChange={handleOnChange}
        />
        <MyInput
          type="text"
          name="assunto"
          placeholder="Assunto"
          handleOnChange={handleOnChange}
        />
        <MyButton text="Enviar" />
      </form>
    </div>
  );
}

export default Contact;
