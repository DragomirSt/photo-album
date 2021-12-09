

export const register = async(email, password) => {
    const res = await fetch('/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    let result = await res.json();
    return result;
};

export const login = async (email, password) => {
    const res = await fetch('/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    let result = await res.json();

    if (res.ok) {
        return result;
    }
    throw result.message;
};