import {useState} from 'react';
import './styles.css'

const ColorGenerator = () => {
  const [backGroundColor, setBackgroundColor] = useState('#fff')
  
  const handleHexValue = () => {
    const hexSingleValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const randomValue = () =>  Math.round(Math.random() * 15);
    const hexValue = [];
    for (let i = 0; i < 6; i++) {
      const value = randomValue();
      hexValue.push(hexSingleValues[value]);
    }
    const color = '#' + hexValue.join('');
    setBackgroundColor(color);
  }

  const handleRgbRgbaValue = (type = 'rgb') => {
    const rgbValue = [];
    let color = '';
    for (let i = 0; i < 3; i++) {
      rgbValue.push(Math.round(Math.random() * 255))
    }
    if(type === 'rgba') {
      const opacity = (Math.random()).toFixed(2);
      color = `rgba(${rgbValue.toString()}, ${opacity})`
    } else {
      color = `rgb(${rgbValue.toString()})`
    }
    setBackgroundColor(color);
  }
  
  console.log(backGroundColor);
  return (
    <div className="background" style={{backgroundColor: backGroundColor}}>
      <button className="button" onClick={handleHexValue}>HEX</button>
      <button className="button" onClick={handleRgbRgbaValue}>RGB</button>
      <button className='button' onClick={() => handleRgbRgbaValue('rgba')}>RGBA</button>
      <div className="color">Color: {backGroundColor}</div>
    </div>
  )
}

export default ColorGenerator