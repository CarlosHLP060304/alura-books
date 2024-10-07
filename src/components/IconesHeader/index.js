import perfil from '../../images/sacola.svg'
import sacola from '../../images/perfil.svg'
import './style.css'
const icons = [perfil,sacola]

export default function IconesHeader() {
    return (
        <ul className="icones">
          {icons.map(
            icon =>  (<li><img src={icon}></img></li>)
          )
          }
        </ul>
    )
}