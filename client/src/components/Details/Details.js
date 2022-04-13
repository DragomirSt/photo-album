
import './Details.css';

import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as photo from '../../servecies/photo';
import { successNotification } from '../../notifications/notification';

const Details = () => {
    const { id } = useParams();
    const [photoCard, setPhotoCard] = useState({});
    const [comments, setComments] = useState([]);
    const { user } = useContext(AuthContext);

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
                successNotification([result.message]);
                setPhotoCard(result.like);
            })
            .catch(err => {
                alert(err)
            });
    };

    const onwerButtons = (
        <>
            <div className='owner-buttons'>
                <Link to={`/edit/${id}`}>Edit</Link> / <Link to={`/delete/${id}`}>Delete</Link>
            </div>
        </>
    );
    const guestButton = (
        <div className='guest-buttons'>
            <button className='like-button' onClick={() => likePhoto(id)}>Like Photo</button>  /  <Link to={`/comment/${id}`}>Add Comment</Link>
        </div>
    );

    return (
        <div className="photo-details">
            <div className='photo-section'>
                {photoCard.name}, Genre: {photoCard.genre}
                <br></br>
                <br></br>
                <img src={photoCard.imageUrl} width={750} height={500} alt='' />
            </div>
            <div className='photo-likes'>
                Likes: {photoCard.likes}
            </div>
            <div className='button-section'>
                {user._id && (user._id === photoCard._ownerId
                    ? onwerButtons
                    : guestButton)}

            </div>
            <div className='comment-section'>
                <h3 className='comments-title'>Comments:</h3>
                <div className='comments-div'>
                    {!!comments && comments.map((x, index) => <p className='comment-text'>{index + 1}:  {x.comment}</p>)}
                </div>
            </div>
        </div>
    );
};

export default Details;