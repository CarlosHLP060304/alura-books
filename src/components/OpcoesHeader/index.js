import styled from 'styled-components'
const listaOpcoes = ['Categoria','Minha estante', 'Favoritos']

const Opcoes = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  cursor: pointer;
  align-items: center ;
` 


export default function OpcoesHeader() {
    return (
        <Opcoes>
            {listaOpcoes.map(
              opcao =>  <li>{opcao}</li>
            )
            }
        </Opcoes>
    )
}