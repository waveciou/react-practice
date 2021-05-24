import React from 'react';
import FoodcheckedCheckbox from './foodcheckedCheckbox';

const foodcheckedTopic = (props) => {
  const { id, topicItems, answerItems = [], setAnswerHandler } = props;

  return (
    <div className="topic">
      {
        Object.keys(topicItems).map(key => {
          return (
            <FoodcheckedCheckbox
              key={ key }
              topicId={ id }
              name={ topicItems[key] }
              isChecked={ answerItems.indexOf(topicItems[key]) < 0 ? false : true }
              setAnswerHandler={ setAnswerHandler }
            />
          );
        })
      }
    </div>
  );
};

export default foodcheckedTopic;
