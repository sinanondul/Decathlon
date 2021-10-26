import React, {useState} from "react";
import ProfileCard from "./ProfileCard";
import {CircularProgress} from "@mui/material";


const FullUserProfile = ({match}) => {
    const staticUserId = "60d0fe4f5311236168a109ca";

    console.log(match.params.id)
    const [responseObj, setResponseObj] = useState({});
    const [isLoading , setIsLoading] = useState(false)
    console.log("hereisid", staticUserId);

    const getUser = () => {
        setIsLoading(true);
        fetch(`https://dummyapi.io/data/v1/user/${match.params.id}`, {
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
            </div>

        )
    }else{
        return (<CircularProgress/>);
    }

}

export default FullUserProfile;




