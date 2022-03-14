import React, {Fragment} from 'react';
import Header from "./components/Header/Header";
import Notes from './components/Notes/Notes';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CreateNotePage from "./pages/CreateNotePage";
import Card from "./UI/Card";

function App() {
    return (
        <Fragment>
            <Header/>
            <Card>
                <Switch>
                    <Route path='/' exact>
                        <HomePage/>
                    </Route>
                    <Route path='/create-note'>
                        <CreateNotePage/>
                    </Route>
                </Switch>
            </Card>
        </Fragment>
    );
}

export default App;
