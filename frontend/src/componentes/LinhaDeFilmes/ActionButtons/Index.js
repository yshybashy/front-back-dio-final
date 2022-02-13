import React, {useContext} from 'react';
import {Row, Col} from 'reactstrap';
import { Context } from '../../../context/Context';


export default function ActionButtons({video, cat}){

  const {setInfoVideo, setOpenModalDelete, setNameModal, setOpenModalEdit, setVideoPrincipal} = useContext(Context);

    function edit(id) {
      const video = document.querySelectorAll(`div[name='linha${id}']`)[0];

      if(video.className === 'd-flex'){
          video.className = 'd-none';
      }else{
          video.className = 'd-flex';
      }
    }

  return(
    <Row
    name={'linha'+video.data.id}  
    className="d-none">
      <Col lg="4" width="" style={{paddingRight: '10px'}} >
          <button 
          className="btn btn-warning btn-sm mr-3 text-right" 
           onClick = {() => (setVideoPrincipal(video.data), edit(video.data.id))}
          >
              <i style={{color:'white'}} class="fas fa-arrow-up"></i>
          </button>
      </Col>
      <Col lg="4" width="" style={{paddingRight: '10px'}} >
          <button 
          className="btn btn-primary btn-sm mr-3 text-right" 
           onClick = {() => (setInfoVideo(video.data), setOpenModalEdit(true), setNameModal(cat), edit(video.data.id))}
          >
              <i class="fa-solid fa-pen-to-square"></i>
          </button>
      </Col>
      <Col lg="4" style={{paddingRight: '10px'}} >
          <button 
          className="btn btn-danger btn-sm mr-3 text-right" 
            onClick = {() => (setInfoVideo(video.data), setOpenModalDelete(true), setNameModal(cat), edit(video.data.id))}
          >
              <i class="fa-solid fa-trash-can"></i>
          </button>
      </Col>
    </Row>
  )
}