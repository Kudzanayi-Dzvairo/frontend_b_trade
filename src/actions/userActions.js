export const createUser = userObj => {
    return { type: "Create_User", payload:userObj}
};

export const loginUser = userObj => {
    return {type: "LOGIN_USER", payload: userObj}
}

export const setUser = userObj => {
    return { type: "SET_USER", payload: userObj };
}

export const logOut = userInfo => {
    return {type: 'LOG-OUT'}
}

export const addUser = userInfo => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({ user: userInfo })
        })
            .then(resp => resp.json())
            .then(json => {
                dispatch(createUser(json));
            });
    };
}

export const checkToken = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/profile", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
            .then(resp => resp.json())
            .then(json => dispatch(setUser(json)));
    };
};

export const getAuth = userInfo => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({ user: userInfo })
        })
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                dispatch(loginUser(json));
            });
    };
}