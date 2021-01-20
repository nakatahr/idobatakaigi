import React, { useState } from 'react';

import Main from './Main.js';
import SignIn from './SignIn';
import config from '../config.json';

export default () => {
  const [nickname, setNickname] = useState('');

  if (config.singInEnabled && nickname === '' ){
    return <SignIn setNickname={setNickname} />;
  } else {
    return <Main nickname={nickname} />;
  }
};
