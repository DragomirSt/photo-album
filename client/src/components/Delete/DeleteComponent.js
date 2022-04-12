
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as photo from '../../servecies/photo';
import { successNotification, errorNotification } from "../../notifications/notification";

const DeleteComponent = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        photo.deletePhoto(id)
            .then(res => res.json())
            .then(response => {
                successNotification([response.message]);
            })
            .catch(err => {
                errorNotification([err]);
            })
            .finally(() => {
                setTimeout(() => {
                    navigate('/create');
                }, 1700)
            });

    }, [id, navigate]);

    return null;
}

export default DeleteComponent;