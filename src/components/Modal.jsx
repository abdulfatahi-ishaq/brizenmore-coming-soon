import React from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Checkmark from '../assets/images/checkmark.svg';

const StatusModal = (props) => {
  const { show, handleShow } = props;
  return (
    <Modal
      width={400}
      centered={true}
      closable={false}
      visible={show}
      footer={false}
      bodyStyle={{ border: 'none', padding:0 }}
    >
      <Container>
      <div className="img-wrapper">

        <img src={Checkmark} alt="Icon" />
      </div>
        <h4>Thank You!</h4>
        <span>You have been added to the waitlist.</span>
        <button onClick={handleShow}>return back to home</button>
      </Container>
    </Modal>
  );
};

export default StatusModal;

const Container = styled.div`
  width: 100%;
  height: 100%;
  opacity: 1;
  display: flex;
  padding:0 0 2rem;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  ${'' /* background-color: green; */}
  .img-wrapper{
    width:100%;
    padding:3rem 0;
    background: #3C5970;
    opacity:1;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  img {
    width: 15%;
    height: 15%;
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
