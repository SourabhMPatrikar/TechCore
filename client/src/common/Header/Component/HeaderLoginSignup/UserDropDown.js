import React from "react";
const HeaderUserDropDown = () => {
    return(
        <div className="dropdown text-end">
          <a
            href="#"
            className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false"
          >
            <img
              src="https://connectkaro.org/wp-content/uploads/2019/03/placeholder-profile-male-500x500.png"
              alt="mdo"
              width="38"
              height="38"
              className="rounded-circle"
            />
          </a>
          <ul
            className="dropdown-menu text-small" aria-labelledby="dropdownUser1"
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
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
    )
}
export default HeaderUserDropDown;