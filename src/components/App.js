import React from 'react';
import FoxGallery from './FoxGallery';
import FoxCard from './FoxCard';
import FoxForm from './FoxForm';
import FoxBlog from './FoxBlog';
import NavBar from './NavBar';
import '../styles/App.css';
import foxConfig from '../foxConfig.json'
/* 
En ../foxConfig.json se guardan los zorros iniciales
Los zorros creados por el usuario no tendran persistencia 
*/


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedPage: 'home',
            foxes: foxConfig.foxes,
            foxesToShow: foxConfig.foxes,
            raceList: [],
            natureList: [],
            genderList: [],
            selectedFox: {},
            lastId: 9,
            selectedRaces: [],
            selectedGenders: [],
            selectedNatures: []
        };
    }
    // Se cargan los listados
    componentDidMount = () => {
        this.updateFoxLists(this.state.foxes);
        this.selectFox(this.state.foxes[0]);
        /* this.selectGenders(this.state.genderList);
        this.selectRaces(this.state.raceList);
        this.selectNatures(this.state.natureList); */
        // this.addNewFox({'name':'Prueba','gender':'prueba','nature':'prueba','race':'prueba'});
        console.log(this.state);
    }

    // Retorna el componente a renderizar dependiendo del state
    renderSelectedPage = () => {
        const pageToRender = this.state.selectedPage;
        if(pageToRender === 'home'){
            return <FoxGallery 
                foxes={this.state.foxesToShow} 
                selectFox={this.selectFox} 
                genderList={this.state.genderList}
                raceList={this.state.raceList}
                natureList={this.state.natureList}
                selectGenders={this.selectGenders}
                selectedGenders={this.state.selectedGenders}
                selectNatures={this.selectNatures}
                selectedNatures={this.state.selectedNatures}
                selectRaces={this.selectRaces}
                selectedRaces={this.state.selectedRaces}
                updateFoxes={this.showFoxes}
                updateSelectedPage={this.updateSelectedPage}
            />;
        } else if(pageToRender === 'card'){
            return <FoxCard 
                selectedFox={this.state.selectedFox}
            />;
        } else if(pageToRender === 'form'){
            return <FoxForm 
                raceList={this.state.raceList}
                genderList={this.state.genderList}
                natureList={this.state.natureList}
                addNewFox={this.addNewFox}
            />;
        } else if(pageToRender === 'blog'){
            return <FoxBlog />;
        };
    }
    // Settea la pagina seleccionada
    updateSelectedPage = (page) => {
        this.setState({
            selectedPage: page,
            selectedGenders: [],
            selectedNatures: [],
            selectedRaces: []
        });
        this.showFoxes();
    }
    // La logica para conseguir los listados de zorros
    updateFoxLists = (fox) => { 
        const foxes = fox;
        const genderList = this.state.genderList;
        const raceList = this.state.raceList;
        const natureList = this.state.natureList;
        foxes.forEach((fox) => {
            if(!raceList.includes(fox.race)){
                raceList.push(fox.race);
            }
            if(!natureList.includes(fox.nature)){
                natureList.push(fox.nature);
            }
            if(!genderList.includes(fox.gender)){
                genderList.push(fox.gender);
            }
        });
        this.setState({
            genderList: genderList,
            raceList: raceList,
            natureList: natureList
        });
    }

    // Añadir nuevo zorro
    addNewFox = (fox) => {
        fox.id = this.state.lastId+1
        this.setState({
            foxes: [...this.state.foxes, fox],
            lastId: fox.id
        });
        this.updateFoxLists([fox]);
    }

    // Selecciona un zorro
    selectFox = (fox) => {
        this.setState({
            selectedFox: fox
        });
    }

    // Se calculan que Zorros mostrar
    showFoxes = (gender=this.state.selectedGenders, natu=this.state.selectedNatures, race=this.state.selectedRaces) => {
        if(gender.length === 0){
            gender = this.state.genderList;
        }
        if(race.length === 0){
            race = this.state.raceList;
        }
        if(natu.length === 0){
            natu = this.state.natureList;
        }
        console.log(gender, race, natu)
        const toShow = this.state.foxes.filter(fox => {
            return gender.includes(fox.gender) && natu.includes(fox.nature) && race.includes(fox.race);
        });
        this.setState({
            foxesToShow: toShow
        });
        
    }

    // Seleccionar generos
    selectGenders = (genders) => {
        this.setState({
            selectedGenders: genders
        });
    }
    
    // Seleccionar razas
    selectRaces = (race) => {
        this.setState({
            selectedRaces: race
        });
    }
    
    // Seleccionar naturalezas
    selectNatures = (nature) => {
        this.setState({
            selectedNatures: nature
        });
    }

    render(){
        console.log(this.state)
        return(
            <div className="supreme-container">
                <NavBar updateOnClick={this.updateSelectedPage}/>
                <div className="insideFlexbox">
                    {this.renderSelectedPage()}
                </div>  
            </div>
        );
    };
}