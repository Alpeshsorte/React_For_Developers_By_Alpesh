import Nav from "./component/Nav";

import Header from "./component/Header";

import sidebar  from "./component/sidebar";
function App(){
  return <div>
    <h1>yes</h1>
    <h2>yes</h2>
    <h3>yes</h3>
    <h1>Hello react developer</h1>

    <Nav/>
    <br />
    <br /><br /><br />
    <br />
    <Header/>
    <Header/>
  </div>
}

function Side(){
  return <div>
    <h1>this is side bar content show create new function in App.jsx </h1>
    <sidebar/>
  </div>
}

export default {App , Side};
// export default Side;
