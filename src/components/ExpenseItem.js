import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td ><button className='d-flex justify-content-center align-items-center ' onClick={event=> increaseAllocation(props.name)} style={{border: 'none', height: '25px', width: '25px',  background: 'green', color: 'white', borderRadius: '50%', fontSize: '22px', fontWeight: 'bolder'}}>+</button></td>
        <td><button className='d-flex justify-content-center align-items-center' onClick={event=> decreaseAllocation(props.name)} style={{border: 'none', height: '25px', width: '25px',  background: 'red', color: 'white', borderRadius: '50%', fontSize: '22px', fontWeight: 'bolder'}}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
