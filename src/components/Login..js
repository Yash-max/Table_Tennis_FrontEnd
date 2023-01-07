import { Button, Card, Checkbox, FormControl, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { Box } from "@mui/system";

const Login = ({callback}) => {

    const handleCallback = (state) => callback(state);
    
    return (<>
        <Card variant="outlined">
            <div style={{ padding: '45px'}}>
                <div style={{ fontWeight: '700', fontSize: '24px', lineHeight: '33px', color: '#343435', paddingBottom: '145px' }}>Login</div>
                <TextField fullWidth id="outlined-basic" label="Email ID" variant="outlined" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '34px' }} />
                <TextField fullWidth id="outlined-basic" label="Enter Password" variant="outlined" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '7px' }} />
                <div style={{textAlign: 'right'}}>
                <Button variant="text" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', textTransform: 'none', textAlign: 'right'}} onClick={()=>handleCallback('forgetPassword')}>Forget Password?</Button>
                </div>
            </div>
            <div style={{ paddingBottom: '22px' }}>
                <div><Button variant="contained" disabled style={{ paddingTop: '13px', paddingRight: '75px', paddingBottom: '11px', paddingLeft: '76px', marginBottom: '180px' }}>Continue</Button></div>
                <div>
                    <span style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435' }}>New Here?</span>
                    <Button variant="text" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', textTransform: 'none'}} onClick={()=>handleCallback('signup')}>Signup</Button>
                </div>
            </div>
        </Card>
    </>);
};
export default Login;