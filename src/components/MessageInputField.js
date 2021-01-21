import React from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {gravatarPath} from '../gravatar';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: '26px',
    },
});

const MessageInputField = ({ nickname }) => {
    const classes = useStyles();
    const avatarPath = gravatarPath(nickname);
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid xs={1}>
                    <Avatar src={avatarPath}></Avatar>
                </Grid>
                <Grid xs={10}>
                    Input
                </Grid>
                <Grid xs={1}>
                    Button
                </Grid>
            </Grid>
        </div>
    );
};

export default MessageInputField;