import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import MoreVertIcon from "@mui/icons-material/MoreVert"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

import React from 'react'

const Post = () => {
    return (
        <div>
            <Card sx = {{m: 5}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }}>J</Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="John Doe"
                    subheader="May 20, 2018"
                />

                <CardMedia
                    component="img"
                    height="294"
                    image="https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        A landscape is part of Earth's surface that can be viewed at one time from one place. It consists of the geographic features that mark, or are characteristic of, a particular area. The term comes from the Dutch word landschap, the name given to paintings of the countryside.
                    </Typography>
                </CardContent>
                
                <CardActions disableSpacing>
                    <IconButton>
                        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} color="error" />
                    </IconButton>

                    <IconButton>
                        <ShareIcon />
                    </IconButton>
                </CardActions>

            </Card>
        </div>
    )
}

export default Post