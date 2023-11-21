import Dropdown from 'react-bootstrap/Dropdown';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function CurrencyDropDown() {
    const { dispatch, currency } = useContext(AppContext);
    const currencies = [
        {
            name: "Dollar",
            symbol: "$",
        },
        {
            name: "Pound",
            symbol: "£",
        },
        {
            name: "Euro",
            symbol: "€",
        },
        {
            name: "Ruppee",
            symbol: "₹",
        }
    ]
    const handleCurrency = (curr) => {
        console.log(curr)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr
        })
    }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       currency ({currency.symbol} {currency.name})
      </Dropdown.Toggle>

      <Dropdown.Menu className="alert alert-success " >
        {
            currencies.map((currency) => (
                <Dropdown.Item key={currency.name} onClick={()=> handleCurrency(currency)}>{currency.symbol} {currency.name}</Dropdown.Item>
            ))
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CurrencyDropDown;