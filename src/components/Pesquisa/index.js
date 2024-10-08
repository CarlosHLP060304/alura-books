import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import {livros} from "./dadosPesquisa";
import { Livros } from "../Livros";

const PesquisaContainer =  styled.section`
background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
color: #FFF;
text-align: center;
padding: 85px 0;
height: 270px;
width: 100%;
`
const Titulo = styled.h2`
color: #FFF;
font-size: 36px;
text-align: center;
width: 100%;
`

const Subtitulo = styled.h3`
font-size: 16px;
font-weight: 500;
margin-bottom: 40px;
`



export default function Pesquisa() {

    const [listaLivros, setListaLivros] = useState([])
   
    return (<PesquisaContainer>
        <Titulo>Já sabe onde começar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
        <Input placeholder="Pesquisa" onBlur={(e)=> {
            let pesquisa = e.target.value
            let resultadoPesquisa = livros.filter(livro=> livro.nome.includes(pesquisa))
            setListaLivros(resultadoPesquisa)
        }}/>
        <Livros>
            {
                listaLivros.map(
                    livro => {
                        return (
                            <li>
                                <h4>{livro.nome}</h4>
                                <img src={livro.src}/>
                            </li>
                        )
                    }
                )
            }
        </Livros>
    </PesquisaContainer>)
}

