import profiles from '../data/berlin.json';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

function FaceBook() {
    const [selectedCountry, setSelectedCountry] = useState("");

    const countries = profiles.reduce((unique, profile) => {
        if (!unique.includes(profile.country)) {
            unique.push(profile.country);
        }
        return unique;
    }, []);


    return (
        <div>
            {countries.map(country => (
                <button key={country} onClick={() => setSelectedCountry(country)}>
                    {country}
                </button>
            ))}

            {profiles.map(profile => (
                <div
                    key={uuidv4()}
                    className="profile-card"
                    style={{ backgroundColor: profile.country === selectedCountry ? 'blue' : 'transparent' }}>

                    <img src={profile.img} alt={profile.firstName} className="profile-img" />
                    <div>
                        <p>First name: {profile.firstName}</p>
                        <p>Last name: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default FaceBook;