import React, { useEffect } from 'react';
import PostEmail from '../Home/PostEmail/PostEmail';
import { changeTitleAndFavicon } from '../../ChangeTitle/ChangeTitle';

const Contact = () => {

    useEffect(() => {
      
      changeTitleAndFavicon('contact');
    }, []);
  return (
    <div>
        <PostEmail></PostEmail>
    </div>
  );
};

export default Contact;