// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import Users from "./Components/Card";
import './App.css';
import Footer from "./Footer";


import React, { Component } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
		
	// Set initial state
	this.state = {users_data :[],
                loading : true                
  }
  

	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){
      // document.getElementById("main").style.display='flex';
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                         loading: false
                      
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
      <nav>
          <div className="box">
            <div className="row">
            <div className="column1">
            <h2>LetsGrowMore <img src="lgm.jpg" alt="logo"></img></h2>
            {/* <img src={"lgm_icon.jpg"} className="row" alt="logo"></img> */}
            </div>
            <div className="column2">
            <button onClick={this.updateState}>Get Users</button>
            </div>
            </div>
          </div>
        </nav>
        <div className="box2">
         <Users loading={this.state.loading} users={this.state.users_data}/>
         </div>
         <div className="App">
  
    <h3>LGM</h3>
    <Footer />
  </div>
    </>
    )
  }
  
}

  

	
export default App;
