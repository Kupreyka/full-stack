import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import AdPage from "./pages/AdPage";
import {AuthPage} from "./pages/AuthPage";
import AnnouncementPage from "./pages/AnnouncementPage";



export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route exact path={"/"} render={() => <Redirect to={"/announcement"}/>}/>
                <Route path={"/announcement"} exact><AnnouncementPage/></Route>
                <Route path={"/adpage"} exact><AdPage/></Route>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path={"/"} exact><AuthPage/></Route>
            <Redirect to={"/"}/>
        </Switch>
    )
}
