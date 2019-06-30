import React from 'react';

export default class FoxForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            race: '',
            nature: '',
            gender: '',
            age: '',
            furr: '',
            eyes: '',
            description: '',
            imageUrl: '',
            termsChecked: false
        }
    }

    handleName = (e) => {
        this.setState({name: e.target.value});
    }
    handleAge = (e) => {
        this.setState({age: e.target.value});
    }
    handleFurr = (e) => {
        this.setState({furr: e.target.value});
    }
    handleEyes = (e) => {
        this.setState({eyes: e.target.value});
    }
    handleDescription = (e) => {
        this.setState({description: e.target.value});
    }
    handleImg = (e) => {
        this.setState({imageUrl: e.target.value});
    }
    handleRace = (e) => {
        this.setState({race: e.target.value});
    }
    handleNature = (e) => {
        this.setState({nature: e.target.value});
    }
    handleGender = (e) => {
        this.setState({gender: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.termsChecked && this.state.race && this.state.nature && this.state.name && this.state.gender && this.state.imageUrl){
            const zorro = this.crearZorro();
            this.props.addNewFox(zorro);
            this.clearForm();
            alert(`${zorro.name} se ha unido a la familia!`);
        } else {
            alert('Faltan campos obligatorios o aceptar terminos');
        }

    }
    clearForm = () => {
        this.setState({
            name: '',
            race: '',
            nature: '',
            gender: '',
            age: '',
            furr: '',
            eyes: '',
            description: '',
            imageUrl: '',
            termsChecked: false
        });
    }
    crearZorro = () => {
        return {
            name: this.state.name,
            race: this.state.race,
            nature: this.state.nature,
            gender: this.state.gender,
            age: this.state.age,
            furr: this.state.furr,
            eyes: this.state.eyes,
            description: this.state.description,
            img_href: this.state.imageUrl,
        }
    }
    render(){
        return (
            <div className="container cardy" style={{borderRadius: "1%", padding: "3%", paddingTop:"2%"}}>
                <hr/>
                <h3 className="header"><b>Ingrese nuevo Zorro</b></h3>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputNombre">Nombre:</label>
                        <input type="text" className="form-control" id="inputNombre" placeholder="Nombre..."
                            value={this.state.name}
                            onChange={this.handleName}
                        />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputRaza">Raza:</label>
                        <select id="inputRaza" className="form-control" value={this.state.race} onChange={this.handleRace} >
                            <option value="1">Elige...</option>
                            {this.props.raceList.map(race => {
                                return <option value={race} key={race}>{race}</option>
                            })}
                        </select>                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputNaturaleza">Naturaleza:</label>
                        <select id="inputNaturaleza" className="form-control" value={this.state.nature} onChange={this.handleNature}>
                            <option value="1">Elige...</option>
                            {this.props.natureList.map(natu => {
                                return <option value={natu} key={natu}>{natu}</option>
                            })}
                        </select>                        </div>
                        <div className="form-group col-md-3">
                        <label htmlFor="inputSexo">Sexo:</label>
                        <select id="inputSexo" className="form-control" value={this.state.gender} onChange={this.handleGender}>
                            <option value="1">Elige...</option>
                            {this.props.genderList.map(gender => {
                                return <option value={gender} key={gender}>{gender}</option>
                            })}
                        </select>
                        </div>
                        <div className="form-group col-md-3">
                        <label htmlFor="inputEdad">Edad:</label>
                        <input type="number" className="form-control" id="inputEdad" placeholder="Edad..."
                            value={this.state.age}
                            onChange={this.handleAge}
                        />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputPelaje">Color de pelaje:</label>
                        <input type="text" className="form-control" id="inputPelaje" placeholder="Color de pelaje..."
                            value={this.state.furr}
                            onChange={this.handleFurr}
                        />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputOjos">Color de ojos:</label>
                        <input type="text" className="form-control" id="inputOjos" placeholder="Color de ojos..."
                            value={this.state.eyes}
                            onChange={this.handleEyes}
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDescripcion">Descripcion:</label>
                        <input className="form-control form-control-lg" id="inputDescripcion" type="text" placeholder="Descripcion..."
                            value={this.state.description}
                            onChange={this.handleDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="foxImageUpload">Ingrese la imagen del zorro</label>
                        <input type="text" className="form-control" id="foxImageUpload" placeholder="Ej: https://randomfox.ca/images/9.jpg"
                            value={this.state.imageUrl}
                            onChange={this.handleImg}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" defaultChecked={this.state.termsChecked}
                            onChange={e => this.setState({termsChecked: !this.state.termsChecked})}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Confirmar terminos de uso
                        </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Registrar</button>
                </form>
            </div>
        )
    };
};

