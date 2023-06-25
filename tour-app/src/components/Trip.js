import "./TripStyles.css";
import React from 'react';
import TripData from "./TripData";
import image05 from '../assets/05.jpg';
import image06 from '../assets/06.jpg';
import image07 from '../assets/07.jpg';

function Trip() {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>

        <div className="tripcard">
            <TripData 
                image = {image07}
                heading = "Trip in Indonesia"
                text = "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Bornea and New Guinea."
            />

            <TripData 
                image = {image05}
                heading = "Trip in Malaysia"
                text = "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Bornea. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
            />

            <TripData 
                image = {image06}
                heading = "Trip in France"
                text = "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Effiel Tower."
            />
        </div>
    </div>
  );
}

export default Trip;