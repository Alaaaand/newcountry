import React, { useEffect, useState } from "react";
import { Card } from "../card/card";

export const Cards = () => {
  let [fetchData, setFetchData] = useState([]);
  const [input, setInput] = useState("");

  const request = async () => {
    const resposnse = await fetch("https://restcountries.com/v3.1/all");
    const countries = await resposnse.json();
    setFetchData(countries);
  };
  useEffect(() => {
    request();
  }, []);
  console.log(fetchData);

  return (
    <div className="main">
      <input type="text"  onChange={(letter) => setInput(letter.target.value)} placeholder="country"></input>
      <h1>Rick and Morty series</h1>
      <ul className="cards">
        {fetchData
          .filter((country) =>
            country.name.common.toLowerCase().includes(input)
          )
          .map((countryy) => {
            console.log(countryy);
            return (
              <>
                <Card
                  name={countryy.name.common}
                  img={countryy.flags.svg}
                  region={countryy.region}
                  languages={countryy.languages}
                />
              </>
            );
          })}
      </ul>
      
    </div>
  );
};

//   const alive = result.filter((live) => live.status === "Alive");
//   console.log(result);
//   return (
//     <div className="main">
//       <h1>Rick and Morty series</h1>
//       <ul className="cards">
//         {alive.map((card) => {
//           return (
//             <Card
//               name={card.name}
//               gender={card.gender}
//               img={card.image}
//               key={card.id}
//               length={card.episode.length}
//               species={card.species}
//             />
//           );
//         })}
//       </ul>
//       <button>show more</button>
//     </div>
//   );
// };
