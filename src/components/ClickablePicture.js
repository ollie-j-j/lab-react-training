import React, { useState } from 'react';

function ClickablePicture(props) {
    const [picture, setPicture] = useState(props.img);

    const handlePictureClick = () => {
        setPicture(picture === props.img ? props.imgClicked : props.img);
    };

    return (
        <div>
            <img src={picture} alt="" onClick={handlePictureClick} />
        </div>
    );
}

export default ClickablePicture;
