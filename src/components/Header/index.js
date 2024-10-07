import styled from 'styled-components'
import IconesHeader from '../IconesHeader'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import './style.css'

const HeaderContainer = styled.header`
background-color: #FFF;
display: flex;
justify-content: center;
`

export default function Header(params) {
    return ( 
    <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
    </HeaderContainer>
  )
}