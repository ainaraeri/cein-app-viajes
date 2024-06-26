const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/filter-posts', async (req, res) => {
  const { responses } = req.body;

  try {
    // Mapear respuestas a etiquetas
    const tags = responses.map(response => {
      // Buscar la etiqueta correspondiente en el mapeo
      for (const question in mappings) {
        if (mappings[question][response]) {
          return mappings[question][response];
        }
      }
      return null; // Manejar casos donde la respuesta no se mapea a ninguna etiqueta
    }).filter(tag => tag !== null); // Filtrar etiquetas nulas, si las hay


    console.log('Tags:', tags);

    // Lógica para filtrar posts basada en las etiquetas
    const response = await axios.get('https://justpackandbreathe.com/wp-json/wp/v2/posts');
    const posts = response.data;

    // Filtra los posts según las etiquetas
    const filteredPosts = posts.filter(post => {
      // Lógica de filtrado, comprobando si las etiquetas de los posts coinciden con las etiquetas dadas
      return tags.some(tag => post.title.rendered.includes(tag) || post.content.rendered.includes(tag));
    });

    res.json(filteredPosts);
    
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
