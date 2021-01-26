import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllPets = props => {
    const [allPets, setAllPets] = useState(null);

    const [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                res.data.Pets.sort((a, b) => {
                        let fa = a.petType.toLowerCase(),
                            fb = b.petType.toLowerCase();
                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    });
                setAllPets(res.data.Pets)})
    }, [])

    const adoptPet = _id =>{
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
            .then(res => setUpdate(!update))
    }

    return(
        <>
        <h1 style={{color: 'steelblue'}}>These are all the pets</h1>

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allPets ?
                    allPets.map((items, i) => {
                            return <tr key={i}>
                                <td>{items.petName}</td>
                                <td>{items.petType}</td>
                                <td><Link to= {`/pets/${items._id}`}>details</Link> | <Link to= {`/pets/update/${items._id}`}>edit</Link></td>
                            </tr>
                    }) : ""
                }
            </tbody>
        </table>
        </>
    )
}
export default AllPets;