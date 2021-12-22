
import './MyPhotoCard.css';

import { Link } from 'react-router-dom';

const MyPhotoCard = ({
    photo
}) => {
    return (
        <div className='photo-card'>
            <p className="img"><img src={photo.imageUrl} width={450} height={300} alt=''/></p>
            <div className='button'>
                <Link to={`/details/${photo._id}`}>Details</Link>
            </div>
        </div>
    );
};

export default MyPhotoCard;