import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// npx json-server --watch data/db.json --port 8000
// npm run start
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/blogs/:id" element={<BlogDetails />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
