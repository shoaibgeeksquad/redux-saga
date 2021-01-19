import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getUsersLists } from '../redux/actions/getUsers'
import './table.css'

const Table = () => {

    let dispatch = useDispatch();
    const users = useSelector(state => state.usersRecord.users);

    useEffect(() => {
        getUsersLists(dispatch);
    }, [dispatch])

    return (
        <>
            <table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                {users && users.length !== 0 && users.map((single, index) =>
                    <tr key={index}>
                        <td>{single.name}</td>
                        <td>{single.phone}</td>
                        <td>{single.address.city}</td>
                    </tr>
                )}   
            </table>  
        </>
    )
}


export default Table;