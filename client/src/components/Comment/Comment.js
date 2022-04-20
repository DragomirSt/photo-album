
import './Comment.css';

import { useParams, useNavigate } from "react-router-dom";
import useAuthContext from '../../hooks/useAuth';
import { successNotification, errorNotification } from '../../notifications/notification';

const Comment = () => {
    const { id } = useParams();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const addCommentHandler = (e) => {

        e.preventDefault()
        let formData = new FormData(e.target)
        let comment = formData.get('comment');
        if (comment.length < 3) {
            return errorNotification(['Please write your comment.']);
        }

        return fetch('/data/photos/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': user.accessToken
            },
            body: JSON.stringify({ commentId: id, comment, commentedBy: id })
        })
            .then(res => res.json())
            .then(result => {
                successNotification([result.message]);
                return result;
            })
            .catch(err => {
                errorNotification([err]);
            })
            .finally(() => {
                setTimeout(() => {
                    navigate(`/details/${id}`);
                }, 1700);
            });
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