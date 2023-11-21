import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);

    const handleBudget = (val) => {
        dispatch({
            type: "SET_BUDGET",
            payload: val
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency.symbol}</span>
            <input value={budget} type="number" step="10" onChange={(e)=> handleBudget(e.target.value)}/>
        </div>
    );
};
export default Budget;