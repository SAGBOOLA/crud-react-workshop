import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PersonApiAction from './PersonApiAction';

const PersonDetails = () => {
    
    const params = useParams();
    const [person, setPerson] = useState({id: 0, firstName: '', lastName: '', email: '', title: ''});
    const [alert, setAlert] = useState({type: '', message: ''});
    const history = useHistory();

    useEffect(() => {
        const callApi = new PersonApiAction();
        callApi.getPersonById(params.id).then(response => {
            console.log('RESPONSE', response);
            if(response.status === 200){
                console.log('RESPONSE', response);
                setPerson(response.data);
                //setAlert({type: 'success', message: 'GET By Id operation is done!'});
            }else {
                setAlert({type: 'danger', message: 'GET By Id operation failed!'})
            }
        })
    }, []);


    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header bg-info text-white'>
                    Person Information
                </div>
                <div className='card-body'>
                    <h4 className='card-title'>{person.title}</h4>
                    <p className='card-text'>Id: {person.id}</p>
                    <p className='card-text'>Name: {person.firstName} {person.lastName}</p>
                    <p className='card-text'>Email: {person.email}</p>
                </div>
                <div className='card-footer'>
                    <button type='button' className='btn btn-outline-danger text-danger' onClick={() => history.push('/crud')}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default PersonDetails;