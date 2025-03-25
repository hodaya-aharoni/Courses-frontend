// import React from "react";
// import { FaCreditCard, FaLock, FaExclamationCircle } from "react-icons/fa";
// import "./checkout.css";
// import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../features/cartSlice.js";
import { addOrder } from "../api/ordersService";
// import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { useForm } from "react-hook-form";
// import Footer from "../component/Footer";

// const Checkout = () => {
//   const courses = useSelector((state) => state.cart.arr);
//   const sum = useSelector((state) => state.cart.sum);
//   const count = useSelector((state) => state.cart.count);
//   const userId = useSelector((state) => state.users.currentUser);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();


//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const show = () => {
//     Swal.fire({
//       title: "Payment sent successfully!",
//       text: "Thank you for your purchase!",
//       icon: "success",
//       confirmButtonText: "Close",
//       confirmButtonColor: "#3085d6",
//       background: "#fefefe",
//       customClass: { popup: "thank-you-popup" },
//     }).then(() => {
//       navigate("/");
//     });
//   };

//   const onSubmit = async (data) => {
//     if (!userId) return navigate("/login");

//     try {
//       alert("Processing payment...");
//       await addOrder({ count, totalSum: sum, courses, userId }, userId.token);
//       show();
//       dispatch(deleteCart());
//     } catch (err) {
//       if (err.response?.status === 401) navigate("/login");
//       console.error(err);
//     }
//   };

//   return (<>

//     <div className="checkout-container">
//       <h2 className="checkout-title">Payment Information</h2>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-group">
//           <label>Card Type</label>
//           <select className="form-control" {...register("cardType")}>
//             <option>Visa</option>
//             <option>Mastercard</option>
//             <option>American Express</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Card Number</label>
//           <div className="input-wrapper">
//             <input
//               type="text"
//               className={`form-control ${errors.cardNumber ? "error" : ""}`}
//               placeholder="**** **** **** ****"
//               maxLength="19"
//               {...register("cardNumber", {
//                 required: "Card number is required",
//                 pattern: {
//                   value: /^\d{16}$/,
//                   message: "Card number must be 16 digits",
//                 },
//               })}
//             />
//             <FaCreditCard className="input-icon" />
//           </div>
//           {errors.cardNumber && (
//             <p className="error-message">
//               <FaExclamationCircle /> {errors.cardNumber.message}
//             </p>
//           )}
//         </div>

//         <div className="form-row">
//           <div className="form-group half">
//             <label>Expiry Date</label>
//             <div className="input-wrapper">
//               <input
//                 type="text"
//                 className={`form-control ${errors.expiryDate ? "error" : ""}`}
//                 placeholder="MM/YY"
//                 maxLength="5"
//                 {...register("expiryDate", {
//                   required: "Expiry date is required",
//                   pattern: {
//                     value: /^(0[1-9]|1[0-2])\/\d{2}$/,
//                     message: "Expiry date must be in MM/YY format",
//                   },
//                 })}
//               />
//             </div>
//             {errors.expiryDate && (
//               <p className="error-message">
//                 <FaExclamationCircle /> {errors.expiryDate.message}
//               </p>
//             )}
//           </div>

//           <div className="form-group half">
//             <label>CVV</label>
//             <div className="input-wrapper">
//               <input
//                 type="password"
//                 className={`form-control ${errors.cvv ? "error" : ""}`}
//                 placeholder="***"
//                 maxLength="4"
//                 {...register("cvv", {
//                   required: "CVV is required",
//                   pattern: {
//                     value: /^\d{3,4}$/,
//                     message: "CVV must be 3 or 4 digits",
//                   },
//                 })}
//               />
//               <FaLock className="input-icon" />
//             </div>
//             {errors.cvv && (
//               <p className="error-message">
//                 <FaExclamationCircle /> {errors.cvv.message}
//               </p>
//             )}
//           </div>
//         </div>

//         <button type="submit" className="pay-button">
//           Pay Now
//         </button>
//       </form>



//     </div>
//     <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', width: "300px", height: "250px" }}>
//       <div style={{ width: '300px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
//         <h3 style={{ borderBottom: '1px solid #ddd' }}>Total</h3>
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
//           <span>Total:</span>
//           <span>${sum}</span>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
//           <span>Count:</span>
//           <span>{count}</span>
//         </div>
//         <button style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '15px', width: '100%', borderTop: '1px solid #ddd' }}>
//           <Link to="/cart" >Cart</Link>
//         </button>
//         <p style={{ marginTop: '10px', textAlign: 'center' }}>We Accept: PayPal VISA</p>
//       </div>
//     </div>


