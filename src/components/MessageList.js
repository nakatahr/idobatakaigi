import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { messagesRef } from '../firebase';

const useStyles = makeStyles({
    root: {
        gridRow: 1,
    },
});

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        messagesRef
        .orderByKey()
        .limitToLast(3)
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
    return <div className={classes.root}>Message List</div>
};

export default MessageList;