const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/filter-posts', async (req, res) => {
  const { tags } = req.body;
  console.log('Etiquetas recibidas:', tags);

  try {
    const response = await axios.get('https://justpackandbreathe.com/wp-json/wp/v2/posts');
    const posts = response.data;

    // Filtra los posts según las etiquetas recibidas
    const filteredPosts = posts.filter(post => {
      return tags.some(tag => 
        post.title.rendered.toLowerCase().includes(tag.toLowerCase()) || 
        post.content.rendered.toLowerCase().includes(tag.toLowerCase())
      );
    });

    console.log('Posts filtrados:', filteredPosts);
    res.json(filteredPosts);
  } catch (error) {
    console.error('Error fetching filtered posts:', error);
    res.status(500).json({ message: 'Error fetching filtered posts', error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
