import React, { useEffect, useState, useContext } from 'react';
import LinhaDeFilmes from '../LinhaDeFilmes';
import './PaginaInicial.css';
import FilmePrincipal from '../FilmePrincipal';
import TopoPagina from '../TopoPagina';
import ModalAdd from '../../Modal/ModalAdd';
import ModalDelete from '../../Modal/ModalDelete';
import ModalEdit from '../../Modal/ModalEdit';
import {Context} from '../../context/Context.js'
import FilmsApi from '../../Api/Films/FilmesApi';
import SeriesApi from '../../Api/Series/SeriesApi';

export default function PaginaInicial () {

    const {openModal, nameModal, attPage, openModalDelete, openModalEdit} = useContext(Context);
    const [dadosFilmePrincipal, setDadosFilmePrincipal] = useState(null);
    const [filmes, setFilmes] = useState([]);
    const [series, setSeries] = useState([]);
    const [topoEscuro, setTopoEscuro] = useState(false);

    useEffect(() => {
    const carregarTudo = async () => {
        await new FilmsApi().list('/netflix/films').then(collectionFilms => {
            setFilmes(collectionFilms.data)
        }).catch(err => {
            console.log(err);
        })

        await new SeriesApi().list('/netflix/series').then(collectionSeries => {
            setSeries(collectionSeries.data)
        }).catch(err => {
            console.log(err);
        })

        const obj = {
            name : 'Alice in Borderland',
            description : 'Um gamer e dois amigos são transportados para uma versão paralela de Tóquio, onde precisam participar de diversos jogos mortais caso queiram sobreviver.',
            img : 'https://github.com/yshybashy/cloneNetFlix/blob/main/assets/img/imagem-fundo.jpg?raw=true'
        }
        setDadosFilmePrincipal(obj);
        }
        carregarTudo();
    }, [attPage]);

    useEffect(()=>{
    const scrollListener = () => {
        if(window.scrollY > 10){
        setTopoEscuro(true);
        }
        else{
        setTopoEscuro(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
    }, []);

    return(
    <div className="pagina">

        <TopoPagina estaLogado topoPreto = {topoEscuro} />

        {openModal &&
            <ModalAdd name={nameModal}/>
        }

        {openModalDelete &&
            <ModalDelete name={nameModal}/>
        }

        {openModalEdit && 
            <ModalEdit name={nameModal}/>
        }

        { dadosFilmePrincipal &&
            <FilmePrincipal filme={dadosFilmePrincipal}/>
        }

        <section className="listas">
                <LinhaDeFilmes filmes={filmes} series={series}/>
        </section>
      
    </div>
  );
};