import React from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Checkmark from '../assets/images/checkmark.svg';

const StatusModal = (props) => {
  const { show, handleShow } = props;
  return (
    <Modal
    centered={true}
      closable={false}
      visible={show}
      footer={false}
    >
      <Container>
        <img src={Checkmark} alt="Icon" />
        <h4>Thank You!</h4>
        <span>You have been added to the waitlist.</span>
        <button onClick={handleShow}>return back to home</button>
      </Container>
    </Modal>
  );
};

export default StatusModal;

const Container = styled.div`
  width: 50%;
  height: 50%;
  opacity: 1;
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  row-gap:1rem;
  align-items: center;
  justify-content: center;

  img {
    width: 10%;
    height: 10%;
  }

  h4 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    color: #2d506c;
  }
  button {
    background: none;
    border: none;
    outline: none;
    font-style: normal;
    color: #ff8800;
    font-size: 11px;

    :hover,
    :focus {
      border: none;
      outline: none;
      background: #2d506c;
      color: #fff;
      transfrom: scale(1.5);
    }
  }
`;
