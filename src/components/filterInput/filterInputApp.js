import React, { useState } from 'react';

const App = () => {
  const expression = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g;

  const [contentTextArray, setContentTextArray] = useState([]);

  const getInputValueHandler = (e) => {
    const contentText = e.target.value;

    let regex = new RegExp(expression);
    let match = '';
    let excerpts = [];
    let startIndex = 0;

    while ((match = regex.exec(contentText)) !== null) {
      excerpts.push({
        text: contentText.substr(startIndex, (match.index - startIndex)),
        type: 'text'
      });

      const cleanedLink = contentText.substr(match.index, (match[0].length));

      excerpts.push({
        text: cleanedLink,
        type: 'link'
      });

      startIndex = match.index + (match[0].length);
    }

    if (startIndex < contentText.length) {
      excerpts.push({
        text: contentText.substr(startIndex),
        type: 'text'
      });
    }

    setContentTextArray(excerpts);
  };

  return (
    <div>
      <input onChange={getInputValueHandler} />
      {
        contentTextArray.map((excerpt, index) => {
          return excerpt.type === 'link' ?
            <span
              key={`text_excerpt_${index}`}
              dangerouslySetInnerHTML={{ __html: `<a href="#">${excerpt.text}</a>` }}
            /> :
            <span key={`text_excerpt_${index}`}>{ excerpt.text }</span>;
        })
      }
    </div>
  );
};

export default App;