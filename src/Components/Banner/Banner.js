import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {Button} from 'react-bootstrap'
import Signin from '../Img/signin.png';
import Ebay from '../Img/ebay.png';
import Nestle from '../Img/nestle.png';
import Ogly from '../Img/ogly.png';
import Zoho from '../Img/zoho.png';
import { Player } from 'video-react';
import './Banner.css';
function Banner() {
  return (
    <>
      <div className='bannerBg'>
          <Container>
             <Row>
                 <Col md={5} xs={12}>
                    <h2 className='head-content'>Faster, Fresher,</h2>
                    <span className='head-content1'>Better Copy</span>
                    <div className='para-section mt-3'>
                    <p>Introducing the end of writer’s block. <br />
                        With CopyAI’s automated creativity tools,<br />
                        you can generate marketing copy in seconds.
                    </p>
                    </div>
                    <div className='para-section mt-3'>
                    <p>Get your free account today, no credit card required.
                    </p>
                    </div>
                    <div className='signup'>
                    <img src={Signin} className='signin' alt={Signin} />
                    </div>
                    <div className='hr-section'>
                        <span className='or'>Or</span>
                    </div>
                    <div className='email-section mt-3'>
                    <Button>Sign up with email</Button>
                    </div>
                    <div className='term-section mt-3'>
                        <p>By proceeding, you are agreeing to CopyAI's <span><u>Terms of Service</u></span> and <span><u>Privacy Notice</u></span></p>
                    </div>
                    
                 </Col>
                 <Col md={7} xs={12}>
                   <Container>
                     <div className='video-section'>
                     <Player className='vc'>
                      <source src="../../img/pd-hero.mp4" />
                    </Player>
                     </div>
                   </Container>
                 </Col>
             </Row>
          </Container>
          <Container>
            <Row>
              <div className='mt-32'>
              <h5 className='head-content3'>
              Join the 500,000+ marketers using CopyAI
              </h5>
              </div>
              <div className="d-flex justify-content align-center mt-50">
                <div className="a1-img">
                <img src={Ebay} className='ebay' alt={Ebay} />
                </div>
                <div className="a1-img">
                <img src={Nestle} className='nestle' alt={Nestle} />
                </div>
                <div className="a1-img">
                <img src={Ogly} className='ogly' alt={Ogly} />
                </div>
                <div className="a1-img">
                <img src={Zoho} className='zoho' alt={Zoho} />
                </div>
              </div>
              
            </Row>
          </Container>
          
      </div>
    </>
  );
}

export default Banner;