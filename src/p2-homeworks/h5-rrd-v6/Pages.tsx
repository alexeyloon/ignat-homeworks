import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from "../h5/pages/Error404";
import PreJunior from "../h5/pages/PreJunior";
import Junior from "../h5/pages/Junior";
import JuniorPlus from "../h5/pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/*pre-junior',
    JUNIOR: '/*junior',
    JUNIOR_PLUS: '/*junior-plus',

}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/*'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>


                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
