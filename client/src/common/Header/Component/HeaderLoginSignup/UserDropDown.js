import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const HeaderUserDropDown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  

  const userName = JSON.parse(localStorage.userInfo);
  const fullName = userName.firstName+" " +userName.lastName;
  // const fullName = 'ram singh';   
        console.log('full Name eeeee', fullName);
    const handleLogout = (e) => {
      // localStorage.removeItem('userInfo');
      localStorage.setItem({key:'userInfo', value:null});
      navigate('/')
    }
    return(
        <div className="dropdown text-end">
          <a
            href="#"
            className="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false" 
          >
            <img
              src="https://connectkaro.org/wp-content/uploads/2019/03/placeholder-profile-male-500x500.png"
              alt="mdo"
              width="38"
              height="38"
              className="rounded-circle"
              onClick={()=>setShowDropdown(!showDropdown)}
            />
            <span className="user-name">{fullName}</span>
          </a>
          <ul
            className="dropdown-menu text-small" aria-labelledby="dropdownUser1" showDropdown="showDropdown"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
                  <a className="dropdown-item" href="" onClick={handleLogout}>
                    Sign out
                  </a>
              <button className="dropdown-item" onClick={handleLogout}>
                Sign out
              </button>
            </li>
          </ul>
        </div>
    )
}
export default HeaderUserDropDown;