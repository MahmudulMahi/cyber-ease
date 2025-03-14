import React, { useEffect } from 'react';
import Issuers from '../Issuers/Issuers';
import LiveCycle from '../LiveCycle/LiveCycle';
import TestimonialSection from '../TestimonialSection/TestimonialSection';
import { changeTitleAndFavicon } from '../../../ChangeTitle/ChangeTitle';

const Tech = () => {
    useEffect(() => {
      
      changeTitleAndFavicon('technology');
    }, []);
  return (
    <div>
        <Issuers></Issuers>
        <LiveCycle></LiveCycle>
        <TestimonialSection></TestimonialSection>
    </div>
  );
};

export default Tech;