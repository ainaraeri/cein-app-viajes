import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const questions = [
  {
    questionText: '¿Con quién te vas de viaje?',
    options: ['Sola', '2-3 amigas', 'Pareja', 'Familia']
  },
  {
    questionText: '¿Cuántos días tienes?',
    options: ['2-3 días', '5-7 días', '15 días', '1 mes']
  },
  {
    questionText: '¿Qué te interesa?',
    options: ['Las ciudades', 'Naturaleza', 'Cultura', 'Relax']
  }
];

function Questions() {
  const [responses, setResponses] = useState(Array(questions.length).fill(''));
  const history = useHistory();

  const handleOptionChange = (questionIndex, option) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = option;
    setResponses(newResponses);
  };

  const handleSubmit = async () => {
    console.log('Respuestas:', responses); // Verifica las respuestas en la consola del navegador
    try {
      const response = await axios.post('/api/filter-posts', { responses });
      localStorage.setItem('filteredPosts', JSON.stringify(response.data.posts));
      history.push('/destinations');
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  return (
    <div>
      <h1>Responde a estas preguntas y descubre tu próximo destino</h1>

      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>{question.questionText}</h3>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type="radio"
                name={`question-${questionIndex}`}
                value={option}
                checked={responses[questionIndex] === option}
                onChange={() => handleOptionChange(questionIndex, option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Guardar respuestas</button>
    </div>
  );
}

export default Questions;
