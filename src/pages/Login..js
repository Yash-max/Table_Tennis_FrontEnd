import { Button, Card, Slide, Snackbar, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const navigation = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const [errorMessage, setErrorMessage] = useState('Something went wrong');

    useEffect(() => {
        if (location != null && location.state != null && location.state.email != null) {
            console.log("Got From To Signup")
            setEmail(location.state.email)
        }
    }, [])

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    }

    const makeRequest = async (url) => {

        let resp;

        await fetch('http://localhost:8080' + url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    'data': {
                        'email': email,
                        'password': password
                    }
                }
            )
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                resp = data;
            })
            .catch((err) => {
                console.log('Error : ', err);
                throw new Error('Something went wrong');
            })

        return resp;
    }

    function continueToSignup() {

        let isEmailValid = false;
        let isPasswordValid = false;

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

        if (!isEmailValid || !isPasswordValid) return;

        makeRequest('/login').then((resp) => {
            console.log(resp);
            if (resp.success) {
                navigation("/signup", { state: { "email": email, "password": password } });
            } else {
                setErrorMessage(resp.message);
                handleClick(TransitionRight);
            }
        }).catch((err) => {
            setErrorMessage('Something went wrong');
            handleClick(TransitionRight);
        });
    }

    function TransitionRight(props) {
        return <Slide {...props} direction="right" />;
    }

    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(undefined);

    const handleClick = (Transition) => {
        setTransition(() => Transition);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<>
        <Card variant="outlined">
            <div style={{ padding: '45px' }}>
                <div style={{ fontWeight: '700', fontSize: '24px', lineHeight: '33px', color: '#343435', paddingBottom: '145px' }}>Login</div>

                <TextField fullWidth id="email" label="Email ID" variant="outlined"
                    style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '34px' }}
                    value={email} onChange={event => setEmail(event.target.value)}
                    error={!isEmailValid} helperText={!isEmailValid && "Incorrect Email"} type="email" />

                <TextField fullWidth id="password" label="Enter Password" variant="outlined"
                    style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '7px' }}
                    value={password} onChange={event => setPassword(event.target.value)}
                    error={!isPasswordValid} helperText={!isPasswordValid && "Incorrect Password"} type="password" />

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
        <Snackbar
            open={open}
            onClose={handleClose}
            TransitionComponent={transition}
            message={errorMessage}
            key={transition ? transition.name : ''}
            autoHideDuration={5000}
        />
    </>);
};
export default Login;