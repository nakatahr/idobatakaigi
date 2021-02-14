import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

import { pushMessage } from '../firebase';

const MessageField = ({inputEl, nickname, setText, text}) => {
    const [c, setIsComposed] = useState(false);
    return(
        <TextField 
            autoFocus
            fullWidth={true}
            inputRef={inputEl}
            onChange={(e) => {setText(e.target.value)}}
            onKeyDown={(e) => {
                if (c) return;
                const t = e.target.value;
                if (t === "") return;
                if (e.key === 'Enter'){
                    pushMessage({ nickname, text });
                    setText('');
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