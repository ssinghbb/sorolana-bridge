import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import { useSorobanReact } from "@soroban-react/core";
// import freighterApi from "@stellar/freighter-api";
import frieghter from '@stellar/freighter-api'
// import { freighter } from '@soroban-react/freighter';

const pages = ['Bridge', 'History', 'Claim'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function BridgeAssetNavbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    // const { connect, disconnect, address, activeWallet, autoconnect } = useSorobanReact();



    // connect wallet

    // const handleWalletConnect = async () => {
    //     console.log("activeWallet?.isConnected", frieghter.isConnected())
    //     try {
    //         let _networkDetails = await activeWallet?.getNetworkDetails();
    //         if (_networkDetails?.network) {
    //             await connect();
    //             let wallet = await activeWallet?.getPublicKey()
    //             console.log("🚀 ~ handleWalletConnect ~ wallet", wallet)

    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ background: 'black', paddingX: 2, borderBottom: 1, borderBottomColor: 'white' }}>
            <Toolbar disableGutters>
                <Box
                    component='img'
                    alt="soroban"
                    src='../logo.png'
                />

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >

                        <MenuItem onClick={handleCloseNavMenu}>
                            Bridge
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            History
                        </MenuItem>
                        <MenuItem>
                            <Button href='BridgeAsset/Claim'>
                                Claim
                            </Button>

                        </MenuItem>

                    </Menu>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mt: 1 }}>
                    <Button
                        href='Bridge'
                        onClick={handleCloseNavMenu}
                        sx={{ color: 'white', display: 'block' }}
                    >
                        Bridge
                    </Button>

                    <Button
                        href='TransactioHistory'
                        onClick={handleCloseNavMenu}
                        sx={{ color: 'white', display: 'block' }}
                    >
                        History
                    </Button>
                    <Button
                        href='Claim'
                        onClick={handleCloseNavMenu}
                        sx={{ color: 'white', display: 'block' }}
                    >
                        Claim
                    </Button>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Button variant='outlined'
                        sx={{ borderRadius: 2, backgroundColor: 'transparent', border: 1, borderColor: 'white', color: 'white' }}
                    // onClick={handleWalletConnect}
                    >Connect</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default BridgeAssetNavbar;