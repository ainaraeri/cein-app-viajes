const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para manejar la solicitud POST desde el frontend
app.post('/api/filter-posts', async (req, res) => {
  let { tags } = req.body;
  tags = tags.map(tag => tag.toLowerCase().trim()); // Normalizar las etiquetas

  try {
    // Lógica para filtrar posts del blog JustPackAndBreathe.com basado en las etiquetas
    const response = await axios.get('https://justpackandbreathe.com/wp-json/wp/v2/posts');
    const posts = response.data;

    // Filtra los posts según las etiquetas recibidas
    const filteredPosts = posts.filter(post => {
      // Compara las etiquetas del post con las etiquetas recibidas
      return tags.some(tag => 
        post.tags.some(postTag => postTag.toLowerCase().includes(tag))
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
