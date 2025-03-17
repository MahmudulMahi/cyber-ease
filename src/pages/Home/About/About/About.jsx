import React, { useEffect } from 'react';
import AboutNav from '../../../Shared/AboutNav/AboutNav';
import InFo from './InFo/InFo';
import OurTeam from './OurTeam/OurTeam';
import Opsition from './Opsition/Opsition';
import Financial from './Financial/Financial';
import ESGSection from './ESGSection/ESGSection';
import PostEmail from '../../PostEmail/PostEmail';
import { changeTitleAndFavicon } from '../../../../ChangeTitle/ChangeTitle';
import AboutNavber from '../../../Shared/AboutNavber/AboutNavber';

const About = () => {
    useEffect(() => {
      
      changeTitleAndFavicon('about');
    }, []);
  return (
    <div>
        {/* <AboutNav></AboutNav> */}
        <AboutNavber></AboutNavber>
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