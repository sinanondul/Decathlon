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
    height: 400,
    width: 250,
    color: theme.palette.text.primary,
    overflow:"scroll",
    flexGrow:"2",
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
            <Grid container sx={{flexGrow: 1,}} justifyContent="center" >
                <Grid item xs={10} onClick={()=> <FullUserProfile/> }>
                    <Grid container justifyContent="center" spacing={2} alignContent="center">
                        {items.map(item => (
                            <Grid item key={item} sx={{ display: "flex"}}
                                  justifyContent="center" alignContent="center" alignItems="center" /* item.id */ >
                                <Item item>
                                    {/*<Avatar alt="Remy Martin" src={item.owner.picture} / >*/}
                                    <Grid container xs={4} spacing={3} sx={{padding: 1,}}>
                                        <Grid item xs={1}>
                                            <Avatar alt="Remy Sharp" src={item.owner.picture}/>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Box
                                                 sx={{height: 20, width: 200, backgroundColor: "steelblue"}}>
                                                {item.owner.firstName} {item.owner.lastName}
                                            </Box>
                                            <Box
                                                 sx={{height: 20, width: 200, backgroundColor: "azure"}}>
                                                {moment(item.publishDate).format('lll', )}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="column">
                                        <Grid item style={{
                                            height: "70%",
                                            width: "90%",
                                            paddingTop: "5px",
                                            paddingLeft: "50px"
                                        }}>
                                            <img style={{height: "95%", width: "90%"}} alt="Remy Sharp"
                                                 src={item.image}/>

                                            {items.tags && item.tags.map((i) => {
                                                    return (
                                                        <Grid container direction="row" item padding={0.5}>
                                                            <Grid item sx={{backgroundColor:"red", width:"40%",height:"20", borderRadius:"20" }} key={i}>{i}</Grid>
                                                        </Grid>
                                                    )
                                                }
                                            )}
                                        </Grid>



                                        <Grid item container direction="row">
                                            <Grid container sx={{paddingLeft:"20px", alignItems:"center",}} ><ThumbUp />{" "}{item.likes}</Grid>


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