import React from 'react';
import '../styles/FoxCard.css'

const FoxCard = ({selectedFox, favFox}) => {
    const toBeProgramed = (e) => {
        e.preventDefault();
        alert('To be implemented');
    }
    const handelerFavFox = (e, fox) => {
        e.preventDefault();
        const discurso = fox.is_selected === false ? 'Añadido a wishlist' : 'Sacado de wishlist';
        favFox(fox);
        alert(discurso);
    }

    return (
        <div className="card mb-3 cardy">
            <img className="card-img-top adjusted" src={selectedFox.img_href} alt={selectedFox.name}/>
            <div className="card-body adjusted2">
                <h3 className="card-title"><b>{selectedFox.name}</b></h3>
                <p className="card-text">{selectedFox.description}</p>
                <br/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Raza:</b>
                    <span>{selectedFox.race}</span></li>
                    <li className="list-group-item"><b>Naturaleza:</b>
                    <span>{selectedFox.nature}</span></li>
                    <li className="list-group-item"><b>Genero:</b>
                    <span>{selectedFox.gender}</span></li>
                    <li className="list-group-item"><b>Edad:</b>
                    <span>{selectedFox.age}</span></li>
                    <li className="list-group-item"><b>Color de pelaje:</b>
                    <span>{selectedFox.furr}</span></li>
                    <li className="list-group-item"><b>Color de ojos:</b>
                    <span>{selectedFox.eyes}</span></li>
                </ul>
                <br/>
                <br/>
                <footer>
                    <a href="/" className="card-link" onClick={e => handelerFavFox(e, selectedFox)}>Añadir a favoritos</a>
                    <a href="/" className="card-link" onClick={e => toBeProgramed(e)}>Adoptar</a>
                </footer>                       
            </div>
        </div>
    );
};

export default FoxCard;