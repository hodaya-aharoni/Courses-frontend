
import './App.css'
import CoursesList from './pages/CoursesList'
import { Provider } from "../src/components/ui/provider"
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'
import CourseDetails from './pages/CourseDetails'
import { SignUp } from './pages/SignUp'
import Login from './pages/LogIn'
import NavBar from './component/NavBar'

import { loadStripe } from "@stripe/stripe-js";
import AddCourse from './pages/AddCourseForm'
import Checkout from './pages/Checkout'
import MyOrders from './pages/MyOrders'
import HomePage from './pages/HomePage.jsx'
import Footer from './component/Footer'
import CheckEmail from './pages/ForgotPassword'
import ForgotPassword from './pages/ForgotPassword'
import ScrollToTop from './component/ScrollToTop'



// import F from './pages/F'




function App() {

  


  const stripePromise = loadStripe("pk_test_51QzFsb4SREYpQGgTFYbNdzItzEYcbYkkUqgJsd98a2vnvjpvTW4gU6m3f374ePldLZO1kAA7E7vu0pXBLQbVwQiE001oxluMXN")
  return (

    <>
      <Provider>
 
        <NavBar />
        <ScrollToTop /> {/* הכנס את ScrollToTop כאן */}
      
    {/* <F/> */}
  
   
      
        {/* <Avatar/> */}
        {/* <Avatar className="letter" sx={{ bgcolor: stringToColor("llll") }}>{"llll"[0]}</Avatar> */}



        <Routes>
     
          <Route path="/" element={<CoursesList type={'list'}/>} >
            <Route path="details/:id" element={<CourseDetails />} />
          </Route>
          <Route path="/cart" element={<Cart />} />

          <Route />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/add" element={<AddCourse key="Add"/>} />
          <Route path="/edit/:id" element={<AddCourse key="Edit"/>} />
          <Route path="/myOrders" element={<MyOrders  status={"One"}  key="One"/>} />
          <Route path="/orders" element={<MyOrders status={"All"} key="All"/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />



          <Route path="/checkout" element={<Checkout/>}/>
      

        </Routes>  
        <Footer/>  
      </Provider>

      {/* 
      <Provider>
        <NavBar />
        <CoursesList />

      </Provider> */}





    </>
  )
}

export default App





// import { Button, Card, Input, Stack, Textarea } from "@chakra-ui/react"
// import { Field } from "../components/ui/field"
// import { AddImage } from "../component/AddImage";
// import { useForm, useFieldArray, FormProvider } from "react-hook-form";
// import { useSelector } from "react-redux";
// import { addCourse } from '../api/courseService.js'
// import { useNavigate } from "react-router-dom";

// const AddCourseForm = () => {
//   let navigate = useNavigate()
//   let currentUser = useSelector(state => state.users.currentUser)
//   const { register, handleSubmit, control, formState: { errors }, watch } = useForm({});

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "locations" // שם המערך של הקטגוריות
//   });




//   const onSubmit = data => {
//     console.log(data)
//     console.log(currentUser)
//     data = { ...data, categories: ["DESIGN"], img: "hhhhh" }
//     addCourse(data, currentUser?.token).then(res => {
//       alert("add course")
//     }
//     ).catch((err) => {

//       console.log(err)
//       alert("שגיאה" + err.response.data.title)
//       navigate('/login',{ state: { referrer: 'add'} })

//     })
//     // console.log(data);
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <Card.Root border="0px" width="600px" >
//         <Card.Header>
//           <Card.Title>Add new course</Card.Title>
//           <Card.Description>
//             Fill in the form below to log in to your account
//           </Card.Description>
//         </Card.Header>
//         <Card.Body>
//           <Stack gap="4" w="full">
//             <Field label="Name">
//               <Input {...register("name", {
//                 required: "Name is required", minLength: {
//                   value: 2,
//                   message: "Name must be at least 2 characters long",
//                 }
//               })} />
//               {errors.name && <span className="error-message">{errors.name.message}</span>}
//             </Field>



//             <Field label="Describe" invalid>
//               <Textarea name="notes" {...register("describe", {
//                 required: "Describe is required", minLength: {
//                   value: 25,
//                   message: "Describe must be at least 25 characters long",
//                 }
//               })}
//                 style={{
//                   border: "1px solid #ccc",  // מסיר את האדום ברירת מחדל
//                   borderRadius: "5px",
//                   outline: "none"  // מבטל אפקט כחול/אדום של ברירת מחדל
//                 }}
//                 onFocus={(e) => {
//                   e.target.style.border = "1px solid black";  // מסגרת שחורה
//                   e.target.style.outline = "1px solid black"; // outline שחור
//                 }}
//                 onBlur={(e) => {
//                   e.target.style.border = "1px solid #ccc"; // מסגרת אפורה ברירת מחדל
//                   e.target.style.outline = "none"; // מבטל את ה-outline אחרי שמסירים את הפוקוס
//                 }}

//               />
//               {errors.describe && <span className="error-message">{errors.describe.message}</span>}
//             </Field>

//             <Field label="Opening Date">
//               <Input
//                 type="date"
//                 {...register("openingDate", {
//                   required: "Opening Date is required",
//                 })}
//               />
//               {errors.openingDate && <span className="error-message">{errors.openingDate.message}</span>}
//             </Field>

//             <Field label="Course Length">
//               <Input
//                 type="number"
//                 {...register("long", {
//                   required: "Course length is required",
//                   min: { value: 0, message: "Course length cannot be negative" },
//                   max: { value: 50, message: "Course length can't exceed 50" }
//                 })}
//               />
//               {errors.long && <span className="error-message">{errors.long.message}</span>}
//             </Field>


//             {/* <Field label="Image">
//               <AddImage {...register("image", { required: "Image is required" })} />
//               {errors.image && <span className="error-message">{errors.image.message}</span>}
//             </Field> */}

//             <Field label="Image">
//               <AddImage />
//             </Field>

//             <Field label="Price">
//               <Input
//                 type="text"
//                 {...register("price", {
//                   required: "Price is required",
//                   validate: value => {
//                     const numberValue = parseFloat(value);
//                     if (isNaN(numberValue)) {
//                       return "Price must be a valid number";
//                     }
//                     if (numberValue <= 200) {
//                       return "Price must be above 200";
//                     }
//                     return true;
//                   }
//                 })}
//               />
//               {errors.price && <span className="error-message">{errors.price.message}</span>}
//             </Field>




//             <Field label="Motivation" invalid>
//               <Textarea name="Motivation" {...register("motivation", {
//                 required: "Motivation is required", minLength: {
//                   value: 25,
//                   message: "Motivation must be at least 25 characters long",
//                 }
//               })}
//                 style={{
//                   border: "1px solid #ccc",  // מסיר את האדום ברירת מחדל
//                   borderRadius: "5px",
//                   outline: "none"  // מבטל אפקט כחול/אדום של ברירת מחדל
//                 }}
//                 onFocus={(e) => {
//                   e.target.style.border = "1px solid black";  // מסגרת שחורה
//                   e.target.style.outline = "1px solid black"; // outline שחור
//                 }}
//                 onBlur={(e) => {
//                   e.target.style.border = "1px solid #ccc"; // מסגרת אפורה ברירת מחדל
//                   e.target.style.outline = "none"; // מבטל את ה-outline אחרי שמסירים את הפוקוס
//                 }}
//               />
//               {errors.motivation && <span className="error-message">{errors.motivation.message}</span>}
//             </Field>





//             <Field label="Locations">
//               {fields.map((field, index) => (
//                 <div key={field.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                   <Input
//                     type="text"
//                     {...register(`locations.${index}`, { required: 'Location is required' })}
//                   // style={{ ...inputStyle, marginBottom: 0 }}
//                   />
//                   <Button
//                     type="button"
//                     onClick={() => remove(index)}
//                   // style={removeButtonStyle}
//                   >
//                     Remove
//                   </Button>
//                 </div>
//               ))}
//               <Button
//                 type="button"
//                 onClick={() => append('')}
//               // style={{ ...buttonStyle, backgroundColor: '#28a745' }}
//               >
//                 + Add Location
//               </Button>
//               {errors.locations && <p style={errorStyle}>At least one location is required</p>}
//             </Field>

//           </Stack>
//         </Card.Body>
//         <Card.Footer justifyContent="flex-end">

//           <Button variant="solid" onClick={handleSubmit(onSubmit)}>ADD</Button>
//         </Card.Footer>
//       </Card.Root>

//     </div>


//   );
// }

// export default AddCourseForm;