import logo from './logo.svg';
import './App.css';
import React from "react";
import PostsLists from "./Components/PostLists/PostsLists";
import UsersList from "./Components/UsersList/UsersList";
import {Button, Grid} from "@mui/material";
import {ButtonGroup} from "@mui/material";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import {Box} from "@mui/material";
import FullUserProfile from "./Components/FullUserProfile/FullUserProfile";


function App() {

    return (
        <Router>
            <div className="App">
                {/*<header className="App-header">*/}
                {/*    <h1>Decathlon Assessment App</h1>*/}
                {/*</header>*/}
                <header className="secondaryHeader">
                    <Grid container justifyContent="center" sx={{flexDirection: "row"}} spacing={2}>
                        <Grid item><Button sx={{
                            backgroundColor: "#F5D547", '&:hover': {
                                backgroundColor: '#2B4162',
                                // opacity: [0.9, 0.8, 0.7],
                            },
                        }}>
                            <Link to="/">Home</Link>
                        </Button></Grid>
                        <Grid item> <Button sx={{
                            backgroundColor: "#F5D547", '&:hover': {
                                backgroundColor: '#2B4162',
                                // opacity: [0.9, 0.8, 0.7],
                            },
                        }}>
                            <Link to="/Users">Users</Link>
                        </Button></Grid>

                        {/*<Grid item>*/}
                        {/*    <Button sx={{*/}
                        {/*        backgroundColor: "lightsteelblue", '&:hover': {*/}
                        {/*            backgroundColor: 'steelblue',*/}
                        {/*        },*/}
                        {/*    }}>*/}
                        {/*        <Link to="/user">Specific (Static User ID)</Link>*/}
                        {/*    </Button></Grid>*/}


                    </Grid>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <PostsLists/>
                        </Route>
                        <Route path="/users">
                            <UsersList/>
                        </Route>
                        <Route path="/user/:id" component={FullUserProfile}>
                        </Route>
                    </Switch>

                </main>
                <footer>Page Created By Sinan Öndül</footer>

            </div>
        </Router>
    );
}

export default App;
