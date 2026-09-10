import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components1/header';
import HomeComponent from './pages/home';
import AddEmployeeComponent from './pages/addEmployee';
import EditEmployeeComponent from './pages/editEmployee';
import ViewEmployeeComponent from './pages/viewEmployee';
import FooterComponent from './components1/footer';



function App1() {
  return (
    <BrowserRouter>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/add-employee" element={<AddEmployeeComponent />} />
        <Route path="/edit-employee/:id" element={<EditEmployeeComponent />} />
        <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App1;
