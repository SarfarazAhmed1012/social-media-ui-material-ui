import * as React from "react";

import { Box } from "@mui/system";
import Posts from "./Pots";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Posts
        title="Sarfaraz"
        date="September 14, 2022"
        image="https://img.taste.com.au/pUWqjn9Q/taste/2016/11/chargrilled-fish-with-green-chilli-coriander-and-coconut-relish-70446-1.jpeg"
      />
      <Posts
        title="Ahmed"
        date="September 13, 2022"
        image="https://media.istockphoto.com/photos/covid19-new-normal-social-distance-work-and-study-at-home-new-project-picture-id1331251417?b=1&k=20&m=1331251417&s=170667a&w=0&h=K8m_-wRGPXS5YuE6k-US7qTVTP23Vv6bqD_5cTFFYsk="
      />
      <Posts
        title="Salaam"
        date="September 28, 2022"
        image="https://media.istockphoto.com/photos/lady-with-kayak-picture-id516449022?k=20&m=516449022&s=612x612&w=0&h=6TCzYP9ohT2j3g602N4exOdUbbuzYqDfhqsTgErLM_M="
      />
      <Posts
        title="Huzaim"
        date="September 30, 2022"
        image="http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg"
      />
    </Box>
  );
};

export default Feed;
