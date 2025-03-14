import React, { useEffect } from 'react';
import Exceotional from '../Exceptional/Exceotional';
import HeroOne from '../Hero/HeroOne';
import Operational from '../Operational/Operational';
import HeroTwo from '../HeroTwo/HeroTwo';
import SeamLess from '../Seamless/SeamLess';
import MembersShips from '../MembersShips/MembersShips';
import PostEmail from '../PostEmail/PostEmail';
import Card from '../Card/Card';
import { changeTitleAndFavicon } from '../../../ChangeTitle/ChangeTitle';

const Home = () => {
  useEffect(() => {
    
    changeTitleAndFavicon('home');
  }, []);
  return (
    <div>
        <Exceotional/>
        <HeroOne/>
        <Operational/>
        <HeroTwo/>
        <SeamLess/>
        <MembersShips/>
        <Card/>
        <PostEmail/>
    </div>
  );
};

export default Home;