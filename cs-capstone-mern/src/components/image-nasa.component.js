// tutorial help
// https://www.youtube.com/watch?v=H1nENYv-r_w&ab_channel=Kapehe_ok

import React from 'react';
import { useEffect, useState} from 'react';


export default function NasaImage() {
    // Create function that uses photo
    const [photoData, setPhotoData] = useState(null);

    // Component
    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=hLPkv2nMXawjFpYCtBGDZ8mdXY9vgfQaaZUbyS1l'
            );
            // Pull data from response json
            const data = await res.json();
            // Set photoData to pulled data
            setPhotoData(data);
    }
 }, 
 // Only run once, return empty array
 []);
// return empty div if null response from api
if(!photoData) return <div />;

    // Render/Return JSX for Nasa API image and description
    return (
        <div>
            <h3>Astronomy Photo to Help You Sleep...</h3>
            <div className="form-group"> 
                <img src={photoData.url} alt={photoData.title} />
                <div>
                    <h1>{photoData.title}</h1>
                    <p>{photoData.date}</p>
                    <p>{photoData.explanation}</p>
                </div>
            </div>
        </div>
    );
}