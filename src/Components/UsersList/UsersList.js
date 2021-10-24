import React, {useState} from "react";
import {Box} from "@mui/material";
import UserCard from './UserCard'
import Post from "../PostLists/Post";


const UsersList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [responseObj, setResponseObj] = useState({});
    const getUsersList = () => {
        fetch('https://dummyapi.io/data/v1/user?page=1&limit=10', {
            headers: new Headers({
                'app-id': '6171c456c5723b7c9e5da143',
            }),
        })
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
            }).then(setIsLoading(false))
    }

    React.useEffect(() => {
        getUsersList();
    }, [])

    return (
        <Box sx={{paddingTop:2,}}>
            <UserCard data={responseObj} isLoading={isLoading}/>
        </Box>
    )
}

export default UsersList;




