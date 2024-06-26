import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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

export default function Questions() {
  const [responses, setResponses] = useState([]);
  const history = useHistory();

  const handleOptionChange = (questionIndex, option) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = option;
    setResponses(newResponses);
  };

  const handleSubmit = () => {
    // Mapear respuestas a etiquetas según el mapeo definido
    const tags = responses.map((response, index) => {
      const question = questions[index].questionText;
      return mappings[question][response];
    });

    console.log('Etiquetas:', tags); // Imprime las etiquetas mapeadas en la consola

    // Aquí podrías enviar las etiquetas al backend o hacer cualquier otra lógica necesaria
    // Por ejemplo, redirigir a otra página pasando las etiquetas como parámetro en el estado
    history.push('/destinations', { tags });
  };

  return (
    <div className="questions">
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
      <button onClick={handleSubmit}>Enviar respuestas</button>
    </div>
  );
}
