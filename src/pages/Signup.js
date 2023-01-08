import { Button, Card, Checkbox, FormControl, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigation = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordsSame, setIsPasswordsSame] = useState(true);

    useEffect(() => {
        console.log("Got From To Login")
        if (location != null && location.state != null && location.state.email != null) setEmail(location.state.email)
    }, [])

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    }

    function continueToLogin() {

        let isEmailValid = false;
        let isPasswordValid = false;
        let isPasswordsSame = false;

        if (!validateEmail(email)) {
            setIsEmailValid(false);
            isEmailValid = false;
        } else {
            setIsEmailValid(true);
            isEmailValid = true;
        }

        if (!validatePassword(password)) {
            setIsPasswordValid(false);
            isPasswordValid = false;
        } else {
            setIsPasswordValid(true);
            isPasswordValid = true;
        }

        if (password !== confirmPassword) {
            setIsPasswordsSame(false);
            isPasswordsSame = false;
        } else {
            setIsPasswordsSame(true);
            isPasswordsSame = true;
        }

        if (!isEmailValid || !isPasswordValid || !isPasswordsSame) return;

        console.log("Transfer To Login");
        navigation("/login", { state: { "email": email } });
    }

    return (<>
        <Card variant="outlined">
            <div style={{ padding: '45px' }}>
                <div style={{ fontWeight: '700', fontSize: '24px', lineHeight: '33px', color: '#343435', paddingBottom: '30px' }}>Sign up</div>
                <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '34px' }} />
                <TextField fullWidth id="email" label="Email ID" variant="outlined" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '34px' }} value={email} onChange={event => setEmail(event.target.value)} error={!isEmailValid} helperText={!isEmailValid && "Incorrect Email"} type="email" />
                <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', textAlign: 'left' }}>Choose your role</p>

                <Box sx={{ display: 'flex' }} style={{ marginBottom: '32px' }}>
                    <FormControlLabel
                        control={
                            <Checkbox name="Player" />
                        }
                        label="Player" />
                    <FormControlLabel
                        control={
                            <Checkbox name="Tournament Admin" />
                        }
                        label="Tournament Admin" />

                </Box>

                <TextField fullWidth label="Enter Password" variant="outlined"
                    style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '34px' }}
                    type="password" onChange={event => setPassword(event.target.value)}
                    error={!isPasswordValid} helperText={!isPasswordValid && "Suggest a Strong Password"} />

                <TextField fullWidth label="Confirm Password" variant="outlined"
                    style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435' }}
                    type="password" onChange={event => setConfirmPassword(event.target.value)}
                    error={!isPasswordsSame} helperText={!isPasswordsSame && "Password Mis-Match"} />

            </div>
            <div style={{ paddingBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" onClick={() => continueToLogin()}
                        style={{ paddingTop: '13px', paddingRight: '75px', paddingBottom: '11px', paddingLeft: '76px', marginBottom: '37px' }}>
                        Continue
                    </Button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435' }}>Already have an account?</span>
                    <Button variant="text" onClick={() => continueToLogin()}
                        style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', textTransform: 'none', padding: '0' }}>
                        Login
                    </Button>
                </div>
            </div>
        </Card>
    </>);
};
export default Signup;