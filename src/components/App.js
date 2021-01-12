import React, { useState } from 'react';

import Main from './Main.js';
import SignIn from './SignIn';

export default () => {
  const [nickname, setNickname] = useState('');
  console.log({ nickname });

  if (nickname === ''){
    return <SignIn setNickname={setNickname} />;
  } else {
    return <Main nickname={nickname} />;
  }
};
