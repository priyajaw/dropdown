
// import React from 'react';
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import { Dropdown } from 'react-bootstrap';
// function App() {

//   const [showDropdown, setShowDropdown] = useState(false);
//   return (
//     <Dropdown
//       onMouseLeave={() => setShowDropdown(false)}
//       onMouseOver={() => setShowDropdown(true)}
//     >
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         select
//       </Dropdown.Toggle>


//       <Dropdown.Menu show={showDropdown}>

//         <Dropdown.Item href="#/action-1">yes</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">probaly not </Dropdown.Item>
//       </Dropdown.Menu>

//  </Dropdown>


//      );
// }

// export default App;

import React from 'react';
import "./style.css";
 import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dropdown } from 'react-bootstrap';
import Dropdown from './Dropdown';
import Albums from './Albums';
export default function App() {
    const [selected, setSelected] = useState("");
    return (
        <>
        
        
        
           <div className="App">
            <Dropdown selected={selected} setSelected={setSelected} />
        </div>


        <Albums/>
        </>
    )
}
