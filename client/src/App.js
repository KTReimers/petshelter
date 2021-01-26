import './App.css';
import {Router, Link} from '@reach/router';
import AllPets from './views/AllPets';
import AddPet from './views/AddPet';
import OnePet from './views/OnePet';
import UpdatePet from './views/UpdatePet';


function App() {
  return (
    <div className="App">
      <>
        <div className="header">
          <h1>Pet Shelter</h1>
          <Link to= "/pets/new">Add a pet to the shelter</Link> | <Link to= "/">Back to Home</Link>
        </div>
        <Router>
          <AllPets path= "/"/>
          <AddPet path="/pets/new"/>
          <OnePet path="/pets/:_id"/>
          <UpdatePet path="/pets/update/:_id"/>
        </Router>
      </>
    </div>
  );
}

export default App;

