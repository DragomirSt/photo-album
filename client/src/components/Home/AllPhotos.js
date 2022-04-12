
import './AllPhotos.css';
import './PhotoCard.css';

import { useState, useEffect } from 'react';

import * as photo from '../../servecies/photo';
import PhotoCard from '../Home/PhotoCard';

import toast from 'react-hot-toast';
import { loadingNotification } from '../../notifications/notification';

const AllPhotos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        loadingNotification();

        photo.getAllPhotos()
            .then(result => {

                setPhotos(result);
            })
            .catch(err => {
                alert(err);
            })
            .finally(() => {
                toast.dismiss(loadingNotification());
            });
            
    }, []);

    return (
        <div className='all-photos'>
            {photos.map(x => <PhotoCard key={x._id} photo={x} />)}
        </div>
    );
};

export default AllPhotos;