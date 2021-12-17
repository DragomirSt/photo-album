
import { Link } from 'react-router-dom';


const PhotoCard = ({
    photo
}) => {
    return (
        <div>
            <h2>{photo.name}</h2>
            <h2>{photo.genre}</h2>
            <Link to={`/delete/${photo._id}`}>Delete</Link>
        </div>
    );
};

export default PhotoCard