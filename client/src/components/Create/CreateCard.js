
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
        let formData = new FormData(e.target);

        let name = formData.get('name');
        let genre = formData.get('genre');
        let imageUrl = formData.get('imageUrl');

        photo.createCard({
            name,
            genre,
            imageUrl
        }, user.accessToken)
        .then(res => {
            navigate('/');
        })
       
    };


    return (
        <form className='create-form' method="POST" onSubmit={createPhotoCard}>
            <fieldset className='create-fieldset'>
                <legend>Create Photo Card</legend>

                <label htmlFor="email">Name</label>
                <input type="text" name="name" placeholder="Photo name ..." />

                <label htmlFor="genre">Genre</label>
                <input type="text" name="genre" placeholder="Photo name ..." />

                <label htmlFor="image-url">Image Url</label>
                <input type="text" name="imageUrl" placeholder="Image Url ... " />

                <input className="button submit" type="submit" value="Create Card" />
            </fieldset>
        </form>
    )
}

export default Create;