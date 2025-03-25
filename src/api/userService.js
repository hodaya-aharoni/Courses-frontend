import axios from 'axios'

// const baseUrl = "https://courses-fig4.onrender.com/api/user"


//אפשרות לכניסת משתמש
export const login = (email,password) => {
    return axios.post(`${process.env.baseUrl}api/user/logIn`,{email,password})
}

//אפשרות להוספת משתמש
export const signUp = (password,tz,email,name,role) => {
    return axios.post(`${process.env.baseUrl}api/user`,{password,tz,email,name,role})
}

//קבלת כל המשתמשים
export const getUser = () => {
    return axios.get(`${process.env.baseUrl}api/user`)
}









