import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const OnePet = props => {
    const [update, setUpdate] = useState(false);


    const [pet, setPet] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
        .then(res => setPet(res.data.onePet))
    },[pet])

    const adoptPet = _id =>{
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
            .then(res => setUpdate(!update), navigate("/"))
    }

    return(
        <>
        <h1>Pets Info</h1>
        {
                pet ?
                <div>
                <h1>{pet.petName}</h1>
                <h3>Pet Type: {pet.petType}</h3>
                <h3>About: {pet.description}</h3>
                <h3>Skills:</h3>
                <p>{pet.skill1}</p>
                <p>{pet.skill2}</p>
                <p>{pet.skill3}</p>
                <Link to={`/pets/update/${pet._id}`}><button>Edit</button></Link>
                <button onClick= {() => adoptPet(pet._id)}>Adopt {pet.petName}!</button>
                </div>
                : ""
            }
        </>
    )
}
export default OnePet;