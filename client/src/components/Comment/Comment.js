
import './Comment.css';

import { useParams, useNavigate } from "react-router-dom";

const Comment = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const addCommentHandler = (e) => {

        e.preventDefault()
        let formData = new FormData(e.target)
        let comment = formData.get('comment');

        return fetch('/data/photos/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ commentId: id, comment, commentedBy: id })
        })
            .then(res => {
                return res.json();
            })
            .catch(err => {
                alert(err);;
            })
            .finally(() => {
                navigate(`/details/${id}`);
            })
    };

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" method='POST' onSubmit={addCommentHandler}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn-submit" type="submit" />
            </form>
        </article>
    );
};

export default Comment;