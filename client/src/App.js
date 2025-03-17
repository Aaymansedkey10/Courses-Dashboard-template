
import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Courses from './Components/Courses';
import OurInstrucors from './Components/OurInstructors';
import OurCourses from './Components/OurCourses';
import AddCourse from './Pages/AddCourse';
import DetailsCourse from './Pages/DetailsCourse';
import EditCourse from './Pages/EditCourse';

function App() {
  return (
    <div className="App">
      <div className='position-sticky top-0'>
        <NavBar />  
      </div>
      <Routes>
        <Route index element={<OurCourses />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="add" element={<AddCourse />} />
          <Route path=":id" element={<DetailsCourse />} />
          <Route path="edit/:id" element={<EditCourse />} />
        </Route>
        <Route path='instructors' element={<OurInstrucors />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
