import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm'
import EmployeeCreate from './components/employees/EmployeeCreate'
import EmployeeDetail from './components/employees/EmployeeDetail'
import EmployeeList from './components/employees/EmployeeList'
import SignOut from './components/auth/SignOut';

function App() {
  return (
    <div className="App">
      <SignOut/>
      
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
          <Route path="/employee/list" element={<EmployeeList/>}/>
          <Route path="/employee/detail/:id" element={<EmployeeDetail/>}/>
          <Route path="/employee/create" element={<EmployeeCreate/>}/>
      </Routes>
    </div>
  );
}

export default App;
