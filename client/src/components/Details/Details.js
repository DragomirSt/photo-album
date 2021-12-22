
import './Details.css';

import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as photo from '../../servecies/photo';

const Details = () => {
    const { id } = useParams();
    const [photoCard, setPhotoCard] = useState({});
    const { user } = useContext(AuthContext)

    useEffect(() => {

        photo.getCertainPhoto(id)
            .then(result => {
                setPhotoCard(result);
            });

    }, [id]);

    const likePhoto = (id) => {
        fetch('/data/photos/likes', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ postId: id })
        })
            .then(res => res.json())
            .then(result => {
                setPhotoCard(result);
            })
            .catch(err => {
                alert(err)
            });
    };

    const onwerButtons = (
        <div className='buttons'>
            <p className='button'><Link to={`/edit/${id}`}>Edit</Link></p>
            <p className='button'><Link to={`/delete/${id}`}>Delete</Link></p>
        </div>

    );
    const guestButton = (
        <p className='like-section'>
            <button className='like-button' onClick={() => likePhoto(id)}>Like Photo</button>
        </p>
    );
    return (
        <div className="photo-details">
            <div className='photo-info-section'>
                <label>{photoCard.name}, Genre: {photoCard.genre}</label>
            </div>
            <div>
                <p className="img"><img src={photoCard.imageUrl} width={750} height={500} alt='' /></p>
                <h3 className='likes'>Likes: {photoCard.likes}</h3>
            </div>
            <div className='button-section'>
                {user._id === photoCard._ownerId
                    ? onwerButtons
                    : guestButton}
            </div>

        </div>
    );
};

export default Details;