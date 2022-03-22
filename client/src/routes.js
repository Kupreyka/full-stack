import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import {AnnouncementPage} from "./pages/AnnouncementPage";
import {AdPage} from "./pages/AdPage";
import {AuthPage} from "./pages/AuthPage";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path={"/announcement"} exact><AnnouncementPage/></Route>
                <Route path={"/adpage"} exact><AdPage/></Route>
                <Redirect to={"/announcement"}/>
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
