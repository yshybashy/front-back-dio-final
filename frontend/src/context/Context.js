import React, { createContext, useState } from 'react';
import t from 'prop-types';

export const Context = createContext();

export default function ContextProvider({children}){
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [infoVideo, setInfoVideo] = useState();
  const [videoPrincipal, setVideoPrincipal] = useState();
  const [id, setId] = useState(false);
  const [nameModal, setNameModal] = useState();
  const [attPage, setAttPage] = useState(false);

  const state = {
    openModal, 
    setOpenModal,
    nameModal, 
    setNameModal,
    attPage, 
    setAttPage,
    infoVideo, 
    setInfoVideo,
    id, 
    setId,
    openModalEdit, 
    setOpenModalEdit,
    openModalDelete, 
    setOpenModalDelete,
    videoPrincipal, 
    setVideoPrincipal
  }
  return <Context.Provider value={state}>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
  children: t.node.isRequired,
}