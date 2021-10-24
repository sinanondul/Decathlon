import React, {useState} from "react";


const FullUserProfile = () => {

    const [responseObj, setResponseObj] = useState({});
    const getPostLists = () => {
        fetch('https://dummyapi.io/data/v1/post', {
            headers: new Headers({
                'app-id': '6171c456c5723b7c9e5da143',
            }),
        })
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
            })
    }

    return (
        <div>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getPostLists}>Get Full User Profile</button>
        </div>

    )
}

export default FullUserProfile;




