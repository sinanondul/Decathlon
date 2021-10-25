import React, {useState} from "react";
import ProfileCard from "./ProfileCard";
import {CircularProgress} from "@mui/material";


const FullUserProfile = () => {

    const [responseObj, setResponseObj] = useState({});
    const [isLoading , setIsLoading] = useState(false)

    const getUser = () => {
        setIsLoading(true);
        fetch('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca', {
            headers: new Headers({
                'app-id': '6171c456c5723b7c9e5da143',
            }),
        })
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
            }).then(setIsLoading(false))
            .then(console.log("inrequest",responseObj))
            .then(window.localStorage.setItem('user', responseObj))
            console.log(window.localStorage.getItem('user'))
    }
    React.useEffect(() =>{
        getUser();
    },[])

    if(!isLoading && responseObj!=null){
        return (
            <div>
                <div>
                    <ProfileCard data={responseObj} isLoading={isLoading} />
                </div>
                <button onClick={getUser}>Get User Profile</button>
            </div>

        )
    }else{
        return (<CircularProgress></CircularProgress>);
    }

}

export default FullUserProfile;




