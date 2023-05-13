import { Route, Routes } from "react-router-dom"
import {Menu} from "../Home/Menu"
import { Home } from "../Home/Home"



export function CustomRoute() {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </>
    )
}