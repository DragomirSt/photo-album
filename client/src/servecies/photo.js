
export const createCard = async (data, token) => {

    const respone = await fetch('/data/photos', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });
    let result = await respone.json();
    return result;
};

export const getAllPhotos = () => {

    return fetch('/data/photos', {})
        .then(res => res.json());
};

export const deletePhoto = (id) => {

    return fetch(`/data/photos/${id}`, {
        method: 'DELETE'
    });
};

export const getCertainPhoto = (id) => {

    return fetch(`/data/photos/${id}`)
        .then(res => res.json());
};

export const updatePhoto = (data, id) => {

    return fetch(`/data/photos/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(result => {
            return result;
        });
};