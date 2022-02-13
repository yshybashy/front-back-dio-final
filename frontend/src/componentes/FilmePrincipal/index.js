import React, {useContext} from "react";
import './FilmePrincipal.css';
import {Context} from '../../context/Context';

export default function FilmePrincipal({filme}) {

    const {videoPrincipal} = useContext(Context);
    let sinopse = filme.description;
    if(sinopse.length > 260){
        sinopse = sinopse.substring(0, 260) + "...";
    }

    return(
        <section className="filmePrincipal" style={{
            backgroundImage: `${videoPrincipal ? `url(${videoPrincipal.image})`: `url(${filme.img})`}`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
            }}>
            <div className="filmePrincipal--transparenciaVertical">
                <div className="filmePrincipal--transparenciaHorizontal">
                    <div className="filmePrincipal--nome">{videoPrincipal ? videoPrincipal.name : filme.name}</div>
                        <div className="filmePrincipal--sinopse">{videoPrincipal? videoPrincipal.description : sinopse}</div>
                    </div>    
                </div>
        </section>
    )
}