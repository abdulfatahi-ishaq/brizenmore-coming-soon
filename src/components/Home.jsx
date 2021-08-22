import React from 'react';
import Axios from 'axios';
import LogoImage from '../assets/images/logo.svg';
import Container, {
  Form,
  Info,
  Heading,
  Logo,
  SocialIcons,
  Whatsapp,
  Footer,
} from './styles';
import Facebook from '../assets/images/fb_icon.svg';
import Instagram from '../assets/images/ig_icon.svg';
import Linkedin from '../assets/images/linkedin_icon.svg';
import Twitter from '../assets/images/twitter_icon.svg';
import Phone from '../assets/images/phone.svg';
import Address from '../assets/images/location.svg';
import Mail from '../assets/images/message.svg';
import { ReactComponent as Line } from '../assets/images/line.svg';
import StatusModal from './Modal';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import { LoadingOutlined } from '@ant-design/icons';

const Index = () => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 26, color: '#2d506c' }} spin />
  );
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');

  const sendMail = async (e) => {
    e.preventDefault();
    if (fullname !== '' && email !== '') {
      try {
        setLoading(true);
        Axios({
          method: 'POST',
          url: 'https://agile-waters-03012.herokuapp.com/send-mail',
          data: { fullname: fullname, email: email },
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((res) => {
          setLoading(false);
          setVisible(true);
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleShow = () =>{
    setVisible(false);
    setFullname('');
    setEmail('');
  };

  return (
    <>
      <Container>
        <Logo src={LogoImage} alt="Logo" />
        <Heading>
          <h1>
            we are coming <span>very soon!</span>
          </h1>
          <p>
            Kindly join our mailing list to get{' '}
            <span>premium real estate tips</span> and deals. You’ll also be{' '}
       among the first to know when our website is up!
          </p>
        </Heading>
        <Form onSubmit={sendMail}>
          <div>
            <input
              type="text"
              value={fullname}
              placeholder="Full Name"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="group">
            <input
              type="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" type="submit">
              {loading ? <Spin indicator={antIcon} /> : 'get notified!'}
            </button>
          </div>
          <button className="mobile-button" type="submit">
              {loading ? <Spin indicator={antIcon} /> : 'get notified!'}
            </button>
          {/* <span>Our privacy policy covers*</span> */}
        </Form>
        <SocialIcons>
          <a href="www.facebook.com">
            <img src={Facebook} alt="Social Icon" />
          </a>
          <a href="www.instragam.com">
            <img src={Instagram} alt="Social Icon" />
          </a>
          <a href="www.linkedin.com">
            <img src={Linkedin} alt="Social Icon" />
          </a>
          <a href="www.twitter.com">
            <img src={Twitter} alt="Social Icon" />
          </a>
        </SocialIcons>
        <Info>
          <div className="group">
            <img src={Phone} alt="Icon" />
            012797542 &nbsp;&nbsp;&nbsp; +2349093496941
          </div>
          <Line className="line" />
          <div className="group">
            <img src={Address} alt="Icon" />
            3rd Floor Mulliner Towers, 39 Alfred Rewane Road, Ikoyi- Lagos
          </div>
          <Line className="line" />
          <div className="group">
            <img src={Mail} alt="Icon" />
            info@brizenmore.com
          </div>
        </Info>
        <a href="https://wa.me/09093496941">
          {' '}
          <Whatsapp />
        </a>
        <Footer>
          &copy; copyright 2021 brixenmore properties. all rights reserved
        </Footer>
      </Container>
      <StatusModal show={visible} handleShow={handleShow} />
    </>
  );
};

export default Index;
