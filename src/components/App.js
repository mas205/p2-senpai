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
            raceList: [],
            natureList: [],
            genderList: [],
            selectedFox: {},
            lastId: 9
        };
    }
    // Se cargan los listados
    componentDidMount = () => {
        this.updateFoxLists(this.state.foxes);
        this.selectFox(1);
        // this.addNewFox({'name':'Prueba','gender':'prueba','nature':'prueba','race':'prueba'});
        console.log(this.state);
    }
    // Retorna el componente a renderizar dependiendo del state
    renderSelectedPage = () => {
        const pageToRender = this.state.selectedPage;
        if(pageToRender === 'home'){
            return <FoxGallery />;
        } else if(pageToRender === 'card'){
            return <FoxCard />;
        } else if(pageToRender === 'form'){
            return <FoxForm />;
        } else if(pageToRender === 'blog'){
            return <FoxBlog />;
        };
    }
    // Settea la pagina seleccionada
    updateSelectedPage = (page) => {
        this.setState({
            selectedPage: page
        });
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
    selectFox = (foxId) => {
        this.setState({
            selectedFox: this.state.foxes.filter(fox => fox.id === foxId)[0]
        })
    }

    render(){
        return(
            <div className="supreme-container">
                <NavBar updateOnClick={this.updateSelectedPage}/>
                <div class="insideFlexbox">
                    {this.renderSelectedPage()}
                    {this.state.foxes.map((fox) => {
                        return <div>{fox.name}</div>
                    })}
                </div>  
            </div>
        );
    };
}