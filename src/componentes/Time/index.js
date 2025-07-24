import './Time.css';
import Colaborador from '../Colaborador';

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria};

    return (
        // renderização condicional => somente retorna a section se a condição for atendida
        (props.colaboradores.length > 0) ? 
        <section className="time" style={css}>  {/* As chaves duplas transformam o style em um objeto dentro do js */}
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
        : '' // Se não houver colaboradores, não renderiza nada. Retorna uma string vazia
    )
}

export default Time;