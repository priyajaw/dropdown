import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
function Dropdown({ selected,setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['yes', 'probaly not'];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e)=>setIsActive(!isActive)}>
        {selected}
        <FontAwesomeIcon icon={faCaretDown} shake />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map(option => (
            <div className="dropdown-item" onClick={e => {
              setSelected(option);
              setIsActive(false);
            }}>
              {option}
            </div>
          ))}
         
      

        </div>
   )}
    </div>
  );
}

export default Dropdown;