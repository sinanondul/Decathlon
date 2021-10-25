import React, {useState} from "react";
import Post from "./Post";
import {Box} from "@mui/material";



const PostLists = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [responseObj, setResponseObj] = useState({});

    async function getPostLists() {
        setIsLoading(true);
        let resp = await fetch('https://dummyapi.io/data/v1/post?page=1&limit=10', {
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
        getPostLists();
    }, [])

    return (
        <Box sx={{paddingTop:2,}}>
        <Post data={responseObj} isLoading={isLoading}/>
        </Box>
    )
}

export default PostLists;




