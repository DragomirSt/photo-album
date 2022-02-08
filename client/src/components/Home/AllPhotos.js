
import './AllPhotos.css';
import './PhotoCard.css';

import { useState, useEffect } from 'react';

import * as photo from '../../servecies/photo';
import PhotoCard from '../Home/PhotoCard';

const AllPhotos = () => {

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        photo.getAllPhotos()
            .then(result => {

                setPhotos(result);
            })
            .catch(err => {
                alert(err);
            })
            .finally(() => {
                setLoading(false);
            })

    }, []);

    if (loading) {
        return (
            <div className='loading-div'>
                <div className='loading-box-text'>
                    <h2 className='loading-text'>Loading photos ...</h2>
                </div>
            </div>
        );
    };

    return (
        <div className='all-photos'>
            {photos.map(x => <PhotoCard key={x._id} photo={x} />)}
        </div>
    );
};

export default AllPhotos;