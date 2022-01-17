
import './Details.css';

import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as photo from '../../servecies/photo';

const Details = () => {
    const { id } = useParams();
    const [photoCard, setPhotoCard] = useState({});
    const [comments, setComments] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {

        photo.getCertainPhoto(id)
            .then(result => {
                setPhotoCard(result);
                setComments(result.comments);
            })
            .catch(err => {
                alert(err)
            })

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
        <div className='photo-interaction-buttons'>
        <p className='like-section'>
                <button className='like-button' onClick={() => likePhoto(id)}>Like Photo</button>
            </p>
            <p className='button'><Link to={`/comments/${id}`}>Add Comment</Link></p>
        </div>
            
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
            <h3 className='comments-title'>Comments:</h3>
            <div className='comments-div'>
                {!!comments && comments.map((x, index) => <p className='comment-text'>{index + 1}:  {x.comment}</p>)}
            </div>
        </div>
    );
};

export default Details;