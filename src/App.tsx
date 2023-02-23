import {Route, Routes} from "react-router";
import React, {FC} from "react";

import {HomePage, LoginPage, NewsDetailsPage, NewsPage, ProfilePage} from "./pages";
import {PrivateRoute} from "./utils";
import {MainLayout} from "./layouts";


const App: FC = () => {


    return (
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/news'} element={<NewsPage/>}/>
                    <Route path={'/news/:id'} element={<NewsDetailsPage/>}/>
                    <Route path={'/profile'} element={<PrivateRoute><ProfilePage/></PrivateRoute>}/>
                </Route>
            </Routes>
    );
};

export default App;
