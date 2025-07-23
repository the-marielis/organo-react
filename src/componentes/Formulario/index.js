import CampoTexto from "../CampoTexto"; //CTRL + ESPAÇO FAZ O IMPORT
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";

const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para cadastrar o colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times}/>
        <Botao texto="Criar Card"/>
      </form>
    </section>
  );
};

export default Formulario;
