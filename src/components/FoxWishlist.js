import React from 'react';
import FoxList from './FoxList';
import ErrorPage from './ErrorPage'

const FoxWishlist = ({ foxes, selectFox, updateSelectedPage }) => {

    return (
        <div className="container cardy" style={{borderRadius: "1%", padding: "3%", paddingTop:"2%", textAlign:"center"}}>
            {foxes.length === 0 ? <ErrorPage ErrorMessage="No hay zorros en wishlist" /> : <FoxList foxes={foxes} selectFox={selectFox} updateSelectedPage={updateSelectedPage}/>}
        </div>
    )
}

export default FoxWishlist;