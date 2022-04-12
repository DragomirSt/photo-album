
import './MyPhotos.css';

import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import * as photo from '../../servecies/photo';
import MyPhotoCard from "./MyPhotoCard";

import toast from 'react-hot-toast';
import { loadingNotification } from '../../notifications/notification';

const MyPhotos = () => {
    const { user } = useContext(AuthContext);
    const [myPhoto, setMyPhotos] = useState([]);

    useEffect(() => {
        loadingNotification();

        photo.getAllPhotos()
            .then(result => {
                const photos = result.filter(x => x._ownerId === user._id);
                setMyPhotos(photos);
            })
            .catch(err => {
                alert(err);
            })
            .finally(() => {
                toast.dismiss(loadingNotification());
            });

    }, [user._id]);

    const noPhotos = (
        <div className='no-photo-section'>
            <section className='no-photo-text'>
                <h3>You have no photos uploaded</h3>
            </section>
        </div>

    );
    return (
        <div className='my-photos'>
            {myPhoto.length > 0
                ? myPhoto.map(x => <MyPhotoCard key={x._id} photo={x} />)
                : noPhotos}
        </div>
    );
};

export default MyPhotos;