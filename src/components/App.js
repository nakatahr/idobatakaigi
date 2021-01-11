import React, { useState } from 'react';

import SignIn from './SignIn';

export default () => {
  const [nickname, setName] = useState('');
  console.log({ nickname });

  return <SignIn setName={setName} />;
};
