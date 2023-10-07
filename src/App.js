import React from 'react';
import ColorPicker from './ColorPicker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const colors = ['red', 'lightgreen', 'blue', 'black', 'pink','yellow','purple','skyblue','gray'];

function App() {
  return (
    <center>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
      </center>
  );
}

export default App;
