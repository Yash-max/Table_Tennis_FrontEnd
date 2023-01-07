import { Button, Card, Checkbox, FormControl, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { Box } from "@mui/system";

const Signup = () => {
    return (<>
        <Card variant="outlined">
            <div style={{ padding: '45px' }}>
                <div style={{ fontWeight: '700', fontSize: '24px', lineHeight: '33px', color: '#343435', paddingBottom: '30px' }}>Sign up</div>
                <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '34px' }} />
                <TextField fullWidth id="outlined-basic" label="Email ID" variant="outlined" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '30px' }} />
                <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', textAlign: 'left' }}>Choose your role</p>

                <Box sx={{ display: 'flex' }} style={{marginBottom: '32px'}}>
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
                <TextField fullWidth id="outlined-basic" label="Enter Password" variant="outlined" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435', marginBottom: '34px' }} />
                <TextField fullWidth id="outlined-basic" label="Confirm Password" variant="outlined" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435' }} />
            </div>
            <div style={{ paddingBottom: '22px' }}>
                <div><Button variant="contained" disabled style={{ paddingTop: '13px', paddingRight: '75px', paddingBottom: '11px', paddingLeft: '76px', marginBottom: '37px' }}>Continue</Button></div>
                <div>
                    <span style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', color: '#343435' }}>Already have an account?</span>
                    <Button variant="text" style={{ fontWeight: '400', fontSize: '14px', lineHeight: '19px', textTransform: 'none'}}>Login</Button></div>
            </div>
        </Card>
    </>);
};
export default Signup;