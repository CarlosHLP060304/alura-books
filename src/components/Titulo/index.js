import styled from "styled-components";

export const Titulo = styled.h2`
    text-align: center;
    color:${props=>props.cor ? props.cor : "#000"}
`