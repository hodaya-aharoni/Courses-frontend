import { Button, Card, Input, Stack } from "@chakra-ui/react"
import { Field } from "../components/ui/field"
import { PasswordInput } from "../components/ui/password-input"
import { useDispatch, useSelector } from "react-redux";

import { userIn } from '../features/userSlice.js'
import { Link, useNavigate } from "react-router-dom"
import { signUp, getUser } from '../api/userService'
import { Controller, useForm } from "react-hook-form";
import Select from 'react-select';
import { useState } from "react";
import './signUp.css'

import * as React from "react";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Grow from "@mui/material/Grow";
import Fade from "@mui/material/Fade";

export const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let user = useSelector(state => state.users.currentUser)
    // const [isExit, setIsExit] = useState("")
    const [errorMessages, setErrorMessages] = React.useState([]);
    const [visibleError, setVisibleError] = React.useState(null); // 🔥 השגיאה הכללית שתופיע באנימציה
    const firstError = errors.firstName?.message || errors.lastName?.message || errors.password?.message || errors.email?.message || errors.role?.message;


    const onSubmit = (data) => {
        debugger

        debugger
        console.log(data)
        signUp(data.password, data.identity, data.email, data.firstName + " " + data.lastName, data.role ? data.role.value?.toLocaleUpperCase() : "USER").then(res => {
            console.log(res.data);
            dispatch(userIn(res.data))
            navigate("/")
        }).catch((err) => {

            let apiErrors = [];
            if (err.response?.data.massege == "email already exist")
                apiErrors.push("Email is already exist")


            else {
                apiErrors.push("")
            }

            setErrorMessages(apiErrors);


            // alert(err.message)
            console.log(err)
            // alert(err.response.data.message)
        })
    }


    React.useEffect(() => {
        if (errorMessages.length > 0) {
            setVisibleError(null); // מעלים את ההודעה הנוכחית
            setTimeout(() => {
                setVisibleError(errorMessages[0]); // מחליפים להודעה החדשה אחרי שההעלמה הסתיימה
            }, 200);
        } else {
            setVisibleError(null);
        }
    }, [errorMessages]);



    return <div className="form-signup"

    >
        <Card.Root className="card-signup"
            border="0px"
            // position="absolute"
            width="430px"



        >
            <Card.Header>
                <Card.Title>Sign up</Card.Title>
                <Card.Description color="white">
                    Fill in the form below to create an account
                </Card.Description>
            </Card.Header>
            <Card.Body marginBottom="-10px">
                <Stack gap="4" w="full">

                    <Field label="First Name" >
                        <Input {...register("firstName", {
                            required: "First Name is required", minLength: {
                                value: 2,
                                message: "First Name must be at least 2 characters long",
                            }
                        })}
                            className="input-signup" />

                    </Field>
                    <Field label="Last Name">
                        <Input {...register("lastName", {
                            required: "Last Name is required", minLength: {
                                value: 2,
                                message: "Last Name must be at least 2 characters long",
                            }
                        })} />

                    </Field>
                    <Field label="Password">
                        <PasswordInput {...register("password", {
                            required: "Password is required", minLength: {
                                value: 7,
                                message: "Password must be at least 7 characters long",
                            }
                        })} className="input-signup" />
                        {/* הצגת שגיאה אם יש */}
                    </Field>
                    <Field label="Email">
                        <Input {...register("email", {
                            required: "Email is required", pattern: {
                                value: emailRegex,
                                message: "Enter a valid email"
                            }
                        })} className="input-signup" />

                    </Field>



                    {user?.role === "ADMIN" && (
                        <Field label="Role" style={{ color: "white" }}>
                            <Controller
                                name="role"
                                control={control}
                                rules={{
                                    required: "Role is required",
                                }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={[
                                            { value: "user", label: "User" },
                                            { value: "admin", label: "Admin" },
                                        ]}
                                        placeholder="Select a role"

                                        styles={{
                                            control: (base, state) => ({
                                                ...base,
                                                color: "black",
                                                backgroundColor: "white",
                                                borderColor: state.isFocused ? "#ffffff" : "#cccccc",  // צבע גבול אם יש פוקס
                                                outline: "none",  // ביטול הקו החיצוני
                                                boxShadow: state.isFocused ? "0 0 10px rgba(196, 198, 200, 0.5)" : "none", // הצללה עדינה אם יש פוקס
                                                borderWidth: "0px", // גבול בעובי 2px
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
                    )}




                </Stack>
                {/* <p>{<span className="error-message">{isExit}</span>}</p> */}
            </Card.Body >
            {/* 
            {errors.firstName && <Alert severity="error" className="error-container">{errors.firstName.message}</Alert>}
            {errors.lastName && <Alert severity="error" className="error-container">{errors.lastName.message}</Alert>}
            {errors.password && <Alert severity="error" className="error-container">{errors.password.message}</Alert>}
            {errors.email && <Alert severity="error" className="error-container">{errors.email.message}</Alert>}
            {errors.role && <Alert severity="error" className="error-container">{errors.role.message}</Alert>} */}

            <Collapse in={Boolean(visibleError)} timeout={300}>
                <Fade in={Boolean(visibleError)} timeout={500}>
                    <div className="error-container">
                        {visibleError && (
                            <Alert severity="error" className="error-message">
                                {visibleError}
                            </Alert>
                        )}
                    </div>
                </Fade>
            </Collapse>



            <div className="error-container">
                {firstError && (
                    <Grow in={Boolean(firstError)} timeout={500} key={firstError}>
                        <Alert severity="error" className="error-message">
                            {firstError}
                        </Alert>
                    </Grow>
                )}
            </div>
            <Card.Footer justifyContent="flex-end">

                <Button variant="solid" width="385px" color="black" backgroundColor="white" onClick={handleSubmit(onSubmit)}>Sign in</Button>
            </Card.Footer>
        </Card.Root>
    </div>


}

