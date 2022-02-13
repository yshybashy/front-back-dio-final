import React, {useState, useContext} from 'react';
import { Context } from '../context/Context';
import {Button} from 'reactstrap';
import FilmsApi from '../Api/Films/FilmesApi';
import SeriesApi from '../Api/Series/SeriesApi';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';

export default function ModalDelete({name}) {
  const {infoVideo, setOpenModalDelete, setAttPage, attPage, setVideoPrincipal} = useContext(Context);
  const [open, setOpen] = useState(true);
  const [spinner, setSpinner] = useState(false);
  console.log(infoVideo);

  async function deleteVideo(){
    setSpinner(true);
    if(name == 'Filme'){
      await new FilmsApi().delete('/netflix/films/', infoVideo.id).then(res => {
        setVideoPrincipal();
        setOpen(false);
        setOpenModalDelete(false);
        setAttPage(!attPage);
      }).catch(err => {
        setSpinner(false);
        Swal.fire({
          title: 'Erro',
          text: "Ocorreu um erro, tente novamente!",
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok',
        })
      })
    }else {
      await new SeriesApi().delete('/netflix/series/', infoVideo.id).then(res => {
        setOpen(false);
        setOpenModalDelete(false);
        setAttPage(!attPage);
      }).catch(err => {
        setSpinner(false);
        Swal.fire({
          title: 'Erro',
          text: "Ocorreu um erro, tente novamente!",
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok',
        })
      })
    }
  }
  return(
    <Modal
    show={open}
    onHide={() => (setOpen(false), setOpenModalDelete(false))}
    >

    <Modal.Header style={{padding:'1.25rem 1.25rem 0 1.25rem'}}>
      <Modal.Title style={{color:'black'}}>Deletar {name}
      </Modal.Title>
        <h5 
        style={{cursor:'pointer', color:'black'}}
        onClick={() => (setOpen(false), setOpenModalDelete(false))}
        >X</h5>
    </Modal.Header>
    <Modal.Body>
      <div className='text-center mt-4'>
        <h5 style={{color:'black'}}>
          Deseja Realmente Deletar {name == 'Filme' ? ' o filme ' : ' a série '} {infoVideo.name}?
        </h5>
      </div>
      <div className='text-center'>
        <Button 
          disabled={spinner}
          onClick={() => (setOpen(false), setOpenModalDelete(false))}
          className="my-4" color="danger" type="button"
          >Não
        </Button>
        <Button
          disabled={spinner}
          onClick={() => deleteVideo()}
          style={{marginLeft:"10px"}} color="primary" type="button"
          >Sim
          {
            spinner && 
            <i class="fa fa-spinner fa-spin text-success fa-fw ml-2"></i>
          }
        </Button>
      </div>
    </Modal.Body>

    </Modal>
  )
}