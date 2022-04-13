
import './MyPhotos.css';

import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import * as photo from '../../servecies/photo';
import MyPhotoCard from "./MyPhotoCard";

import toast from 'react-hot-toast';
import { loadingNotification, errorNotification } from '../../notifications/notification';

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
                errorNotification([err]);
            })
            .finally(() => {
                toast.dismiss(loadingNotification());
            });

    }, [user._id]);

    return (
        <div className='my-photos'>
            {myPhoto.map(x => <MyPhotoCard key={x._id} photo={x} />)}
        </div>
    );
};

export default MyPhotos;