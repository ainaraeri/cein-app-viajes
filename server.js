const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta 'build'
app.use(express.static(path.join(__dirname, 'webpack/build')));

// Ruta para manejar el cuestionario y filtrar los posts
app.post('/api/filter-posts', async (req, res) => {
  console.log('Solicitud POST recibida en /api/filter-posts');
  console.log('Body:', req.body);

  const { responses } = req.body;

  // Lógica para mapear las respuestas a etiquetas y filtrar posts
  const mappings = {
    "¿Con quién te vas de viaje?": {
      "Sola": "sola",
      "2-3 amigas": "amigas",
      "Pareja": "pareja",
      "Familia": "familia"
    },
    "¿Cuántos días tienes?": {
      "2-3 días": "corto",
      "5-7 días": "semana",
      "15 días": "quincena",
      "1 mes": "largo"
    },
    "¿Qué te interesa?": {
      "Las ciudades": "ciudad",
      "Naturaleza": "naturaleza",
      "Cultura": "cultura",
      "Relax": "relax"
    }
  };

  const [companion, days, type] = responses;
  const tags = [
    mappings["¿Con quién te vas de viaje?"][companion],
    mappings["¿Cuántos días tienes?"][days],
    mappings["¿Qué te interesa?"][type]
  ];

  console.log('Tags:', tags);

  try {
    const response = await axios.get('https://justpackandbreathe.com/wp-json/wp/v2/posts', {
      params: {
        tags: tags.join(','), // Filtrar por tags
        per_page: 100
      }
    });

    const filteredPosts = response.data.filter(post => post.meta.days === parseInt(days, 10));

    res.json({ posts: filteredPosts }); // Enviar los posts filtrados como respuesta
  } catch (error) {
    console.error("Error fetching posts", error);
    res.status(500).send(error.message); // Enviar un error 500 si hay algún problema
  }
});

// Ruta para manejar todas las demás solicitudes y servir la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'webpack/build', 'index.html')); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
