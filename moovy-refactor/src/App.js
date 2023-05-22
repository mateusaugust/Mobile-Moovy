import { BrowserRouter as Router, Route,Routes} from "react-router-dom"

import NavBar from "./Components/NavBar";
import Library from "./Components/Library";
import Search from "./Components/Search";
import Footer from "./Components/Footer"
import Container from "./Components/Container";

function App() {
 
  return (
    <Router>
      <NavBar/>

      <Container customClass = "minHeight" >
        <Routes>
          <Route exact path ="/library" element={<Library/>}/>
          <Route exact path ="/search" element={<Search/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>


  );
}

export default App;
