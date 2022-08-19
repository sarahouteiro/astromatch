import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    @media (max-width: 500px) {
        margin-top: 0;
    }
`

export const BoxMatch = styled.div`
    background-color: #F4E1D4;
    height: auto;
    width: 450px;
    margin: 0 auto;
    border: solid 1px black;
    border-radius: 10px;
    @media (max-width: 500px) {
        height: 100vh;
        width: 100%;
    }
`
export const CaixaMatches = styled.div`
    height: 70vh;
    overflow-y: scroll;
    padding-top: 15px;
`
export const Titulo = styled.div`
    height: 70px;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
`

export const Voltar = styled.img`
    position: absolute;
    left: 20px;
    height: 30px;
    cursor: pointer;
    -webkit-transition: all 0.7s ease;
    transition: all 0.7s ease;
    &:hover {
        height: 25px;
    }
`

export const Logo = styled.img`
    margin-top: 25px;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 15px;
    cursor: pointer;
`


export const Perfil = styled.div`
    display: flex;
    padding: 5px 20px 5px 20px;
    color: #e54356;
    transition: all 0.5s ease-in-out;
    background-color: #F4E1D4;
    cursor: pointer;
    &:hover {
        background-color: #f5c456;
    }
`

export const Foto = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-image: url(${props => props.img});
    margin-right: 20px;
`

export const SemMatches = styled.div`
    height: 70vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #e54356;
`