import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import axios from 'axios';
import {navigate} from '@reach/router';

const AddPet = props => {
    const [form, setForm] = useState({
        petName: "",
        petType: "",
        description: "",
        skills:{
            skill1: "",
            skill2: "",
            skill3: ""
        }
    })

    const [error, setError] = useState({})

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }



    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", form)
        .then(res => {
            if(res.data.error){
                setError(res.data.error.errors)
            } else {
                navigate("/")
            }
        })
        .catch(console.log("error occured while adding a pet"));
    }

    return(
        <>
        <h1>Know a pet needing a home?</h1>
        <Form form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error} />
        </>
    )
}
export default AddPet;