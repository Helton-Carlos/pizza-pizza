import MyInput from "../component/MyInput";
import MyButton from "../component/MyButton";

function Contact() {
  function handleSubmit() {
    alert("WHY")
  }
  return (
    <div className="mx-8 md:mt-12">
      <div className="my-5">Contact</div>
      <form onSubmit={handleSubmit}>
        <MyInput type="e-mail" name="e-mail" placeholder="E-mail" />
        <MyInput type="text" name="nome" placeholder="Nome" />
        <MyInput type="text" name="assunto" placeholder="Assunto" />
        <MyButton text="Enviar" />
      </form>
    </div>
  );
}

export default Contact;
