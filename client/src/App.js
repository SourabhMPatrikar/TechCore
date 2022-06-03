import React, {useState} from 'react';
import bootstrap from'../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Wrapper from './common/Wrapper';
import SignIn from './component/Auth/SignIn';

function App() {
  const [logStatus, SetLogStatus] = useState(true);
  // const logStatus = true;
  return (
    <div className="App">
      {/* {logStatus ? (
        <>
          <SignIn />
        </>
      ) : (
        <> */}
          <Wrapper />
        {/* </>
      )} */}
    </div>
  );
}
export default App;