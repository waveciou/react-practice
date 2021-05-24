import React from 'react';

const foodcheckedCheckbox = (props) => {
  const { topicId, name, isChecked, setAnswerHandler } = props;

  return (
    <div className="fieldset">
      <input
        type="checkbox"
        onChange={
          (e) => {
            setAnswerHandler(topicId, name, e.target.checked);
          }
        }
        checked={ isChecked }
      />
      <label>{ name }（勾選狀態：{ isChecked.toString() }）</label>
    </div>
  );
};

export default foodcheckedCheckbox;