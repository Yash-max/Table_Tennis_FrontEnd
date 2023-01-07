import img from './../assets/welcome-banner.png'
import { Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';

const Splash = () => {

    return (<>
        <Card variant="outlined">
            <div style={{ position: 'relative' }}>
                <img src={img} alt="img" />
                <div style={{ fontWeight: '600', fontSize: '30px', lineHeight: '36px', position: 'absolute', bottom: '25px', left: '0', right: '0', color: '#fff', display: 'flex', justifyContent: 'center'}}>Table Tennis Pros</div>
            </div>
            <div style={{ paddingTop: '59px', paddingBottom: '22px', }}>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <Link to={'/login'}>
                        <Button variant="contained"
                            style={{ paddingTop: '13px', paddingRight: '75px', paddingBottom: '11px', paddingLeft: '76px', marginBottom: '35px'}}>
                            Login
                        </Button>
                    </Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <Link to={'/signup'}>
                        <Button variant="text"
                            style={{ paddingTop: '13px', paddingRight: '75px', paddingBottom: '11px', paddingLeft: '76px', marginBottom: '35px'}}>
                            Sign up
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    </>);
}
export default Splash;