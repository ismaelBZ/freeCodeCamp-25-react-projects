import { useState } from 'react';
import data from './data';
import './styles.css';

// Single Selection
// Multiple Selection
const Accodion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelection, setMultipleSelection] = useState(
    Array(data.length),
  );

  const handleSingleSelection = (id) => {
    selected === id ? setSelected(null) : setSelected(id);
  };

  const handleEnableMultiSelection = () => { 
    if (enableMultiSelection) {
      setEnableMultiSelection(false); 
      setMultipleSelection(Array(data.length));
    } else {
      setEnableMultiSelection(true);
    }
  }

  const handleMultiSelection = (index, id) => {
    const multi = [...multipleSelection];
    if (multi.includes(id)) {
      multi[index] = null;
    } else if (selected === id) {
      setSelected(null);
    } else {
      multi[index] = id;
    } 
    setMultipleSelection(multi);
  }

  console.log(multipleSelection);

  return (
    <div className="wrapper">
      <button
        className="button"
        onClick={() => handleEnableMultiSelection()}
      >
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((topic, index) => {
            return (
              <div key={topic.id} className="item">
                <div
                  className="title"
                  onClick={() => enableMultiSelection ? 
                    handleMultiSelection(index, topic.id) 
                    : handleSingleSelection(topic.id)}
                >
                  <h2>{topic.question}</h2>
                  <span>+</span>
                </div>
                {selected === topic.id || multipleSelection.includes(topic.id) ? (
                  <div className="content">{topic.answer}</div>
                ) : null}
              </div>
            );
          })
        ) : (
          <div>Data not found!</div>
        )}
      </div>
    </div>
  );
};

export default Accodion;
