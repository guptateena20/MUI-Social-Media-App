import React, { useState } from 'react'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import Sidebar from './Components/Sidebar'
import { Box, Button, Container, createTheme, Stack, ThemeProvider } from "@mui/material"
import Navbar from './Components/Navbar'
import Add from './Components/Add'

const Pages = () => {
    const [mode, setMode] = useState("light")
    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })
    return (
        <ThemeProvider theme = {darkTheme}>
            <Box bgcolor={"background.default"} color = {"text.primary"}>
                <Navbar />
                <Stack
                    direction={"row"}
                    // spacing={2}
                    justifyContent="space-between">
                    <Sidebar setMode = {setMode} mode = {mode}/>
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    )
}

export default Pages