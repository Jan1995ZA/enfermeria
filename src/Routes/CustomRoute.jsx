import { Route, Routes } from "react-router-dom"
import {Menu} from "../Home/Menu"



export function CustomRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Menu/>} />
            
            </Routes>
        </>
    )
}