//   </>
//   );
// };

// export default Checkout;
import { Button, Card, Input, Stack } from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { PasswordInput } from "../components/ui/password-input";
import { useForm } from "react-hook-form";
import { login } from "../api/userService";
import { userIn } from "../features/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./login.css";
import Select from 'react-select';
import * as React from "react";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Grow from "@mui/material/Grow";
import Fade from "@mui/material/Fade"; //
import { Controller } from "react-hook-form";
import { FaCreditCard, FaExclamationCircle, FaLock } from "react-icons/fa";
import './checkout.css'

const Checkout = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm();

  // const location = useLocation();
  // const [errorMessages, setErrorMessages] = React.useState([]);
  // const [visibleError, setVisibleError] = React.useState(null); // 🔥 השגיאה הכללית שתופיע באנימציה
  const firstError = errors.cardNumber?.message || errors.expiryDate?.message || errors.cvv?.message;

  const courses = useSelector((state) => state.cart.arr);
  const sum = useSelector((state) => state.cart.sum);
  const count = useSelector((state) => state.cart.count);
  const userId = useSelector((state) => state.users.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();




  const show = () => {
    Swal.fire({
      title: "Payment sent successfully!",
      text: "Thank you for your purchase!",
      icon: "success",
      confirmButtonText: "Close",
      confirmButtonColor: "#3085d6",
      background: "#fefefe",
      customClass: { popup: "thank-you-popup" },
    }).then(() => {
      navigate("/");
    });
  };

  const onSubmit = async (data) => {
    if (!userId) return navigate("/login");

    try {
      alert("Processing payment...");
      await addOrder({ count, totalSum: sum, courses, userId }, userId.token);
      show();
      dispatch(deleteCart());
    } catch (err) {
      if (err.response?.status === 401) navigate("/login");
      console.error(err);
    }
  };

  const handleCvvChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // מסנן תווים לא מספריים

    // מוודא שהמשתמש לא יוכל להקליד יותר מ-4 ספרות
    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    e.target.value = value; // מעדכן את הערך בשדה
  };


  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // מסנן תווים לא מספריים

    // מוודא שהמשתמש לא יוכל להקליד יותר מ-4 ספרות (כולל '/')
    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    // מוסיף '/' אחרי 2 תווים
    const formattedValue = value
      .replace(/(\d{2})(?=\d)/g, "$1/"); // מוסיף קו אלכסוני אחרי 2 תווים

    e.target.value = formattedValue; // מעדכן את הערך בשדה
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // מסנן תווים לא מספריים

    // מגביל ל-16 ספרות בלבד
    if (value.length > 16) {
      value = value.slice(0, 16);
    }

    // מוסיף רווח כל 4 תווים
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    e.target.value = formattedValue; // מעדכן את הערך בשדה
  };

  // React.useEffect(() => {

  //   if (errorMessages.length > 0) {
  //     setVisibleError(null); // מעלים את ההודעה הנוכחית
  //     setTimeout(() => {
  //       setVisibleError(errorMessages[0]); // מחליפים להודעה החדשה אחרי שההעלמה הסתיימה
  //     }, 200);
  //   } else {
  //     setVisibleError(null);
  //   }
  // }, [errorMessages]);

  return (
    <div className="">
      <Card.Root className="form-checkout">
        <Card.Header>
          <Card.Title >Payment Information</Card.Title>
          {/* <Card.Description color="white">Fill in the form below to log in to your account</Card.Description> */}
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">

            <Field label="Card Type" style={{ color: "black" }}>
              <Controller
                name="cardType"
                control={control}
                rules={{
                  required: "Card type is required", // אזהרה אם לא בחרו כרטיס
                }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={[
                      { value: "Visa", label: "Visa" },
                      { value: "Mastercard", label: "Mastercard" },
                      { value: "American Express", label: "American Express" },
                    ]}
                    placeholder="Select a card type"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        color: "black",
                        width: "250px",
                        backgroundColor: "white",
                        border: "1px solid black",
                        borderColor: state.isFocused ? "#ffffff" : "#cccccc",  // צבע גבול אם יש פוקס
                        outline: "none",  // ביטול הקו החיצוני
                        boxShadow: state.isFocused ? "0 0 10px rgba(196, 198, 200, 0.5)" : "none", // הצללה עדינה אם יש פוקס

                        transition: "all 0.3s ease-in-out", // אפקט מעבר חלק
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: "black",


                      }),
                      option: (base, { isFocused }) => ({
                        ...base,
                        color: "black",
                        backgroundColor: isFocused ? "white" : "white",

                      }),
                    }}
                  />
                )}
              />
            </Field>
            {/* <button onClick={
                            () => {
                                navigate('/forgotPassword')
                            }
                        }>שכחת סיסמא?</button> */}
            <Field label="Card Number" style={{ color: "black" }}>
              <Input
                {...register("cardNumber", {
                  required: "Card number is required",
                  pattern: {
                    value: /^\d{16}$/, // תוודא שזו בדיוק 16 ספרות
                    message: "Card number must be 16 digits",
                  },
                })}
                className={`input-checkout ${errors.cardNumber ? "error-border" : ""}`}
                placeholder="**** **** **** ****"
                maxLength={16}  // 16 ספרות + 3 רווחים
                // onInput={handleCardNumberChange}  // פונקציה שמוסיפה רווחים אחרי כל 4 תווים
              />
              <FaCreditCard className="input-icon" style={{ marginTop: "5%" }} />

            </Field>




            <div className="form-row">
              <Field label="Expiry Date" style={{ color: "black" }}>
                <Input
                  {...register("expiryDate", {
                    required: "Expiry date is required",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/, // תוקף - חייב להיות בתבנית MM/YY
                      message: "Expiry date must be in MM/YY format",
                    },
                  })}
                  className={`input-checkout ${errors.cvv ? "error-border" : ""}`}
                  placeholder="MM/YY"
                  maxLength={5}  // כולל 4 תווים + 1 סימן '/'
                  onInput={handleExpiryDateChange}  // מניעת הכנסת תו נוסף ומחלק את המספרים
                />
                {/* {errors.expiryDate && (
                <p className="error-message">
                  <FaExclamationCircle /> {errors.expiryDate.message}
                </p>
              )} */}
              </Field>



              <Field label="CVV" style={{ color: "black" }}>
                <div className="input-wrapper">
                  <Input
                    {...register("cvv", {
                      required: "CVV is required",
                      pattern: {
                        value: /^\d{3,4}$/, // חייב להיות 3 או 4 ספרות
                        message: "CVV must be 3 or 4 digits",
                      },
                    })}
                    className={`input-checkout ${errors.cvv ? "error-border" : ""}`}
                    placeholder="***"
                    maxLength={4}  // גבול של 4 תווים
                    onInput={handleCvvChange}  // מניעת הכנסת תו נוסף
                  />
                  <FaLock className="input-icon" />
                  {/* {errors.cvv && (
      <p className="error-message">
        <FaExclamationCircle /> {errors.cvv.message}
      </p>
    )} */}
                </div>
              </Field></div>
          </Stack>
        </Card.Body>
        {/* 
                {errors.email && <Alert severity="error" className="error-container">{errors.email.message}</Alert>}
                {errors.password && <Alert severity="error" className="error-container">{errors.password.message}</Alert>}
                {errors.verification && <Alert severity="error" className="error-container">{errors.verification.message}</Alert>} */}

        {/* 🔥 אזור שגיאות כללי עם אפקט אנימציה */}

        {/* <Collapse in={Boolean(visibleError)} timeout={300}>
          <Fade in={Boolean(visibleError)} timeout={500}>
            <div className="error-container">
              {visibleError && (
                <Alert severity="error" className="error-message">
                  {visibleError}
                </Alert>
              )}
            </div>
          </Fade>
        </Collapse> */}


        <div className="error-container">
          {firstError && (
            <Grow in={Boolean(firstError)} timeout={500} key={firstError}>
              <Alert severity="error" className="error-message">
                {firstError}
              </Alert>
            </Grow>
          )}
        </div>

        <Card.Footer justifyContent="flex-end" >


          <Button className="btn-checkout" variant="solid" onClick={handleSubmit(onSubmit)} disabled={sum === 0}>
            Pay Now
          </Button>
        </Card.Footer>

      </Card.Root>
    </div>
  );
};

export default Checkout;











