import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../h5/Routes";
import s from '../h5-rrd-v6/Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}
                     style={({isActive}) => ({color: isActive ? 'blue' : 'red'})}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}
                     style={({isActive}) => ({color: isActive ? 'blue' : 'red'})}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link}
                     style={({isActive}) => ({color: isActive ? 'blue' : 'red'})}>junior+</NavLink>
            <div className={s.block}/>

        </div>
    )
}

export default Header
