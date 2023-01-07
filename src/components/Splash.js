import img from './../assets/welcome-banner.png'
import { Button, Card } from '@mui/material';

const Splash = ({ callback }) => {

    const handleCallback = (state) => callback(state)

    return (<>
        <Card variant="outlined">
            <div style={{ position: 'relative' }}>
                <img src={img} alt="img" />
                <p style={{ fontWeight: '600', fontSize: '30px', lineHeight: '36px', position: 'absolute', bottom: '0', left: '0', right: '0', color: '#fff' }}>Table Tennis Pros</p>
            </div>
            <div style={{ paddingTop: '59px', paddingBottom: '22px' }}>
                <div>
                    <Button variant="contained"
                        style={{ paddingTop: '13px', paddingRight: '75px', paddingBottom: '11px', paddingLeft: '76px' }}
                        onClick={()=>handleCallback('login')}>
                        Login
                    </Button>
                </div>
                <div>
                    <Button variant="text"
                        style={{ paddingTop: '13px', paddingRight: '75px', paddingBottom: '11px', paddingLeft: '76px' }}
                        onClick={()=>handleCallback('signup')}>
                        Sign up
                    </Button>
                </div>
            </div>
        </Card>
    </>);
}
export default Splash;