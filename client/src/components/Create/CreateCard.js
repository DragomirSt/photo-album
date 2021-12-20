
import './CreateCard.css'

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import * as photo from '../../servecies/photo';
const Create = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const createPhotoCard = (e) => {
        e.preventDefault();
        const data = new FormData();
        let formData = new FormData(e.target);

        let name = formData.get('name');
        let genre = formData.get('genre');
        let imageUrl = formData.get('imageUrl');

        data.append('name', name)
        data.append('genre', genre);
        data.append('imageUrl', imageUrl);
        console.log(data)

        photo.createCard(data, user.accessToken)
            .then(res => {
                navigate('/');
            })

    };


    return (
        <div className='create-form'>
            <form method="POST" onSubmit={createPhotoCard}>
                <div className='add-form-text'>
                    <h2>Add New Photo</h2>
                </div>
                <div className='create-label'>
                    <h3>Name: </h3>
                </div>
                <div className='inputs'>
                    <input type="text" name="name" className="name" placeholder="Name ...." />
                </div>
                <div className='genre-label'>
                    <h3>Genre: </h3>
                </div>
                <div className='input-genre'>
                    <input type="text" name="genre" className="genre" placeholder='Genre ....' />
                </div>
                <div className='image-label'>
                    <h3>Photo: </h3>
                </div>
                <div className='image'>
                    <input type="file" name="imageUrl" className="file"  />
                </div>

                <input className="button-submit" type="submit" value="Add New Photo" />

            </form>
        </div>

    )
}

export default Create;