
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as photo from '../../servecies/photo';

const DeleteComponent = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        photo.deletePhoto(id);
        navigate('/');

    }, [id, navigate]);

    return null;
}

export default DeleteComponent;