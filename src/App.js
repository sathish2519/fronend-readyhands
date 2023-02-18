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
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './Components/ProtectedRoute';
import PublicRoute from './Components/PublicRoute';
import { useSelector } from 'react-redux';
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LinearProgress } from "@mui/material";
import { Dialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import ApplyServiceProvider from './Components/Pages/ApplyServiceProvider';
import Notifications from './Components/Pages/Notifications';
import Users from './Components/Pages/Admin/Users';
import ServiceProviders from './Components/Pages/Admin/ServiceProviders';
import Profile from './Components/Pages/ServiceProvider/Profile';
import BookAppointment from './Components/Pages/BookAppointment';
import Appointment from './Components/Pages/Appointment';
import RHHomeSP from './Components/Pages/RHHomeSP.JS';


function App() {
  const { loading } = useSelector(state => state.alerts)
  return (
    <>
      <BrowserRouter>
        {loading && (
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

          <Route  path="/"
            element={<PublicRoute><Home></Home></PublicRoute>} />
          <Route  path="/sigin"
            element={<PublicRoute><SignIn></SignIn></PublicRoute>} />
          <Route  path="/signup"
            element={<PublicRoute><SignUp></SignUp></PublicRoute>} />
          <Route  path="/hello"
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
          <Route path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications></Notifications>
              </ProtectedRoute>
            } />
          <Route path="/admin/users"
            element={
              <ProtectedRoute>
                <Users></Users>
              </ProtectedRoute>
            } />
          <Route path="/admin/service-providers"
            element={
              <ProtectedRoute>
                <ServiceProviders></ServiceProviders>
              </ProtectedRoute>
            } />
          <Route path="/serviceprovider/profile/:userId"
            element={
              <ProtectedRoute>
                <Profile></Profile>
              </ProtectedRoute>
            } />
          <Route path="/book-appointment/:providerId"
            element={
              <ProtectedRoute>
                <BookAppointment></BookAppointment>
              </ProtectedRoute>
            } />
             <Route path="/appointments"
            element={
              <ProtectedRoute>
                <Appointment/>
              </ProtectedRoute>
            } />
            <Route path="/home-sp"
            element={
                <RHHomeSP/>
            } />
          <Route  path="/emailverification"
            element={<EmailVerification></EmailVerification>} />
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App;
