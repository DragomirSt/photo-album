
export const createCard = (data, token) => {

    return fetch('/data/photos', {
        method: 'POST',
        headers: {
            'X-Authorization': token
        },
        body: data
    })
        .then(result => {
            return result
        });

};

export const getAllPhotos = () => {

    return fetch('/data/photos', {})
        .then(res => res.json());

}

export const deletePhoto = (id) => {

    return fetch(`/data/photos/${id}`, {
        method: 'DELETE'
    });
};

export const getCertainPhoto = (id) => {

    return fetch(`/data/photos/${id}`)
        .then(res => res.json());
}


