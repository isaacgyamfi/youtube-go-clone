import { API_KEY, BASE_URL } from 'react-native-dotenv';
import axios from 'axios';

export default {
  loadVideos: async () => {
    const URL = `${BASE_URL}/videos?part=statistics&part=snippet&part=contentDetails&chart=mostPopular&maxResults=5&key=${API_KEY}`;

    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }

    // const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${API_KEY}`;
    // axios
    //   .get(URL)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  },
};
