import React from "react";
import { Box, Grid} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    height: 300,
    width: 600,
    color: theme.palette.text.secondary,
    flexDirection:"row",
}));

const ProfileCard = ({
                         data,
                         isLoading,
                     }) =>{

    const [user, setUser] = React.useState({})



    React.useEffect(() => {
        console.log("123123",data)
        setUser(data);
    }, [data])

    if (!isLoading && user.location) {
        // debugger;
        console.log("jdncfj", user)
        return (
            <Grid container sx={{flexGrow: 1,backgroundColor:"rebeccapurple",}} justifyContent="center">
                <Grid item xs={9}>
                    <Grid container justifyContent="center" alignContent="center" sx={{backgroundColor:"steelblue", paddingTop:"50px"}}>
                            <Grid item key={user.id}  /* item.id */ >
                                <Item>
                                    <Grid>
                                    <Grid item container spacing={3} sx={{padding:1,}}>
                                        <Grid item>
                                            <img style={{width: "80%", height: "100%"}} alt="Remy Sharp" src={user.picture}/>
                                                </Grid>
                                        <Grid item>
                                            <Box justifyContent="center" alignContent="center"
                                                 sx={{height: 40, width: 200, backgroundColor: "steelblue"}}>
                                                {user.title} {user.firstName} {user.lastName}
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box>Gender: {user.gender}</Box>
                                            <Box>Date of Birth: {user.dateOfBirth} </Box>
                                            <Box>Register Date: {user.registerDate}</Box>
                                            <Box>Email: {user.email}</Box>
                                            <Box>Phone: </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box>Address</Box>
                                            <Box>State: {user.location.state}</Box>
                                            <Box>Street: {user.location.street}</Box>
                                            <Box>City: {user.location.city}</Box>
                                            <Box>Country: {user.location.country}</Box>
                                            <Box>Timezone: {user.location.timezone}</Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} sx={{padding:1,}}>

                                    </Grid>
                                    <Grid container spacing={3} sx={{padding:1,}}>

                                    </Grid>
                                    </Grid>
                                </Item>
                            </Grid>

                    </Grid>
                </Grid>
            </Grid>

        )
    } else {
        return (<CircularProgress color="info"/>)
    }



}

export default ProfileCard;