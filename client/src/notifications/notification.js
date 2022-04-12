
import toast from "react-hot-toast";

export const errorNotification = (array) => {
    toast.error([array[0]], {
        duration: 3000,
        position: 'top-center',

        style: {
            fontSize: '22px',
            padding: '12px',
            height: '90px',
            width: '440px',
            background: '#9e5852',
        },
    });
};

export const successNotification = (array) => {
    toast.success([array[0]], {
        duration: 1500,
        position: 'top-center',

        style: {
            fontSize: '22px',
            padding: '12px',
            height: '90px',
            width: '440px',
            background: '#52799e',
        },
    });
};

export const loadingNotification = () => {
    toast.loading('Loading ...', {
        position: 'top-center',
        style: {
            fontSize: '22px',
            padding: '12px',
            height: '90px',
            width: '440px',
            background: '#4e9fc7',
        },
    });
};