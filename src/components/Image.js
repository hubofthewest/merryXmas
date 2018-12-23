import React from 'react';
const cloudinary = 'https://res.cloudinary.com/dzbrcknff/image/upload/v1545544970/erinXmas/';
function Image (props){
    

        return (
            <div>
                <img src={cloudinary + props.id + ".jpeg"} className="picture"/>
            </div>
        );
    
}

export default Image;