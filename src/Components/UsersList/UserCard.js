import React, {useEffect, useState, useCallback} from "react";
import {Avatar, AvatarGroup, Box, Grid,} from "@mui/material";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import {useHistory} from 'react-router-dom';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    height: 200,
    width: 300,
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center',
    // color: theme.palette.text.primary, onho,
    backgroundColor: "snow", '&:hover': {
        backgroundColor: 'seashell',
    },
}));

const Post = ({
                  data,
                  isLoading,
              }) => {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/user'), [history]);
    const [items, setItems] = React.useState({})
    const [responseObj, setResponseObj] = useState({});


    React.useEffect(() => {
        setItems(data.data);
    }, [data])

    if (!isLoading && items) {
        // debugger;
        console.log("here", items[0])
        return (
            <Grid container sx={{flexGrow: 1,}} justifyContent="center">
                <Grid item xs={10}>
                    {/*{Array.from(Array(10)).map(item => (*/}
                    <Grid container justifyContent="center" spacing={2} alignContent="center">
                        {items.map(item => (
                            <Grid item key={item} justifyContent="center"
                                  alignContent="center" alignItems="center" /* item.id */ >
                                <Item item onClick={handleOnClick}>
                                    <Grid container spacing={3} sx={{padding: 1,}}>
                                        <Grid item>
                                            <Avatar alt="Remy Martin" src={item.picture}/>
                                        </Grid>
                                        <Grid item>
                                            <Grid container justifyContent="center" alignContent="center"
                                                 sx={{height: 40, width: 200, backgroundColor: "linen"}}>
                                                <b>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}. {item.firstName} {item.lastName}</b>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="column" spacing={1} sx={{padding: 1,}}>
                                        <Grid item justifyContent="center" alignContent="center" alignItems="center"
                                              sx={{textAlign: "center"}}>
                                            {/*<Photo style={{ alignSelf: 'center' }}></Photo>*/}
                                        </Grid>
                                        <Grid item>
                                            {item.id}
                                            <hr></hr>
                                            {/*{item.publishDate}*/}
                                        </Grid>
                                        <Grid item>
                                            <hr></hr>

                                        </Grid>
                                        <Grid item>
                                            <hr></hr>

                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

        )
    } else {
        return (<CircularProgress color="info"/>)
    }


}

export default Post;