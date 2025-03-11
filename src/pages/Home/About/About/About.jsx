import React from 'react';
import AboutNav from '../../../Shared/AboutNav/AboutNav';
import InFo from './InFo/InFo';
import OurTeam from './OurTeam/OurTeam';
import Opsition from './Opsition/Opsition';

const About = () => {
  return (
    <div>
        {/* <AboutNav></AboutNav> */}
        <InFo></InFo>
        <OurTeam></OurTeam>
        <Opsition></Opsition>
    </div>
  );
};

export default About;