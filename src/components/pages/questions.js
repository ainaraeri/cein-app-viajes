import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../style/questions.scss';


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
  },
];

const mappings = {
  "¿Con quién te vas de viaje?": {
    "Sola": "Sola",
    "2-3 amigas": "Amigas",
    "Pareja": "Pareja",
    "Familia": "Familia"
  },
  "¿Cuántos días tienes?": {
    "2-3 días": "Corto",
    "5-7 días": "Semana",
    "15 días": "Quincena",
    "1 mes": "Largo"
  },
  "¿Qué te interesa?": {
    "Las ciudades": "Urbano",
    "Naturaleza": "Naturaleza",
    "Cultura": "Cultura",
    "Relax": "Relax"
  },
};

export default function Questions() {
  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const history = useHistory();

  const handleOptionChange = (questionIndex, option) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = option;
    setResponses(newResponses);
  };

  const handleSubmit = () => {
    const tags = responses.map((response, index) => {
      const question = questions[index].questionText;
      return mappings[question][response];
    }).filter(tag => tag !== undefined);

    console.log('Etiquetas:', tags); // Imprime las etiquetas mapeadas en la consola

    history.push('/destinations', { tags });
  };

  return (
    <div className="questions-container">
      <div
        className="image-column"
        style={{
          backgroundImage: `url('/assets/images/marsella.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="form-column">
        <h1>Responde a estas preguntas y descubre tu próximo destino</h1>
        <div className="questions">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="question-block">
              <h3>{question.questionText}</h3>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="option">
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
        </div>
        <button className="submit-button" onClick={handleSubmit}>Enviar respuestas</button>
      </div>
    </div>
  );
};