import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
//import Dropdown from 'react-bootstrap/Dropdown';
const CurrencyDrop = () => {
    const { currency } = useContext(AppContext);
    const [cost, setCost] = useState('');
    const { dispatch,remaining  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

            if(cost > remaining) {
                alert("You cannot reduce the budget value lower than the spending.");
                setCost("");
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };
    
    

// function BasicExample() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }



    return (
        <select class="icon-green" className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>Currency
            <option class="icon-green" defaultValue >Currency (£ Pound)</option>
            <option class="icon-green" value="Reduce" name="Reduce">£ Pound</option>
            <option class="icon-green" value="Reduce" name="Reduce">$ Dollar</option>
            <option class="icon-green" value="Reduce" name="Reduce">£ Pound</option>
            <option class="icon-green" value="Reduce" name="Reduce">₹ Ruppee</option>
        </select>
        // <div class="icon-green" className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>  
        //         <div class="btn-group show">
        //             <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                 Currency (£ Pound)
        //             </button>
        //             <div class="dropdown-menu">
        //                 <a class="dropdown-item" href="#">$ Dollar</a>
        //                 <a class="dropdown-item" href="#">£ Pound</a>
        //                 <a class="dropdown-item" href="#">€ Euro</a>
        //                 <a class="dropdown-item" href="#">₹ Ruppee</a>
        //             </div>
        //         </div>
        // </div>
    );
}; 
export default CurrencyDrop;
