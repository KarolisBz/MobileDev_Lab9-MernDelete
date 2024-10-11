// importing router for navigation capabilities
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// importing components
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';

// Added Navbar which uses Reacts ROUTER LINK to navigate to different "Components" using client side routing
// Client side routing is the clients ability to change the URL without making another request to the server allowing
// you to instantly update your Apps UI aswell as make data requests with the command fetch to update the page with new information.
function App() {
  return (
    <Router>
      {/* External NavigationBar componenet*/}
      <NavigationBar />
      {/* External header componenet*/}
      <Header />
      <Routes>
        {/* Routes set to components which contain the JS XML content*/}
        <Route path="/home" element={<Content/>} />
        <Route path="/read" element={<Read/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
      {/* External Footer componenet*/}
      <Footer />
    </Router>
  );
}

export default App;