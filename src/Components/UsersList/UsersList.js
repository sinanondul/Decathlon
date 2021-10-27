import React, {useState} from "react";
import {Box, Grid, Pagination} from "@mui/material";
import UserCard from './UserCard'
import Post from "../PostLists/Post";


const UsersList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [responseObj, setResponseObj] = useState({});
    const [page, setPage] = useState(1);
    const getUsersList = (page) => {
        fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=10`, {
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
        getUsersList(page);
    }, [page])

    const handlePagination =(e) =>{
        console.log(e.target.textContent)
        setPage(e.target.textContent)
    }
    return (
        <Box sx={{paddingTop:2,}}>
            <UserCard data={responseObj} isLoading={isLoading}/>
            <Grid container justifyContent="center" padding={5}>
                <Pagination count={10} color="secondary" onChange={handlePagination}/>
            </Grid>
        </Box>

    )
}

export default UsersList;




