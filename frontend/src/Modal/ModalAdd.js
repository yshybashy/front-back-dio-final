import React, {useState, useContext} from 'react';
import { Context } from '../context/Context';
import {Button, Input, Row, Col} from 'reactstrap';
import FilmsApi from '../Api/Films/FilmesApi';
import SeriesApi from '../Api/Series/SeriesApi';
import Swal from 'sweetalert2';

import Modal from 'react-bootstrap/Modal';

export default function ModalAdd(props){
  const {name} = props;
  const {setOpenModal, setAttPage, attPage} = useContext(Context);
  const [contName, setContName] = useState(50)
  const [contDescription, setContDescription] = useState(6500)
  const [contImage, setContImage] = useState(6500)
  const [erroInputName, setErroInputName] = useState(false);
  const [erroInputDescription, setErroInputDescription] = useState(false);
  const [erroInputImage, setErroInputImage] = useState(false);
  const [open, setOpen] = useState(true);

function contChar(name, maxChar, target){
  if(name == 'name' && maxChar - target.length >= 0) {
    setContName(maxChar - target.length);
    setErroInputName(false)
  }else if(name == 'description' && maxChar - target.length >= 0){
    setContDescription(maxChar - target.length);
    setErroInputDescription(false)
  }else if(name == 'image' && maxChar - target.length >= 0){
    setContImage(maxChar - target.length);
    setErroInputImage(false)
  }

  if((maxChar - target.length) < 0 && name == 'name'){
    document.querySelectorAll('input[name="name"]')[0].style.border = '1px solid red';
    setErroInputName(true)
  }else if((maxChar - target.length) < 0 && name == 'description'){
    document.querySelectorAll('textarea[name="description"]')[0].style.border = '1px solid red';
    setErroInputDescription(true)
  }else if((maxChar - target.length) < 0 && name == 'image') {
    document.querySelectorAll('input[name="img"]')[0].style.border = '1px solid red';
    setErroInputImage(true)
  }
}
  async function add(){
   const nameInput = document.querySelectorAll('input[name="name"]')[0];
   const descriptionInput = document.querySelectorAll('textarea[name="description"]')[0];
   const imgInput = document.querySelectorAll('input[name="img"]')[0];
   if(nameInput.value && descriptionInput.value && imgInput.value && (erroInputName===false) && (erroInputDescription===false) && (erroInputImage===false)){
     const obj = {
       name : nameInput.value,
       description : descriptionInput.value,
       image : imgInput.value
     }

     if (name == 'Filme'){
      await new FilmsApi().create('/netflix/films/insert', obj).then(res => {
          console.log('inserido com sucesso');
          setOpen(false);
          setOpenModal(false);
          setAttPage(!attPage);
        }).catch(err => {
          Swal.fire({
            title: 'Erro',
            text: "Ocorreu um erro, tente novamente!",
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
          })
        })
     }else{
      await new SeriesApi().create('/netflix/series/insert', obj).then(res => {
        setOpen(false);
        setOpenModal(false)
        setAttPage(!attPage);
      }).catch(err => {
        Swal.fire({
          title: 'Erro',
          text: "Ocorreu um erro, tente novamente!",
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok',
        })
      })
     }

   }else if (nameInput.value == ''){
     nameInput.style.border = '1px solid red';
   }else if (descriptionInput.value == ''){
     descriptionInput.style.border = '1px solid red';
   }else if (imgInput.value == ''){
     imgInput.style.border = '1px solid red';
   }
  }
  return (
    <Modal
    show={open}
    onHide={()=>(setOpen(false), setOpenModal(false))}
    >
      <Modal.Header style={{padding:'1.25rem 1.25rem 0 1.25rem'}}>
        <Modal.Title style={{color:'black'}}>Adicionar {name}
        </Modal.Title>
          <h5 
          style={{cursor:'pointer', color:'black'}}
          onClick={() => (setOpen(false), setOpenModal(false))}
          >X</h5>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <Row className='mb-3'>
          <Col className="order-xl-1" xl="30">
            <spam style={{color:'black'}}>Nome</spam>
            <Input
            onChange={(i) => (document.querySelectorAll('input[name="name"]')[0].style.border = '', contChar('name', 50, i.target.value))}
            name="name"/>
            <div className="text-right text-dark" style={{float:'right'}} >
              <small name="smallName">{contName}</small>
            </div>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col className="order-xl-1" xl="30">
            <spam style={{color:'black'}}>Descrição</spam>
            <Input
              onChange={(i) => (document.querySelectorAll('textarea[name="description"]')[0].style.border = '', contChar('description', 6500, i.target.value))}
              name="description"
              type="textarea"
              rows="10"/>
              <div className="text-right text-dark" style={{float:'right'}} >
                <small name="smallDescription">{contDescription}</small >
              </div>
          </Col>
        </Row>
        <Row>
          <Col className="order-xl-1" xl="30">
            <spam style={{color:'black'}}>Link da Imagem</spam>
            <Input
            onChange={(i) => (document.querySelectorAll('input[name="img"]')[0].style.border = '', contChar('image', 6500, i.target.value))}
            name="img"/>
            <div className="text-right text-dark" style={{float:'right'}} >
              <small name="smallImage">{contImage}</small>
            </div>
          </Col>
        </Row>
        <div style={{float:'right'}}>
          <Button onClick={() => (setOpen(false), setOpenModal(false))}
                className="my-4" color="danger" type="button"
                >Cancelar</Button>
          <Button onClick={() => add()}
                style={{marginLeft:"10px"}} color="primary" type="button"
                >Adicionar
                </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}