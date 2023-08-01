import React, { useState } from 'react';

function Carousel(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % props.images.length);
    };

    const handlePrevClick = () => {
        setCurrentImageIndex((currentImageIndex - 1 + props.images.length) % props.images.length);
    };

    return (
        <div>
            <button onClick={handlePrevClick}>Left</button>
            <img src={props.images[currentImageIndex]} alt="" />
            <button onClick={handleNextClick}>Right</button>
        </div>
    );
}

export default Carousel;
