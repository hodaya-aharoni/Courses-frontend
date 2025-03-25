import axios from 'axios'



//קבלת רשימת כל הקורסים
export const getAllCourses = (pageNum) => {
    return axios.get(`${process.env.baseUrl}api/course/?page=${pageNum}&limit=12`)
}


//קבלת קורס בודד  
export const getCourse = (id) => {
    return axios.get(`${process.env.baseUrl}api/course/${id}`)
}

//אפשרות למחיקת קורס  
export const deleteCourse = (id, token) => {
    console.log(token);
    return axios.delete(`${process.env.baseUrl}api/course/${id}`, {
        headers: {
            authorization: token
        }
    })
}

//אפשרות להוספת קורס
export const addCourse = (course, token) => {
    console.log(token);
    return axios.post(`${process.env.baseUrl}api/course`, course, {
        headers: {
            authorization: token
        }
    })
}

export const updateCourse = (course, updateCourse, token) => {
    return axios.put(`${process.env.baseUrl}api/course/${course._id}`, updateCourse, {
        headers: {
            authorization: token
        }
    })
}

export const getTotalPages = () => {
    return axios.get(`${baseUrl}api/course/getCount/?limit=12`)
}

export const addImage = (data) => {
    return axios.post(process.env.baseUrlUpload, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
}








