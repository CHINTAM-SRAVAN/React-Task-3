import React, { Component } from 'react';
import './style.css'
class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  selectColor = (color) => {
    this.setState({ selectedColor: color, isOpen: false });
  };

  render() {
    const { colors } = this.props;
    const { isOpen, selectedColor } = this.state;

    return (
      <div className="color-picker" style={{ backgroundColor: selectedColor,padding:"200px" }}>  
        <button onClick={this.toggleColorList}>Pick a color</button>
        {isOpen && (
          <ul className="color-list">
            {colors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              ></li>
            ))}
          </ul>
        )}
        {selectedColor && (
          <div className="selected-color">
            
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;
