import React from "react";
import {Avatar, Box, Grid,} from "@mui/material";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import moment from "moment";
import {ThumbUp} from "@mui/icons-material";
import FullUserProfile from "../FullUserProfile/FullUserProfile";
import {useHistory} from "react-router-dom";
import {hexToRgb} from "@material-ui/core";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    minHeight: 300,
    width: 300,
    color: theme.palette.text.primary,
    backgroundColor: "snow", '&:hover': {
        backgroundColor: 'seashell',
    },
}));

const Post = ({
                  data,
                  isLoading,
              }) => {
    const history = useHistory();
    const [items, setItems] = React.useState({})
    React.useEffect(() => {
        setItems(data.data);
    }, [data])

    const handleOnClick = (id) => {
        history.push({pathname: `/user/${id}`, state: {id: {id}}})

        console.log(id);
    }

    console.log("Data", items)
    if (!isLoading && items) {
        return (
            <Grid container sx={{flexGrow: 1}} justifyContent="center">
                <Grid item xs={12} onClick={() => <FullUserProfile/>}>
                    <Grid container justifyContent="center" spacing={2} >
                        {items.map(item => (
                            <Grid item key={item.owner.id} sx={{display: "flex"}}
                                  justifyContent="center" alignContent="center" alignItems="center" /* item.id */ >
                                <Item item>
                                    {/*<Avatar alt="Remy Martin" src={item.owner.picture} / >*/}
                                    <Grid container spacing={4} sx={{padding: 2,}}
                                          onClick={() => handleOnClick(item.owner.id)}>
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
                                        <Grid item xs={12}  container direction="row" padding={1} paddingTop={2}>
                                            <Grid xs={3}  item container sx={{
                                                paddingLeft: "20px",
                                                alignItems: "center",
                                            }}><ThumbUp/>{" "}{item.likes}
                                            </Grid>
                                            <Grid xs={8} item container flexDirection="row" >
                                            {item.tags.map((i) => {
                                                    console.log("tags",i)
                                                    return (
                                                            <Grid item container border={1} textAlign="center" justifyContent="center" sx={{
                                                                backgroundColor: "#DB3069",
                                                                width: "30%",
                                                                height: "25",
                                                                borderRadius: "20",
                                                            }} key={i}>{i}</Grid>

                                                    )
                                                }
                                            )}
                                            </Grid>
                                        </Grid>
                                        <Grid item padding={5}>
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