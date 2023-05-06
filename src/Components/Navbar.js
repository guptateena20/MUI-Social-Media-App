import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%"
})

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        display: "flex"
    }
}))


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography
                    variant='h6'
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    FLAMINGO
                </Typography>
                <Diversity3Icon
                    sx={{ display: { xs: "block", sm: "none" } }} />

                <Search><InputBase placeholder='Search here...' /></Search>

                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>

                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>

                    <Avatar sx={{ width: 30, height: 30 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7bDnZeSv1hxKr2yIdxG_yPb5uGWHdOtyZg&usqp=CAU"
                        onClick={() => setOpen(!open)} />
                </Icons>

                <UserBox>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7bDnZeSv1hxKr2yIdxG_yPb5uGWHdOtyZg&usqp=CAU"
                        onClick={() => setOpen(!open)} />

                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StyledToolbar>


            <Menu
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}

            >
                <MenuItem onClick={(e) => setOpen(false)}>Profile</MenuItem>
                <MenuItem onClick={(e) => setOpen(false)}>My account</MenuItem>
                <MenuItem onClick={(e) => setOpen(false)}>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar