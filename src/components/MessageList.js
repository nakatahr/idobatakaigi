import React, {useEffect, useState} from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MessageItem from './MessageItem'
import { messagesRef } from '../firebase';

const useStyles = makeStyles({
    root: {
        gridRow: 1,
        overflow: 'auto',
        width: '100%',
    },
});

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        messagesRef
        .orderByKey()
        .limitToLast(15)
        .on("value", (snapshot) => {
            const messages = snapshot.val();
            if (messages === null) return;
            const entries = Object.entries(messages);
            const newMessages = entries.map((e) => {
                const [key, nameAndText] = e;
                return {key, ...nameAndText}
            });
            console.log(newMessages);
            setMessages(newMessages);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }, []);

    const length = messages.length;

    return (
        <List className={classes.root}>
            {
                messages.map(({ key, nickname, text }, index) => {
                    const isLastItem = (length === index + 1);
                    return (
                        <MessageItem 
                            key={key} 
                            nickname={nickname} 
                            text={text} 
                            isLastItem={isLastItem}>
                        </MessageItem>
                    )
                })
            }
        </List>
    )
};

export default MessageList;