
import './AllPhotos.css'

import { useState, useEffect } from 'react';

import * as photo from '../../servecies/photo';
import PhotoCard from '../Home/PhotoCard';

const AllPhotos = () => {

    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        photo.getAllPhotos()
            .then(result => {
            
                setPhotos(result);
            })
            .catch(err => {
               alert(err);
            })

    }, []);

    return (
        <div className='all-photos'>
            {photos.map(x => <PhotoCard key={x._id} photo={x} />)}
        </div>
    );
};

export default AllPhotos;