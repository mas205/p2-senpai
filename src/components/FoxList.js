import React from 'react';

const FoxList = ({foxes, selectFox, updateSelectedPage}) => {
    let fA = true
    const firstActive = () => {
        if(fA){
            fA = false
            return 'carousel-item active'
        }
        return 'carousel-item'
    }
    const imgStyle = {
        cursor: "pointer",
        width: "800px",
        height: "450px",
        objectFit: "none",
        backgroundPosition: "center bottom",
        background: "gray"
    }
    const bannerStyle = {
        position: "absolute",
        left: "0px",
        top: "0px",
        backgroundColor: "rgba(46, 45, 45, 0.40)",
        color: "white",
        padding: "4px",
        fontSize: "17px",
        lineHeight: "18px",
        width: "inherit"
    }

    const update = (event, fox) => {
        event.preventDefault();
        selectFox(fox);
        updateSelectedPage('card');
    }

    return(
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                {foxes.map(fox => {
                    return(
                        <div className={firstActive()}>
                            <div style={bannerStyle}><h5><b>{fox.name}</b></h5><p>{fox.description}</p></div>
                            <img class="d-block w-100" src={fox.img_href} alt={fox.name} style={imgStyle}
                                onClick={e => update(e, fox)}
                            />
                        </div>
                    )
                })}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default FoxList;