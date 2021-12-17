
import { useState, useEffect } from 'react';

import * as photo from '../../servecies/photo';
import PhotoCard from '../Home/PhotoCard';

const AllPhotos = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photo.getAllPhotos()
            .then(result => {
                console.log(result)
                setPhotos(result);
            })

    }, []);

    return (
        <div>
            <ul>
            {photos.map(x => <PhotoCard key={x._id} photo={x}/>)}
            </ul>
        
        </div>
    )
}

export default AllPhotos;