import React, { useState, useContext } from "react";
import './LinhaDeFilmes.css';
import {Row, Col, Container, Button} from 'reactstrap';
import {Context} from '../../context/Context';
import ActionButtons from "./ActionButtons/Index";
// Importando os ícones que serão utilizados no site
// É necessária a instalação prévia dos icons e do core para serem utilizados

export default function LinhaDeFilmes ({filmes, series}) {
    const {setOpenModal, setNameModal} = useContext(Context)

    function edit(id) {
        const video = document.querySelectorAll(`div[name='linha${id}']`)[0];

        if(video.className === 'd-flex'){
            video.className = 'd-none';
        }else{
            video.className = 'd-flex';
        }
    }
    return (
        <>
        <div className="linhaDeFilmes">
            <Row >
                <Col lg="1">
                <h2>Filmes</h2>
                </Col>
                <Col lg="2">
                <Button
                onClick={() => (setNameModal('Filme'), setOpenModal(true))}>
                    Adicionar
                </Button>
                </Col>
            </Row>
                <Container fluid>
                <div className="header-body">
                    <Row >
                        {  filmes.length > 0 &&
                            filmes.map((film, index) => (
                                <Col key={film.data.id} lg="2" className="linhaDeFilmes--filmes" style={{marginBottom: '100px'}}>
                                    <img 
                                    src={film.data.image} 
                                    width="100%" 
                                    height="100%" 
                                    style={{borderRadius:'5px'}}
                                    onClick={() => (edit(film.data.id))}/>
                                    <h5 className="mt-2">
                                        {film.data.name}
                                    </h5>
                                    <ActionButtons video={film} cat={'Filme'}/>
                                </Col>
                            ))
                        }
                        
                    </Row>
                </div>
                </Container>
        </div>
        <div className="linhaDeFilmes mt-6">
        <Row >
            <Col lg="1">
                <h2>Séries</h2>
                </Col>
                <Col lg="2">
                <Button
                onClick={() => (setNameModal('Série'), setOpenModal(true))}>
                    Adicionar
                </Button>
            </Col>
        </Row>
            <Container fluid>
            <div className="header-body">
                <Row >
                    {  series.length > 0 &&
                        series.map((serie, index) => (
                            <Col 
                            style={{marginBottom: '100px'}}
                            key={serie.data.id} 
                            lg="2" 
                            className="mt-3 linhaDeFilmes--filmes"
                            
                            >
                                <img 
                                src={serie.data.image} 
                                width="100%" 
                                height="100%" 
                                style={{borderRadius:'5px'}}
                                onClick={() => (edit(serie.data.id))}/>

                                <h5 className="mt-2">
                                    {serie.data.name}
                                </h5>
                                <ActionButtons video={serie} cat={'série'}/>
                            </Col>
                        ))
                    }
                </Row>
            </div>
            </Container>
        </div>
        </>
    );
}