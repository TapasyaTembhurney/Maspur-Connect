const KEY = 'isLoggedIn';

export const isLoggedIn = () => localStorage.getItem(KEY) === 'true';
export const login = () => localStorage.setItem(KEY,'true');
export const logout = () => localStorage.removeItem(KEY);