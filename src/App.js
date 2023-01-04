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
import { useSelector } from 'react-redux';
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LinearProgress } from "@mui/material";
import { Dialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import ApplyServiceProvider from './Components/Pages/ApplyServiceProvider';


function App() {
  const {loading}=useSelector(state=>state.alerts)
  return (
    <>
      <BrowserRouter>
     {loading&& (
      <Dialog open={loading}>
            <LinearProgress />
            <DialogTitle>{"Processing"}</DialogTitle>
            <DialogContent>
                <DialogContentText>Please wait..</DialogContentText>
            </DialogContent>
        </Dialog>)}
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
            <Route path="/apply-serviceprovider"
            element={
              <ProtectedRoute>
                <ApplyServiceProvider></ApplyServiceProvider>
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
