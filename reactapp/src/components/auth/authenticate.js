
export const isLoggedIn = () => {
    const data = localStorage.getItem("data");
    if (data != null) return true;
    return false;
}
export const doLoggedIn = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data)); // because localStorage can store string value not object
    next();
}

export const doLoggedOut = (next) => {
    localStorage.removeItem("data");
    next();
}

export const getCurrentUserDetail = () => {
    if (isLoggedIn()) return JSON.parse(localStorage.getItem("data")).user;
    return undefined;
}