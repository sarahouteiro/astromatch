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
        width: 100%;
        height: 100vh;
    }
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
export const Logo = styled.img`
    margin-top: 30px;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 15px;
    cursor: pointer;
`

export const People = styled.img`
    margin-top: 10px;
    position: absolute;
    right: 20px;
    height: 30px;
    cursor: pointer;
    -webkit-transition: all 0.7s ease;
    transition: all 0.7s ease;
    &:hover {
        height: 25px;
    }
`

export const Perfis = styled.div`
    padding: 20px;
`
export const Foto = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 0 auto;
    width: 400px;
    height: 500px;
    border-radius: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-image: url(${props => props.img});
    -webkit-box-shadow: 10px 10px 34px -14px rgba(71,71,71,1);
    -moz-box-shadow: 10px 10px 34px -14px rgba(71,71,71,1);
    box-shadow: 10px 10px 34px -14px rgba(71,71,71,1);
    transition: all 0.5s ease-in-out;
    @media (max-width: 500px) {
        width: 100%;
        height: 71vh;
    }
    h3 {
        padding-left: 20px;
        color: white;
        text-shadow: -1px 0px 16px #000000;
        margin-bottom: 5px;
    }
    p {
        margin-top: 8px;
        width: 90%;
        padding-left: 20px;
        padding-right: 20px;
        color: white;
        text-shadow: -1px 0px 16px #000000;
        font-size: 15px;
        padding-bottom: 10px;
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-top: 10px;
    padding-bottom: 30px;
`

export const LikeDislike = styled.img`
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
    &:hover {
        background-color: ${props => props.bgColor};
        transform: scale(1.1);
    }
`

export const Restart = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #E64155;
    img {
        width: 250px;
        background-color: #E64155;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        &:hover {
            background-color: #EA734A;
            width: 230px;
        }
    }
`