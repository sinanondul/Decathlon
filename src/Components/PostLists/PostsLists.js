import React, {useState} from "react";
import Post from "./Post";
import {Box, Grid, Pagination} from "@mui/material";



const PostLists = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [responseObj, setResponseObj] = useState({});
    const [page, setPage] = useState(1);

    async function getPostLists(page) {
        setIsLoading(true);
        let resp = await fetch(`https://dummyapi.io/data/v1/post?page=${page}&limit=10`, {
            headers: new Headers({
                'app-id': '6171c456c5723b7c9e5da143',
            }),
        })
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
            }).then(setIsLoading(false))
            .then(console.log(responseObj))
    }

    React.useEffect(() => {
        getPostLists(page);
    }, [page])

    const handlePagination =(e) =>{
        console.log(e.target.textContent)
        setPage(e.target.textContent)
    }

    return (
        <Box sx={{paddingTop:2,}}>
        <Post data={responseObj} isLoading={isLoading}/>
            <Grid container justifyContent="center" padding={5}>
                <Pagination count={10} color="secondary" onChange={handlePagination}/>
            </Grid>
        </Box>
    )
}

export default PostLists;




