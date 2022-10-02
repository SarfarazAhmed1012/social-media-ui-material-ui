import React, { useEffect, useState, useRef } from "react";
import ImageListItem from "@mui/material/ImageListItem";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Box } from "@mui/system";
import { ImageList, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import axios from "axios";
const RightBar = () => {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   const url = "https://api.pexels.com/v1/search?query=people";
  //   const access_token =
  //     "563492ad6f91700001000001e6ff0cc2bfd548b69e54ce0fcdda9ff9";
  //   axios
  //     .get(url, {
  //       headers: {
  //         Authorization: `${access_token}`,
  //       },
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setImages(data.data.photos);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/albums/1/photos?limit=5")
  //     .then((res) => {
  //       console.log(res.data);
  //       setImages(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Box position="fixed" width={350}>
        <Typography variant="h6" fontWeight={400} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={9}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />

          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/9.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/14.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/11.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={400} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList
          // sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={3}
          rowHeight={121}
          gap={2}
        >
          {/* {images.map((image) => (
            <ImageListItem key={image.alt}>
              <img src={image.url} alt="image" />
              <Typography>{images.title}</Typography>
            </ImageListItem>
          ))} */}
          <ImageListItem>
            <img
              src="https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/giraffe-riding-an-elephant-on-field-friendship-and-cooperation-picture-id1349363968?b=1&k=20&m=1349363968&s=170667a&w=0&h=qa1ppsGZuM81Un7tvmClIlESWyUmm0kYkbgy09eLvuY="
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/9EE2/production/_120447604_5d0b76dc-2324-4b91-9584-d61fc95d87c2.jpg"
              alt=""
            />
          </ImageListItem>
          {/* <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
              alt=""
            />
          </ImageListItem> */}
        </ImageList>
        <Typography variant="h6" fontWeight={400} mt={2}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/5.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/6.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
