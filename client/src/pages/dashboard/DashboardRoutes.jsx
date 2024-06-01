import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardComponent from "./DashboardComponent";
import UserComponentRouting from "../User/UserComponentRouting";
import PenetrationTestingComponent from "../PenetrationTesting/PenetrationTestingComponent";

export default function DashboardRoute() {
    return (
        <>
        <Routes>
            <Route path="/" element={(<DashboardComponent></DashboardComponent>)}>
              <Route index element={(<PenetrationTestingComponent/>)}></Route>
                <Route path="user/*" element={(<UserComponentRouting/>)}></Route>
                <Route path="/testing" element={(<PenetrationTestingComponent/>)}></Route>
                
            </Route>
        </Routes>
        </>
       
    )
}