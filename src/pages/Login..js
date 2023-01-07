import { Button, Card, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const navigation = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log("Got From To Signup")
        setEmail(location.state.email)
    }, [])

    function continueToSignup() {
        console.log("Transfer To Signup");
        navigation("/signup", { state: { "email": email, "password": password } });
    }
    return (<>
        <Card variant="outlined">
            <div style={{ padding: '45px' }}>
                <div style={{ fontWeight: '700', fontSize: '24px', lineHeight: '33px', color: '#343435', paddingBottom: '145px' }}>Login</div>
                <TextField fullWidth id="email" label="Email ID" variant="outlined" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '34px' }} value={email} onChange={event => setEmail(event.target.value)} />
                <TextField fullWidth id="password" label="Enter Password" variant="outlined" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '7px' }} value={password} onChange={event => setPassword(event.target.value)} />
                <div style={{ textAlign: 'right' }}>
                    <Button variant="text" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', textTransform: 'none', textAlign: 'right' }}>Forget Password?</Button>
                </div>
            </div>
            <div style={{ paddingBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained"
                        style={{ paddingTop: '13px', paddingRight: '75px', paddingBottom: '11px', paddingLeft: '76px', marginBottom: '180px' }}
                        onClick={() => continueToSignup()}>
                        Continue
                    </Button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435' }}>New Here?</span>
                    <span>
                        <Button variant="text"
                            style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', textTransform: 'none', padding: '0' }}
                            onClick={() => continueToSignup()}>
                            Signup
                        </Button>
                    </span>
                </div>
            </div>
        </Card>
    </>);
};
export default Login;