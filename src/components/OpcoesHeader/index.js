import './style.css'
const listaOpcoes = ['Categoria','Minha estante', 'Favoritos']

export default function OpcoesHeader() {
    return (
        <ul className="categoria">
          {listaOpcoes.map(
            opcao =>  <li>{opcao}</li>
          )
          }
        </ul>
    )
}