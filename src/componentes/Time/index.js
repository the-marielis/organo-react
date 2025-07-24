import './Time.css';

const Time = (props) => {
    return (
        <section className="time" style={{ backgroundColor: props.corSecundaria }}>  {/* As chaves duplas transformam o style em um objeto dentro do js */}
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

        </section>
    )
}

export default Time;