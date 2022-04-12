
import { Link } from 'react-router-dom';

const PhotoCard = ({
    photo
}) => {
    return (
        <div className='photo-card'>
            <div>
                <p className="img"><img src={photo.imageUrl} width={450} height={300} alt='' /></p>
            </div>
            <span className='button'>
                <Link to={`/details/${photo._id}`}>Details</Link>
            </span>
        </div>
    );
};

export default PhotoCard;