import React, { useState, useEffect } from 'react';

function App() {
    const [sneakers, setSneakers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/sneakers')
            .then(res => res.json())
            .then(data => setSneakers(data));
    }, []);

    return (
        <div className="App">
            {sneakers.map(sneaker => (
                <div key={sneaker._id}>
                    <img src={sneaker.image} alt={sneaker.name} width={100} />
                    <h2>{sneaker.name}</h2>
                    <p>{sneaker.brand}</p>
                    <p>${sneaker.price}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
