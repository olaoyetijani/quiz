import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

    html {
        height: 100%
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-image: url();
        background-size: cover;
        margin: 0;
        margin-top: 10rem;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box
    }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 10px 10px 5px 0px rgba(54, 125, 191, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(54, 125, 191, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(54, 125, 191, 0.75);
  margin: 10px;
  padding: 7px;

  .selectOp {
    padding: 5px;
    color: #fff;
    background: #6dbad4;
    font-weight: 700;
    border-radius: 4px;
  }

  .score {
    font-size: 1.2rem;
    background: #6695c1;
    width: 80%;
    text-align: center;
    color: #fff;
    box-shadow: 2px 2px #0085a3;
    padding: 3px;
  }

  h1 {
    font-family: Poppins;
    background: #83ad4;
    background: -webkit-linear-gradient(to right, #b6fbff, #83a4d4);
    background: linear-gradient(to right, #b6fbff, #83a4d4);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 2px #0085a3);
    font-size: 35px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .loader {
    width: 5%;
    height: 5%;
  }

  .start,
  .next {
    cursor: pointer;
    background: #6dbad4;
    width: 50%;
    color: #fff;
    border: none;
    padding: 5px;
    margin: 20px 0px;
    font-weight: bold;
    box-shadow: 1px 3px #0085a3;
    max-width: 300px;
  }

  .complete {
    font-size: 1.2rem;
    font-weight: bold;
    color: green;
  }
`;
