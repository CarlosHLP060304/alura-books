export default function CardRecomenda({img,titulo,subtitulo,descricao}) {
    return (
        <div>
                <h3>{titulo}</h3>
                <h4>{subtitulo}</h4>
                <p>{descricao}</p>
                <img src={img}/>
                <br/>
                <button>Saiba mais</button>
        </div>
    )
}