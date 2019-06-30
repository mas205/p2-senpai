import React from 'react';
import '../styles/FoxGallery.css'

const FoxGallery = (props) => {
    const update = (event, fox) => {
        event.preventDefault();
        props.selectFox(fox);
        props.updateSelectedPage('card');
    }
    const onChangedNatu = (natu) => {
        console.log(natu)
        if(props.selectedNatures.includes(natu)){
            props.selectNatures(props.selectedNatures.filter(g => g !== natu));
            props.updateFoxes(undefined, props.selectedNatures.filter(g => g !== natu), undefined);
        } else {
            props.selectNatures([...props.selectedNatures, natu]);
            props.updateFoxes(undefined, [...props.selectedNatures, natu], undefined);
        }
    }

    const onChangeRace = (race) => {
        console.log(race)
        if(props.selectedRaces.includes(race)){
            props.selectRaces(props.selectedRaces.filter(g => g !== race));
            props.updateFoxes(undefined, undefined, props.selectedRaces.filter(g => g !== race));
        } else {
            props.selectRaces([...props.selectedRaces, race]);
            props.updateFoxes(undefined, undefined, [...props.selectedRaces, race]);
        }
    }
                
    const onChangeGender = (gender) => {
        if(props.selectedGenders.includes(gender)){
            props.selectGenders(props.selectedGenders.filter(g => g !== gender));
            // Hago esto por que updateFoxes no espera a resolver el state, entonces necesito pasarle como seria el state, se aplica a todos los filtros
            props.updateFoxes(props.selectedGenders.filter(g => g !== gender), undefined, undefined);
        } else {
            props.selectGenders([...props.selectedGenders, gender]);
            props.updateFoxes([...props.selectedGenders, gender], undefined, undefined);
        }
        
    }
    return (
        <React.Fragment>
            <div className="aside-navbar main">
                <div className="card">
                    <article className="card-group-item">
                        <header className="card-header">
                        <h6 className="title">Especie </h6>
                        </header>
                        <div className="filter-content">
                        <div className="card-body">
                            {props.raceList.map(race => {
                                return(
                                    <div className="custom-control custom-checkbox" key={race}>
                                        <input type="checkbox" className="custom-control-input" id={race} onChange={e => onChangeRace(race)}/>
                                        <label className="custom-control-label" htmlFor={race}>{race}</label>
                                    </div>
                                )
                            })}
                        </div> 
                        </div>
                    </article> 
                    <article className="card-group-item">
                        <header className="card-header">
                        <h6 className="title">Sexo </h6>
                        </header>
                        <div className="filter-content">
                        <div className="card-body">
                            {props.genderList.map(gender => {
                                return(
                                    <div className="custom-control custom-checkbox" key={gender}>
                                        <input type="checkbox" className="custom-control-input" id={gender} onChange={e => onChangeGender(gender)}/>
                                        <label className="custom-control-label" htmlFor={gender}>{gender}</label>
                                    </div>
                                )
                            })}
                        </div> 
                        </div>
                    </article> 
                    <article className="card-group-item">
                        <header className="card-header">
                        <h6 className="title">Naturaleza </h6>
                        </header>
                        <div className="filter-content">
                        <div className="card-body">
                            {props.natureList.map(natu => {
                                return(
                                    <div className="custom-control custom-checkbox" key={natu}>
                                        <input type="checkbox" className="custom-control-input" id={natu} onChange={e => onChangedNatu(natu)}/>
                                        <label className="custom-control-label" htmlFor={natu}>{natu}</label>
                                    </div>
                                )
                            })}
                        </div> 
                        </div>
                    </article> 
                    </div>
                </div>
                <div className="main-content">
                <div className="row no-margin">
                    {props.foxes.map((fox) => {
                        return(
                            <div className="col-sm-4 heighted" key={fox.id}>
                                <div className="foxInfo show">
                                    <h5><b>{fox.name}</b></h5>
                                    <p>{fox.description}</p>
                                </div>
                                <div className="foxAdopt show">
                                    <a onClick={e => update(e, fox)} className="btn btn-secondary float-right" href="/" role="button">Ver mas</a>
                                </div>
                                <img src={fox.img_href} alt={fox.name} className="foxImage"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    );
};

export default FoxGallery;