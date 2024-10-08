import styled from 'styled-components'
import logo from '../../images/logo.svg'

const LogoContainer = styled.div`

    display: flex;
    gap: 10px;

`


export default function Logo() {
    return ( 
        <LogoContainer>
              <img src={logo} alt='logo'/>
              <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    )
}