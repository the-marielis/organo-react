import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      nome: "JULIANA AMOASEI",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      nome: "DANIEL ARTINE",
      id: uuidv4(),
      favorito: false,
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      nome: "GUILHERME LIMA",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      id: uuidv4(),
      favorito: false,
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      nome: "DANIEL ARTINE",
      id: uuidv4(),
      favorito: false,
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      nome: "GUILHERME LIMA",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      id: uuidv4(),
      favorito: false,
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      nome: "DANIEL ARTINE",
      id: uuidv4(),
      favorito: false,
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      nome: "GUILHERME LIMA",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      id: uuidv4(),
      favorito: false,
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      nome: "DANIEL ARTINE",
      id: uuidv4(),
      favorito: false,
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      nome: "GUILHERME LIMA",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      id: uuidv4(),
      favorito: false,
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      nome: "DANIEL ARTINE",
      id: uuidv4(),
      favorito: false,
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      nome: "GUILHERME LIMA",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      id: uuidv4(),
      favorito: false,
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      nome: "DANIEL ARTINE",
      id: uuidv4(),
      favorito: false,
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      nome: "GUILHERME LIMA",
      id: uuidv4(),
      favorito: false,
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      id: uuidv4(),
      favorito: false,
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[5].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(prop) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== prop)
    );
  }

  function mudarCorTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }
  function cadastrarTime(novoTime) {
    console.log(novoTime);
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito; {/* troca o status, caso seja favorito, torna não favorito */}
      return colaborador
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={ cadastrarTime }
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => (
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
