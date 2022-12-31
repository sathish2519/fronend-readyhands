import {React} from 'react'
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Form, Input, Button } from 'antd'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './User.css'
import  toast from 'react-hot-toast';
import axios from 'axios'
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { LinearProgress } from "@mui/material";
// import { Dialog } from "@mui/material";
// import DialogContent from "@mui/material/DialogContent";
import { useDispatch } from 'react-redux';
import { hideLoading,showLoading } from '../../Redux/alertsSlice';

const theme = createTheme();

function SignIn() {

  // const {loading}=useSelector(state=>state.alerts)
  // console.log(loading)

  //using the reducers
  const dispatch = useDispatch();



  //Navigate HOOK fOR  Routing
  const navigate = useNavigate();
  // const[loading,setLoading]=useState(false)
 

  //form on finish values
  const onFinish = async(values) => {
    try {
      dispatch(showLoading());
      console.log(values);
      // setLoading(true)
      const response= await axios.post('/api/user/login',values)
      dispatch(hideLoading())
      if(response.data.success){
        // setLoading(false)
        toast.success(response.data.message)
        toast("Redirecting to Home page")
        localStorage.setItem("token",response.data.data)
        navigate("/hello")

      }else{
        // setLoading(false)
        dispatch(hideLoading())
        toast.error(response.data.message)
      }
     } catch (error) {
      // setLoading(false)
      dispatch(hideLoading())
      console.log(error)
      toast.error("something went wrong")
     }
  }
  

  return (
    <div className='authentication'>
      <div className="authentication-form card part2 p-3">
        {/* <h1 className='card-title'>Login to Continue</h1> */}
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
                Sign in
              </Typography>
              </Box>
              </Container>
        </ThemeProvider>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item className="form-2" label="Email" name="email" rules={[{ required: true }]}>
            <Input placeholder='Email-id' />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input type='password' placeholder='Password' />
          </Form.Item>
          <Button className='primary-button' htmlType="submit">
            Login
          </Button>
          {/* <Link to='/sigin'>Click here to Login</Link> */}
          <p className='anchor my-7 p-3' on onClick={()=>navigate("/signup")}><span>Click here to Register</span></p>
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

export default SignIn


