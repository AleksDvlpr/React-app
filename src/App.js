import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import EmployeeCreate from './components/employees/EmployeeCreate';
import EmployeeDetail from './components/employees/EmployeeDetail';
import EmployeeList from './components/employees/EmployeeList';
import LogOut from './components/auth/LogOut';
import { useSelector } from 'react-redux';

function App() {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <div className="App">
      <LogOut />

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        <Route path="/employee/create" element={<EmployeeCreate />} />
      </Routes>
    </div>
  );
}

export default App;
