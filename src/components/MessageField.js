import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const MessageField = ({nickname, setText, text}) => {
    const [c, setIsComposed] = useState(false);
    console.log({text})
    return(
        <TextField 
            fullWidth={true}
            onChange={(e) => {setText(e.target.value)}}
            onKeyDown={(e) => {
                if (c) return;
                const t = e.target.value;
                if (t == "") return;
                if (e.key === 'Enter'){
                    console.log('push message to firebase');
                    setText('')
                    e.preventDefault();
                }
            }} 
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
            value={text}
        />
    );
};

export default MessageField;