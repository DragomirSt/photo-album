
import './StartPage.css';

import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='start-page'>
                <div className='title'>
                    Discover and share your photos
                    <button onClick={() => navigate('/login')} className='sign-button'>Sign Up</button>
                </div>
            </div>
        </>
    );
};

export default StartPage;