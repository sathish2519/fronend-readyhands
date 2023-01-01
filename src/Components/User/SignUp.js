import { React } from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from 'antd'
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { LinearProgress } from "@mui/material";
// import { Dialog } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './User.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { hideLoading,showLoading } from '../../Redux/alertsSlice';



const theme = createTheme();
function SignUp() {

  const dispatch=useDispatch()
  let navigate = useNavigate();
 
  const onFinish = async (values) => {
    // setLoading(true)
  
     try {
      dispatch(showLoading())
      const response= await axios.post('/api/user/register',values)
      if(response.data.success){
        // setLoading(false)
        dispatch(hideLoading())
        toast.success(response.data.message)
        toast("Redirecting to login page")
        navigate("/sigin")

      }else{
        dispatch(hideLoading())
        toast.error(response.data.message)
      }
     } catch (error) {
      dispatch(hideLoading())
      toast.error("something went wrong")
     }
    // setLoading(true)

  }
  return (
    <div className='authentication'>
      <div className="authentication-form card  p-1">
        {/* <h1 className='card-title'>Create Account</h1> */}
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
            </Box>
          </Container>
        </ThemeProvider>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item className="form-1" label="Name" name="name" rules={[{ required: true }]}>
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input placeholder='Email-id' />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input type='password' placeholder='Password' />
          </Form.Item>
          <Button className='primary-button' htmlType="submit">
            Register
          </Button>

          {/* <Link to='/sigin'>Click here to Login</Link> */}
          <p className='anchor my-7 p-3' onClick={()=>navigate("/sigin")}><span>Click here to Login</span></p>
        </Form>
      </div>
      {/* <Dialog open={loading}>
        <LinearProgress />
        <DialogTitle>{"Registering User"}</DialogTitle>
        <DialogContent>
          <DialogContentText>Processing</DialogContentText>
        </DialogContent>
      </Dialog> */}
    </div>

  )
}

export default SignUp
