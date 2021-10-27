import React from "react";
import {Box, Grid} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import SimpleMap from "../Maps/MapContainer";
import moment from "moment";


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    height: 350,
    width: 900,
    color: theme.palette.text.secondary,
    flexDirection: "row",
    backgroundColor: "snow", '&:hover': {
        backgroundColor: 'seashell',
    },
}));

const ProfileCard = ({
                         data,
                         isLoading,
                     }) => {

    const [user, setUser] = React.useState({})


    React.useEffect(() => {
        console.log("123123", data)
        setUser(data);
    }, [data])

    if (!isLoading && user.location) {
        // debugger;
        console.log("jdncfj", user)
        return (
            <Grid container sx={{flexGrow: 1, backgroundColor: "#"}} justifyContent="center">
                <Grid item xs={9}>
                    <Grid container justifyContent="center" alignContent="center"
                          >
                        <Grid item key={user.id}  /* item.id */ >
                            <Item>
                                <Grid item container md={12} padding={2} justifyContent="flex-start" paddingTop="100">
                                    <Grid item md={3} alignItems="center" >
                                        <img style={{width: "100%", height: "100%"}} alt="Remy Sharp"
                                             src={user.picture}/>
                                    </Grid>
                                    <Grid md={4} item container paddingLeft={2}>
                                        <Grid>{user.id}</Grid>
                                        <Grid item><b>{user.title.charAt(0).toUpperCase() + user.title.slice(1)}. {user.firstName} {user.lastName}</b></Grid>
                                        <Grid item><b>Gender:</b> {user.gender}</Grid>
                                        <Grid><b>Date of Birth:</b> {moment(user.dateOfBirth).format('ll',)} </Grid>
                                        <Grid><b>Register Date: </b>{moment(user.registerDate).format('lll',)}</Grid>
                                        <Grid><b>Email: </b>{user.email}</Grid>
                                        <Grid><b>Phone:</b> {user.phone} </Grid>
                                    </Grid>

                                    <Grid item container md={4} paddingLeft={3}>

                                        <Grid item>
                                            <Box><b>Address:</b> {user.location.street}</Box>
                                            <Box>{user.location.city} {user.location.state} {user.location.country} </Box>
                                            <Box>Timezone: {user.location.timezone}</Box>
                                            <SimpleMap street={user.location.street} city={user.location.city}
                                                       state={user.location.state}
                                                       country={user.location.country}
                                            />
                                        </Grid>
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