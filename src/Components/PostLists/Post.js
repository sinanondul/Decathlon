import React from "react";
import {Avatar, Box, Grid,} from "@mui/material";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import moment from "moment";
import {ThumbUp} from "@mui/icons-material";
import FullUserProfile from "../FullUserProfile/FullUserProfile";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    height: 600,
    width: 300,
    color: theme.palette.text.primary,
    overflow: "scroll",
    flexGrow: "3",
    backgroundColor: "snow", '&:hover': {
        backgroundColor: 'seashell',
    },
}));

const Post = ({
                  data,
                  isLoading,
              }) => {

    const [items, setItems] = React.useState({})
    React.useEffect(() => {
        setItems(data.data);
    }, [data])

    console.log("Data", items)
    if (!isLoading && items) {
        return (
            <Grid container sx={{flexGrow: 1}} justifyContent="center">
                <Grid item xs={10} onClick={() => <FullUserProfile/>}>
                    <Grid container justifyContent="center" spacing={2} alignContent="center">
                        {items.map(item => (
                            <Grid item key={item.owner.id} sx={{display: "flex"}}
                                  justifyContent="center" alignContent="center" alignItems="center" /* item.id */ >
                                <Item item>
                                    {/*<Avatar alt="Remy Martin" src={item.owner.picture} / >*/}
                                    <Grid container spacing={4} sx={{padding: 2,}}>
                                        <Grid item xs={2}>
                                            <Avatar alt="Remy Sharp" src={item.owner.picture}/>
                                        </Grid>
                                        <Grid item container xs={8} padding={2}>
                                            <Grid item>
                                                <b>{item.owner.firstName} {item.owner.lastName}</b>
                                            </Grid>
                                            <Grid item>
                                               {moment(item.publishDate).format('ll',)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="column">
                                        <Grid item>
                                            <img style={{height: "95%", width: "90%"}} alt="Remy Sharp"
                                                 src={item.image}/>
                                        </Grid>
                                        <Grid item container direction="row">
                                            <Grid item container sx={{
                                                paddingLeft: "20px",
                                                alignItems: "center",
                                            }}><ThumbUp/>{" "}{item.likes}</Grid>
                                            {items.tags && item.tags.map((i) => {
                                                    return (
                                                        <Grid container direction="row" item padding={0.5}>
                                                            <Grid item sx={{
                                                                backgroundColor: "red",
                                                                width: "40%",
                                                                height: "20",
                                                                borderRadius: "20"
                                                            }} key={i}>{i}</Grid>
                                                        </Grid>
                                                    )
                                                }
                                            )}

                                        </Grid>
                                        <Grid item>
                                            <Box>{item.text}</Box>
                                        </Grid>
                                        <Grid item>

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