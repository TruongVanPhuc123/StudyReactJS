import React from 'react'
import { Link, Outlet, NavLink, useSearchParams } from 'react-router-dom'
import GetData from '../data'

export default function Root() {
    let data = GetData();
    let [searchParams, setSearchParams] = useSearchParams()
    return (
        <>
            <div id="sidebar" style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <nav>
                    <ul>
                        <li style={{ listStyle: "none" }}>
                            <input value={searchParams.get("filter" || "")} onChange={(event) => {
                                let filter = event.target.value
                                if (filter) {
                                    setSearchParams({ filter })
                                } else {
                                    setSearchParams({})
                                }
                            }} />
                            {data
                                .filter((invoices) => {
                                    let filter = searchParams.get("filter")
                                    if (!filter) return true
                                    let name = invoices.name.toLowerCase()
                                    return name.startsWith(filter.toLowerCase())
                                }).map((invoices) => (
                                    <NavLink style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            margin: "1rem 0",
                                            color: isActive ? "red" : ""
                                        }
                                    }}
                                        to={`/invoices/${invoices.notes}`}>{invoices.name}
                                    </NavLink>
                                ))}
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div >
            <div id="detail"></div>
        </>
    );
}
