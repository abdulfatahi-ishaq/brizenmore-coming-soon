import styled from 'styled-components';
import { ReactComponent as WhatsappImage } from '../assets/images/whatsapp.svg';

export default styled.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 0.5) 90%
  );
  margin: 0;
  height:100vh;
  max-height: 100vh;
  max-width: 100vw;
  overflow: none !important;
  padding: 3rem 1rem 1rem 5rem;
  color: #fff;

  @media screen and (max-width: 1100px) {
    padding: 2rem 1rem;
  }

  .effect {
    animation-name: zoom-in-zoom-out;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.5, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  @keyframes jump {
    ${
      '' /* 0% {
      bottom: 0;
    }
    50% {
      bottom: 140px;
      height: 140px;
    }
    55% {
      bottom: 160px;
      height: 120px;
      border-radius: 70px / 60px;
    }
    65% {
      bottom: 120px;
      height: 140px;
      border-radius: 70px;
    }
    95% {
      bottom: 0;
    }
    100% {
      bottom: 0;
    } */
    }
  }
`;

export const Logo = styled.img`
  width: 9em;
  height: 3.5em;
`;

export const Heading = styled.div`
  max-width: 100vw;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  @media screen and (max-width: 900px) {
    margin-top: 1.5em;
    row-gap: 0.5em;
  }
  h1 {
    font-size: 4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 80px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    color: #fff;

    @media screen and (max-width: 1100px) {
      font-size: 2em;
    }
    @media screen and (max-width: 900px) {
      font-size: 1.5em;
    }
    @media screen and (max-width: 450px) {
      font-size: 1.3em;
    }
    span {
      font-weight: 500;
      color: #fcd7ad;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 26px;
    text-align: center;
    text-transform: lowercase;
    padding: 0 32%;
    margin: 0;
    span {
      color: #fcd7ad;
    }

    @media screen and (max-width: 900px) {
      font-size: 0.8em;
      padding: 0;
    }

    @media screen and (max-width: 360px) {
      font-size: 0.6em;
    }
  }
`;

export const Form = styled.form`
  max-width: 100vw;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5em;

  @media screen and (max-width: 900px) {
    row-gap: 0.8em;
  }
  span {
    padding: 0;
    text-align: left;
    margin: 0;
    font-size: 0.6em;
    color: #fcd7ad;
  }
  .group {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    input {
      width: calc(550px - 165px);
      max-width: calc(550px - 165px);

      @media screen and (max-width: 900px) {
        width: 300px;
      }
    }
  }
  input:not(:placeholder-shown) {
    background: #fff;
    color: #2d4f6c;
    opacity: 100;
  }
  input {
    width: 550px;
    max-width: 550px;
    border: none;
    outline: none;
    background: rgba(195, 209, 221, 0.45);
    color: #2d4f6c;
    font-size: 1.1rem;
    padding: 0.5em 1em;
    opacity: 0.5;
    caret-color: #000;
    :hover,
    :focus {
      background: #fff;
      color: #2d4f6c;
      opacity: 100;
    }
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #fff;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #fff;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #fff;
    }

    @media screen and (max-width: 900px) {
      width: 300px;
      padding: 0.3rem 1em;
      font-size: 0.8em;
    }
  }

  button {
    background: #fcd7ad;
    width: 165px;
    padding: 0.5em 1em;
    font-size: 1.1rem;
    border: none;
    font-weight: 600;
    font-style: normal;
    text-transform: uppercase;
    color: #2d506c;
    cursor: pointer;
    :hover {
      transition: 0.2s all ease-in-out;
      color: #fcd7ad;
      background-color: #2d506c;
    }

    @media screen and (max-width: 900px) {
      width: 300px;
      padding: 0.3rem;
      font-size: 0.8em;
    }
  }

  @media screen and (min-width: 900px) {
    .mobile-button {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    .btn {
      display: none;
    }
  }
`;

export const SocialIcons = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1em;

  a {
    cursor: pointer;

    :hover {
      transform: scale(1.1);
    }

    @media screen and (max-width: 900px) {
      img {
        width: 2em;
        height: 2em;
      }
    }
  }

  @media screen and (max-width: 900px) {
    margin-top: 2rem;
  }
`;

export const Info = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1em;
  color: #fefefe;
  .group {
    display: flex;
    align-items: center;
    column-gap: 0.6em;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    row-gap: 0.5em;
    font-size: 0.8em;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    row-gap: 1em;
    font-size: 0.7em;
  }

  @media screen and (max-width: 900px) {
    .line {
      display: none;
    }
  }
`;

export const Whatsapp = styled(WhatsappImage)`
  position: absolute;
  bottom: 2rem;
  right: 3rem;
  cursor: pointer;

  :hover {
    transform: scale(1.3);
  }

  @media screen and (max-width: 900px) {
    bottom: 4rem;
    right: 2rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  margin-top: 7rem;

  @media screen and (max-width:900px){
    font-size: 0.8em;
    margin-top:3rem;
  }
`;
