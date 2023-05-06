import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}>

            <Box position="fixed" width = {350}>
                <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={7}>
                    <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                    <Avatar src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" />
                    <Avatar src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" />
                    <Avatar />
                    <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                    <Avatar src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" />
                    <Avatar src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" />
                    <Avatar />
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </AvatarGroup>

                <Typography variant='h6' fontWeight={100} my={2}>Latest Photos</Typography>
                <ImageList cols={4} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4QUZYSPtXYTwEBJbGTVB8AYV58LAbmpbIbw&usqp=CAU" />
                    </ImageListItem>

                    <ImageListItem>
                        <img src="https://pyt-blogs.imgix.net/2020/06/nils-nedel-ONpGBpns3cs-unsplash-scaled.jpg?auto=format&ixlib=php-3.3.0" />
                    </ImageListItem>

                    <ImageListItem>
                        <img src="http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg" />
                    </ImageListItem>

                    <ImageListItem>
                        <img src="https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=2000" />
                    </ImageListItem>
                </ImageList>

                <Typography variant='h6' fontWeight={100} my={1}>Chats</Typography>

                <List sx={{  maxWidth: 360 }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </ListItemAvatar>

                        <ListItemText
                            primary="Bunch this weekend ?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — Lorem Ipsum is simply dummy text of the printing and typesetting industry..."}
                                </React.Fragment>
                            } />
                    </ListItem>

                    <Divider variant="inset" my={1} />

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&usqp=CAU" />
                        </ListItemAvatar>

                        <ListItemText
                            primary="Bunch this weekend ?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — Lorem Ipsum is simply dummy text of the printing and typesetting industry..."}
                                </React.Fragment>
                            } />
                    </ListItem>

                    <Divider variant="inset" my={1} />

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" />
                        </ListItemAvatar>

                        <ListItemText
                            primary="Bunch this weekend ?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — Lorem Ipsum is simply dummy text of the printing and typesetting industry..."}
                                </React.Fragment>
                            } />
                    </ListItem>


                </List>
            </Box>
        </Box>
    )
}

export default Rightbar