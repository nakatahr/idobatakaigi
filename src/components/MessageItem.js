import React from 'react';
import { 
    Avatar, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
    }));

const MessageItem = ({ nickname, text }) => {
    const classes = useStyles();
    const avatarPath = gravatarPath(nickname);

    return(
        <ListItem divider={true}>
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