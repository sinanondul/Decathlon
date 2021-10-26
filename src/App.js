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
    Link
} from "react-router-dom";
import {Box} from "@mui/material";
import FullUserProfile from "./Components/FullUserProfile/FullUserProfile";


const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <PostsLists/>,
        main: () => <div>Posts</div>
    },
    {
        path: "/Users",
        sidebar: () => <UsersList/>,
        main: () => <h2>Users</h2>
    },
    {
        path: "/user",
        sidebar: () => <FullUserProfile />,
        main: () => <h2>FullUser</h2>
    },
];

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Decathlon Assessment App</h1>
                </header>
                <header className="secondaryHeader">
                    <Grid container justifyContent="center" sx={{flexDirection: "row"}} spacing={2}>
                        <Grid item><Button sx={{
                            backgroundColor: "lightsteelblue", '&:hover': {
                                backgroundColor: 'steelblue',
                                // opacity: [0.9, 0.8, 0.7],
                            },
                        }}>
                            <Link to="/">Home</Link>
                        </Button></Grid>
                        <Grid item> <Button sx={{
                            backgroundColor: "lightsteelblue", '&:hover': {
                                backgroundColor: 'steelblue',
                                // opacity: [0.9, 0.8, 0.7],
                            },
                        }}>
                            <Link to="/Users">Users</Link>
                        </Button></Grid>

                        <Grid item>
                            <Button sx={{
                                backgroundColor: "lightsteelblue", '&:hover': {
                                    backgroundColor: 'steelblue',
                                },
                            }}>
                                <Link to="/user">Specific (Static User ID)</Link>
                            </Button></Grid>


                    </Grid>
                </header>
                <main>

                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar/>}
                            />
                        ))}
                    </Switch>

                </main>
                <footer>Page Created By Sinan Öndül</footer>

            </div>
        </Router>
    );
}

export default App;
