import React from 'react';
import { Container, Row } from 'reactstrap';
import One from '../../one.svg';
import Two from '../../two.svg';
import Three from '../../three.svg';
import './Features.css';
function Features() {
return (
<>
<Container>
   <Row>
      <div className="mt-32">
         <h2 className='head-content4'>How it works</h2>
      </div>
      <div className="w-layout-grid grid-60">
         <div className="third-section">
            <img src={One} className='one' alt="one"/>
            <h3 className="heading-54">Select a type of copy</h3>
            <div className="text-block-43">Choose from headlines, blog intros, product descriptions, and much more.</div>
         </div>
         <div className="third-section">
            <img src={Two} className='one' alt="one"/>
            <h3 className="heading-54">Describe your product</h3>
            <div className="text-block-43">Just enter the name of your company and 1-2 sentences on what you do.</div>
         </div>
         <div className="third-section">
            <img src={Three} className='one' alt="one"/>
            <h3 className="heading-54">Get your results and edit</h3>
            <div className="text-block-43">You’ll get 10 results at a time, and you can run the tool again for more ideas.</div>
         </div>
        
      </div>
   </Row>
</Container>
</>
);
}
export default Features;