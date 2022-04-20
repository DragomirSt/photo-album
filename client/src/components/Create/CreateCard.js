
import './CreateCard.css'

import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuth';

import * as photo from '../../servecies/photo';
import { errorNotification, successNotification } from '../../notifications/notification';

const Create = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const createPhotoCard = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        let name = formData.get('name');
        let genre = formData.get('genre');
        let imageUrl = formData.get('imageUrl');

        if (name.length < 1 || genre.length < 1 || imageUrl.length < 1) {
            return errorNotification(['All input fields are required.']);
        };
        const regex = /^https?:\/\//i;
        if (!imageUrl.match(regex)) {
            return errorNotification(['Image Url must be a valid http/s link.']);
        }

        photo.createCard({
            name,
            genre,
            imageUrl
        }, user.accessToken)
            .then(res => {
                successNotification([res.message]);
                setTimeout(() => {
                    navigate('/all-photos');
                }, 1700)

            })
            .catch(err => {
                errorNotification([err]);
            });
    };

    return (
        <div className='create-form'>
            <form method="POST" onSubmit={createPhotoCard} >
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
                    <input type="text" name="imageUrl" className="imageUrl" placeholder='Upload yor image ....' />
                </div>
                <input className="button-submit" type="submit" value="Add New Photo" />
            </form>
        </div>
    );
};

export default Create;