import React from 'react';
import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { globalContext } from '../../contexts/globalContext';
import { useState } from 'react';


function Edit() {

    const navigate = useNavigate()

    const {state, dispatch} = useContext(globalContext)

    const {id} = useParams()
    const currentCard = state.list.find(el => el.id === +id)
    const [newText, setNewText] = useState(currentCard.text)
    const [newDescription, setNewDescription] = useState(currentCard.description);

    function handleSubmit (event) {
        event.preventDefault()

        dispatch ({
            type: 'EDIT_CAFE',
            payload: {
                text: newText,
                id: +id,
                description: newDescription,
            }
        })
        navigate ('/cardList')
    }
    
    return (
     <div>
      <div className="card">
       {/* <div className="card-body">
      Cafe name: */}
       <h5 className="card-title">{currentCard.text}</h5>
       <form className='mb-3' onSubmit={handleSubmit}>
          <div className="col-sm-10">
            <input
              type="action"
              className="form-control"
              id="action"
              placeholder="input name"
              onChange={(event) => setNewText(event.target.value)}
              value={newText}
            />
            <input
              required
              className='form-control '
              id='description'
              placeholder='input description'
              onChange={event => setNewDescription(event.target.value)}
              value={newDescription}
            />
          </div>  
       <img src={currentCard.image} alt='picture' className='picture'/>
       <p className="card-text">{currentCard.description}</p>
       <button type="submit" className="btn btn-outline-primary btn-lg">
         Edit
        </button>
       </form>
       </div>
      </div>            
    //  </div>
     
    );
}

export default Edit;