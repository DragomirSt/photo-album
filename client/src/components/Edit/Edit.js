
import './Edit.css';

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as photo from '../../servecies/photo';
import { successNotification, errorNotification } from '../../notifications/notification';

const Edit = () => {
    const { id } = useParams();
    const [photoCard, setPhotoCard] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        photo.getCertainPhoto(id)
            .then(result => {
                setPhotoCard(result);
            });

    }, [id]);

    const editPhotoCard = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        let name = formData.get('name');
        let genre = formData.get('genre');
        let imageUrl = formData.get('imageUrl');

        if (name.length < 1 || genre.length < 1 || imageUrl.length < 1) {
            return errorNotification(['All input fields are requied.']);
        }

        photo.updatePhoto({
            name,
            genre,
            imageUrl
        }, id)
            .then(res => res.json())
            .then(result => {
                successNotification([result.message]);
                setTimeout(() => {
                    navigate(`/details/${id}`);
                }, 1700);
            })
            .catch(err => {
                errorNotification([err]);
            });
    };

    return (
        <div className='edit-form'>
            <form method="POST" onSubmit={editPhotoCard}>
                <div className='edit-form-text'>
                    <h2>Edit Your Photo</h2>
                </div>
                <div className='edit-label'>
                    <h3>Name: </h3>
                </div>
                <div className='inputs'>
                    <input type="text" name="name" className="name" defaultValue={photoCard.name} />
                </div>
                <div className='genre-label'>
                    <h3>Genre: </h3>
                </div>
                <div className='input-genre'>
                    <input type="text" name="genre" className="genre" defaultValue={photoCard.genre} />
                </div>
                <div className='image-label'>
                    <h3>Photo: </h3>
                </div>
                <div className='image'>
                    <input type="text" name="imageUrl" className="imageUrl" defaultValue={photoCard.imageUrl} />
                </div>

                <input className="button-submit" type="submit" value="Save" />

            </form>
        </div>
    );
};

export default Edit;