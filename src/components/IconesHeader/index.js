import perfil from '../../images/sacola.svg'
import sacola from '../../images/perfil.svg'
import styled from 'styled-components'


const icons = [perfil,sacola]

const Icones = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  align-items: center ;
`

export default function IconesHeader() {
    return (
        <Icones>
          {icons.map(
            icon =>  (<li><img src={icon}></img></li>)
          )
          }
        </Icones>
    )
}