import React from 'react';

function SingleColorPicker({ color, value, onChange }) {
    const handleInputChange = (e) => {
        onChange(color, Number(e.target.value));
    };

    return (
        <div>
            <label>{color.toUpperCase()}:</label>
            <input 
                type="number" 
                min="0" 
                max="255" 
                value={value} 
                onChange={handleInputChange} 
            />
        </div>
    );
}

export default SingleColorPicker;