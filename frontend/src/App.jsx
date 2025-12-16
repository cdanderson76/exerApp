import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import EditWorkout from './pages/EditWorkout';

//PAGES AND COMPONENTS

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/workouts/:id' element={<EditWorkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App