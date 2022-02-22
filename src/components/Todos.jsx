import React,{useState} from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todos(props) {
    const[activeModal, setActiveModal] = useState(false);
    function deleteHandler(){
        setActiveModal(true);
    }

    function closeModalHandler(){
        setActiveModal(false);
    }
  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {activeModal&&<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {activeModal&&<Backdrop onCancel={closeModalHandler}/>}
    </div>
  )
}

export default Todos