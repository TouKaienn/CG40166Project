import { Box } from '@mui/system';
import './Banner.css';
import logo from './Logo.png';
function Banner(){
    return(
        <Box className="Banner" component="section" sx={{
            width: '110%',
            height: 30,
            borderRadius: 0,
            bgcolor: '#FFFFFF',
            borderBottom: 1,
            borderColor: '#D3D3D3',
            }}>
        <img className="Logo" src={logo} alt="logo" />
        {/* Banner */}
        </Box>
    );
}

export default Banner;