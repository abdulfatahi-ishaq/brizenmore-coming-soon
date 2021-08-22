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
  min-height: 100vh;
  padding: 3rem 1rem 1rem 5rem;
  color: #fff;

  @media screen and (max-width: 1100px) {
    padding: 2rem 1rem;
  }
`;

export const Logo = styled.img`
  width: 9em;
  height: 3.5em;
`;

export const Heading = styled.div`
  width: 100%;
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
    }
  }
`;

export const Form = styled.form`
  width: 100%;
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
    ${'' /* text-align:center; */}
  }

  @media screen and (max-width: 900px) {
    .line {
      display: none;
    }
  }
`;

export const Whatsapp = styled(WhatsappImage)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;

  :hover {
    transform: scale(1.3);
  }
`;

export const Footer = styled.footer`
  position: fixed;
  transform: translate(-50%, -50%);
  font-size: 0.8em;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  left: 50%;
  bottom: 0;

  @media screen and (max-width: 900px) {
    left: 45%;
  }
`;