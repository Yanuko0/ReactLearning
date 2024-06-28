import Layout from './pages/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';


function App() {
  // const {count} = useSelector(state => state.counter)
  return (
    <Router>
    <Layout/>
    {/* {count} */}
    </Router>
  );
}

export default App;
