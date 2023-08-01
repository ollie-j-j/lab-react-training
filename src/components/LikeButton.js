import React, { useState } from 'react';

function LikeButton() {
    const [likeCount, setLikeCount] = useState(0);
    const [buttonColor, setButtonColor] = useState('purple');
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const handleButtonClick = () => {
        setLikeCount(likeCount + 1);

        const currentColorIndex = colors.indexOf(buttonColor);
        let nextColorIndex = currentColorIndex + 1;

        if (nextColorIndex >= colors.length) {
            nextColorIndex = 0;
        }

        const nextColor = colors[nextColorIndex];
        setButtonColor(nextColor);
    };


    return (
        <div>
            <button onClick={handleButtonClick} style={{ backgroundColor: buttonColor }}>
                {likeCount} {likeCount === 1 ? 'Like' : 'Likes'}
            </button>
        </div>
    );
}

export default LikeButton;
