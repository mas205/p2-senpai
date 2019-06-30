import React from 'react';
import '../styles/FoxBlog.css'

const FoxBlog = () => {
    const toBeProgramed = (e) => {
        e.preventDefault();
        alert('To be implemented');
    }

    return (
        <div className="row" style={{width:'100%',padding:0,margin:0}}>
            <div className="col-12" style={{marginBottom: '5%', padding: 0}}>
                <header className="foxHeader" style={{backgroundImage: "url('https://randomfox.ca/images/43.jpg')"}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8 col-md-10" style={{marginLeft: "auto", marginRight: "auto"}}>
                            <div className="page-heading" style={{textAlign: "center", padding:"5%", overflow: "hidden"}}>
                            <h1 style={{fontSize:"60px"}}><b>Aventuras del Zorro!</b></h1>
                            <span className="subheading">Actualizaciones para nuestros donadores!</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </header> 
            </div>
            <div className="col-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg8 col-md-10 mx-auto">
                            <article className="foxArticle">
                                <a href="/" onClick={e => toBeProgramed(e)}>
                                    <h2 className="foxTitle"><b>Stu volvio a romper una silla!</b></h2>
                                    <h5 className="foxSubTitle">Nuestro Stu sigue haciendo de las suyas...</h5>
                                </a>
                                <p className="foxMeta">Posteado hace 3 horas
                                </p>
                            </article>
                            <hr/>
                            <article className="foxArticle">
                                <a href="/" onClick={e => toBeProgramed(e)}>
                                    <h2 className="foxTitle"><b>Jon mordio a Dany!</b></h2>
                                    <h5 className="foxSubTitle">Hasta a D&D se le hubiera ocurrido un mejor desenlace</h5>
                                </a>
                                <p className="foxMeta">Posteado hace 9 horas
                                </p>
                            </article>
                            <hr/>
                            <article className="foxArticle">
                                <a href="/" onClick={e => toBeProgramed(e)}>
                                    <h2 className="foxTitle"><b>Un zorro misterioso?</b></h2>
                                    <h5 className="foxSubTitle">Quien sera el proximo en unirse a la familia?</h5>
                                </a>
                                <p className="foxMeta">Posteado hace 12 horas
                                </p>
                            </article>
                            <hr/>
                            <article className="foxArticle">
                                <a href="/" onClick={e => toBeProgramed(e)}>
                                    <h2 className="foxTitle"><b>Amanda visita a Robert!!</b></h2>
                                    <h5 className="foxSubTitle">Increible reencuentro lleno de emociones!</h5>
                                </a>
                                <p className="foxMeta">Posteado hace 2 dias
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoxBlog;