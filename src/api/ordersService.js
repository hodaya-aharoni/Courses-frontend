import axios from 'axios'

// const baseUrl = "https://courses-fig4.onrender.com/api/order"


//אפשרות להוספת הזמנה
export const addOrder = (data, token) => {
    console.log(data)
    return axios.post(`${process.env.baseUrl}api/order`, data, {
        headers: {
            authorization: token
        }
    })
}

//אפשרות לקבלת רשימת הזמנות לפי משתמש
export const getOrderById = (id) => {
    return axios.get(`${process.env.baseUrl}api/order/${id}`)
}

//אפשרות לקבלת כל ההזמנות שבוצעו
export const getOrders = () => {
    return axios.get(`${process.env.baseUrl}api/order/`)
}





