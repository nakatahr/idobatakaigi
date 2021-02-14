import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'

import { pushMessage } from '../firebase';

const MessageSubmitButton = ({inputEl, nickname, setText, text}) => {
    return (
        <IconButton
            disabled={text === ''} 
            onClick={(e) => {
            pushMessage({ nickname, text });
            setText('');
            inputEl.current.focus();
        }
        }>
            <SendIcon/>
        </IconButton>
    );
}

export default MessageSubmitButton;