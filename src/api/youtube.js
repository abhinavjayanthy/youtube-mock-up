import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyB8Zp5sOM_8m1Nf72us9IeHsXKoMeAveTM"
  }
});
