import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Box } from '@material-ui/core';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from './components/Footer'

function App() {
  return (
    <Box width='100vw' height='100vh' sx={{width: {xl: '1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;
