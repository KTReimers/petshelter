import React, {useState, useEffect} from 'react';
import Form from "../components/Form"
import {navigate} from '@reach/router';
import axios from 'axios';


const UpdatePet = props => {

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

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
        .then(res => setForm(res.data.onePet))
    },[props])

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }



    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`, form)
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
        <h1>Update Pet info</h1>
        <Form form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error} />
        </>
    )
}
export default UpdatePet;