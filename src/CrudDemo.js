import React, { useEffect, useState } from 'react';
import AlertMessage from './AlertMessage';
import PersonApiAction from './PersonApiAction';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CrudDemo = () => {


    const [people, setPeople] = useState([]);
    const [alert, setAlert] = useState({type: '', message: ''});

    const [updateData, setUpdateData] = useState(false);

    

    useEffect(() => {
        const callApi = new PersonApiAction();
        callApi.getAll().then(response => {
            console.log('RESPONSE', response);
                if(response.status === 200){
                    setPeople(response.data);
                    //setAlert({type: 'success', message: 'GET operation is done!'});
                }else {
                    setAlert({type: 'danger', message: 'GET operation failed!'})
                }
        })
    }, [updateData]);

    const Table = () => {

        const TableHeader = () => {
            return (
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
            );
        };

        const TableAction = (props) => {

            const history = useHistory();

            const showDetails = () => {
                history.push(`/details/${props.id}`);
            }

            const deleteById = () => {
                const callApi = new PersonApiAction();
                callApi.deleteDetailsById(props.id).then(response => {
                    if(response.status === 204){
                        setAlert({type: 'success', message: 'DELETE operation is done!'});
                        setUpdateData(!updateData);
                    } else {
                        setAlert({type: 'danger', message: 'DELETE operation is failed!'});
                    }
                });
            }

            return (
                <div>
                    <button type='button' className='btn btn-primary' onClick={showDetails}>Details</button>
                    <button type='button' className='btn btn-danger m-1' onClick={deleteById}>Delete</button>
                    <button type='button' className='btn btn-warning'>Edit</button>
                </div>
            );
        };

        const TableRow = () => {
            return (
                <tbody>
                    {
                        people.map((person) => (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.firstName} {person.lastName}</td>
                                <td>{person.email}</td>
                                <td><TableAction id={person.id} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            );
        };



        return (
            <div className='container'>
                <table className='table table-striped'>
                    <TableHeader />
                    <TableRow />
                </table>
            </div>
        );
    }


    const Form = () => {

        const {register, handleSubmit, reset, formState: {errors}} = useForm();
        const [alert, setAlert] = useState({type: '', message: ''});
    
        const addPerson = (data) => {
            const callApi = new PersonApiAction();
            callApi.postData(data).then(response => {
                if(response.status === 201){
                    setAlert({type: 'success', message: 'POST operation is done!'}) 
                    setUpdateData(!updateData); 
                } else{
                    setAlert({type: 'danger', message: 'POST operation is failed!'})
                }
            });
        }
        return (
            <form className='form-control m-1 p-2' onSubmit={handleSubmit(addPerson)}>
                <div className='row mb-2'>
                    <div className='col-6'>
                        <input type='text' className='form-control' {...register('firstName', {required: true})} placeholder='Enter FirstName' />
                        {errors.firstName && <span className='text-danger'>FirstName is required!</span>}
                    </div>
                    <div className='col-6'>
                        <input type='text' className='form-control' {...register('lastName', {required: true})} placeholder='Enter LastName' />
                        {errors.lastName && <span className='text-danger'>LastName is required!</span>}
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col'>
                        <input type='text' className='form-control' {...register('email', {required: true})} placeholder='Enter Email' />
                        {errors.email && <span className='text-danger'>Email is required!</span>}
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col'>
                        <input type='text' className='form-control' {...register('title', {required: true})} placeholder='Enter Title' />
                    </div>
                </div>
                <div>
                    <button type='submit' className='btn btn-success m-1'>Add</button>
                    <button type='button' className='btn btn-danger' onClick={() => reset() }>Reset</button>
                </div>
            </form>
        );
    };


    return (
        <div className='container'>
            <AlertMessage message={alert.message} type={alert.type} />
            <Form />
            <div className='container border'>
            <h5 className='bg-dark text-white p-3'>Person List</h5>
            <Table />
            </div>
        </div>
    );
};

export default CrudDemo;