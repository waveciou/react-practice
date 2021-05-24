import React, { useState, useEffect } from 'react';
import FoodcheckedItem from './foodcheckedTopic';

const App = () => {
  const [ topics, setTopics ] = useState({
    q1: ['豆漿', '燒餅', '地瓜'],
    q2: ['咖啡', '咖哩飯', '可樂餅']
  });

  const [ answers, setAnswers ] = useState({});

  useEffect(() => {
    const result = {};
    Object.keys(topics).forEach(key => result[key] = []);
    setAnswers(result);
  }, []);

  const setAnswerHandler = (id, name, value) => {
    const _answers = Object.assign({}, answers);
    const index = _answers[id].findIndex(item => item === name);

    if (value === true) {
      if (index < 0) {
        _answers[id].push(name);
      }
    } else {
      _answers[id].splice(index, 1);
    }

    setAnswers(_answers);
  };

  return (
    <div className="content">
      <div>TOPIC:</div>
      {
        Object.keys(topics).map(key => {
          return (
            <FoodcheckedItem
              key={ key }
              id={ key }
              topicItems={ topics[key] }
              answerItems={ answers[key] }
              setAnswerHandler={ setAnswerHandler }
            />
          );
        })
      }
      <div>ANSWER:</div>
      {
        Object.keys(answers).map(key => {
          return (
            <div key={ key } >{ key }: { answers[key].join(',') }</div>
          );
        })
      }
    </div>
  );
};

export default App;