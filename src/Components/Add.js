import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import AddIcon from "@mui/icons-material/Add"
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"
import ImageIcon from "@mui/icons-material/Image"
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack"
import PersonIcon from "@mui/icons-material/Person"
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';

import React, { useState } from 'react'

const Add = () => {
    const [open, setOpen] = useState(false)
    const StyledModal = styled(Modal)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
        marginLeft: "20px"
    })
    return (
        <>
            <Tooltip onClick={(e) => setOpen(true)}
                title="Add"
                sx={{ position: "fixed", bottom: 20, left: { md: 30, xs: 150 } }}
            >
                <Fab color="primary">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
            >
                <Box
                    width={400}
                    height={280}
                    bgcolor = {"background.default"}
                    color = {"text.primary"}
                    borderRadius={5}
                >
                    <Typography variant='h6' textAlign="center" mt = "2">Create Post</Typography>

                    <UserBox>
                        <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" sx={{ width: 30, height: 30 }} />

                        <Typography fontWeight={500} variant="span">John Doe</Typography>
                    </UserBox>

                    <TextField sx={{ width: "80%", mx: 5 }}
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                    />

                    <Stack direction={"row"} gap = {1} ml = {5} my = {2}>
                        <EmojiEmotionsIcon color = "primary"/>
                        <ImageIcon color= "secondary"/>
                        <VideoCameraBackIcon color = "success"/>
                        <PersonIcon color = "error"/>
                    </Stack>

                    <ButtonGroup variant = "contained"  sx = {{width: "80%", bgcolor : "red", mx : 5}}>
                        <Button sx = {{width : "70%"}}>Post</Button>
                        <Button sx = {{width : "30%"}}><MarkAsUnreadIcon/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add