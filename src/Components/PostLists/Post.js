import React, {useEffect, useState} from "react";
import {Avatar, AvatarGroup, Box, Grid,} from "@mui/material";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    height: 400,
    width: 300,
    padding: theme.spacing(1),
    alignItems:"center",
    justifyContent:"center",
    textAlign: 'center',
    color: theme.palette.text.primary,
}));
const Photo = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    height: 250,
    width: 250,
    // padding: theme.spacing(1),
    alignSelf:"center",
    textAlign: 'center',

    color: theme.palette.text.secondary,
}));

const Post = ({
                  data,
                  isLoading,
              }) => {

    const [items, setItems] = React.useState({})
    const [responseObj, setResponseObj] = useState({});



    React.useEffect(() => {
        if (data && !isLoading) {
            setItems(data.data);
        }
    }, [data])

    if (!isLoading) {
        // debugger;
        console.log("jdncfj", items)
        return (
            <Grid container sx={{flexGrow: 1,}} justifyContent="center">
                <Grid item xs={10}>
                    {/*{items.map(item => (*/}
                    <Grid container justifyContent="center" spacing={2} alignContent="center" >
                        {Array.from(Array(10)).map(item => (
                            <Grid item key={item} sx={{backgroundColor:"whitesmoke"}} justifyContent="center" alignContent="center" alignItems="center" /* item.id */ >
                                <Item item>
                                    {/*<Avatar alt="Remy Martin" src={item.owner.picture} / >*/}
                                    <Grid container spacing={3} sx={{padding:1,}}>
                                        <Grid item>
                                            <Avatar>

                                            </Avatar></Grid>
                                        <Grid item>
                                            <Box justifyContent="center" alignContent="center"
                                                 sx={{height: 40, width: 200, backgroundColor: "steelblue"}}>
                                                {/*{item.owner.firstName} {item.owner.lastName}*/}
                                                Mehmet Zengin
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="column" spacing={1} sx={{padding:1,}} >
                                        <Grid item justifyContent="center" alignContent="center" alignItems="center" sx={{ textAlignlign: "center"}}>
                                            <Photo style={{ alignSelf: 'center' }}></Photo>
                                        </Grid>
                                        <Grid item>
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