import React from 'react';
import AboutNav from '../../../Shared/AboutNav/AboutNav';
import InFo from './InFo/InFo';
import OurTeam from './OurTeam/OurTeam';
import Opsition from './Opsition/Opsition';
import Financial from './Financial/Financial';
import ESGSection from './ESGSection/ESGSection';
import PostEmail from '../../PostEmail/PostEmail';

const About = () => {
  return (
    <div>
        {/* <AboutNav></AboutNav> */}
        <InFo></InFo>
        <OurTeam></OurTeam>
        <Opsition></Opsition>
        <Financial></Financial>
        <ESGSection></ESGSection>
        <PostEmail></PostEmail>
    </div>
  );
};

export default About;