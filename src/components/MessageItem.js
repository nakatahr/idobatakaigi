import React, { useEffect, useRef } from 'react';
import { 
    Avatar, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles(() => ({
  inline: {
      display: 'inline',
  },
}));

const MessageItem = ({ nickname, text, isLastItem }) => {
    const ref = useRef(null);
    const classes = useStyles();
    const avatarPath = gravatarPath(nickname);

    useEffect(() => {
      if (isLastItem) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [isLastItem]);

    return(
        <ListItem divider={true} ref={ref}>
        <ListItemAvatar>
          <Avatar alt={nickname} src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={nickname}
          secondary={
            <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
            >
            {text}
            </Typography>
          }
        />
      </ListItem>
    )
};

export default MessageItem;