import Home from './Components/Home';
import Hello from './Components/Pages/Hello';
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import SignIn from './Components/User/SignIn';
import SignUp from './Components/User/SignUp';
import 'antd/dist/reset.css';
import EmailVerification from './Components/User/EmailVerification';
import {Toaster} from 'react-hot-toast'
import ProtectedRoute from './Components/ProtectedRoute';
import PublicRoute from './Components/PublicRoute';


function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Routes>

          <Route exact path="/"
            element={<PublicRoute><Home></Home></PublicRoute>} />
          <Route exact path="/sigin"
            element={<PublicRoute><SignIn></SignIn></PublicRoute>} />
          <Route exact path="/signup"
            element={<PublicRoute><SignUp></SignUp></PublicRoute>} />
            <Route exact path="/hello"
            element={
              <ProtectedRoute>
                <Hello></Hello>
              </ProtectedRoute>
            } />
          <Route exact path="/emailverification"
            element={<EmailVerification></EmailVerification>} />
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App;
