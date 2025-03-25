import { Badge, Box, Button, Card, HStack, Image, Text } from "@chakra-ui/react"
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';


import './course.css'
import { deleteCourse } from '../api/courseService.js'
import { removeFromCart ,addToCart,isOpenDrawer} from '../features/cartSlice'
import AlertDialog from "./AlertDialog";


// קומפוננטה של קורס בודד ברשימת הקורסים
const Course = ({ course, onDelete,type ,setIsCourse}) => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let user = useSelector(state => state.users.currentUser)

    const deleted = async () => {
        try {
            await deleteCourse(course._id, user?.token)
            onDelete(course._id)
            dispatch(removeFromCart(course._id))
        }
        catch (ex) {
            if(ex.response.status === 401)
                navigate('/login')
            console.log(ex);
            alert(ex.response.data.message)
        }
    };

    return (
        <Card.Root flexDirection="row" overflow="hidden" height="246px" width="390px" border="none">

            <Image
                objectFit="cover"
                width="30%"
                height="246px"
                src={`${process.env.baseUrlUploads}${course?.img}`}
                alt={`${course?.name} image`}
            />

            <Box>

                <Card.Body>
                    <Card.Title mb="2">{course?.name[0].toUpperCase() + course?.name.slice(1).toLowerCase()}</Card.Title>
                    <Card.Description style={{color:"black"}}>
                        {course?.motivation}
                    </Card.Description>
                    <HStack mt="4">
                        {course?.categories.map((item) => (
                            <Badge key={item}>{item[0].toUpperCase() + item.slice(1).toLowerCase()}</Badge>
                        ))}
                    </HStack>
                </Card.Body>

                <Card.Footer>
                    <HStack spacing={4}>
                     {type=='Show' &&
                    <Link to={"/details/" + course?._id} target="_blank" rel="noopener noreferrer">
                               <Button>Show Details</Button>
                    </Link>}

                    {type!='Show' &&
                        <Link to={"details/" + course?._id}>
                            <Button onClick={()=>{setIsCourse(course?.name)}}>Show Details</Button>
                        </Link>}
                        <button 
                            className="add-to-cart"
                            onClick={() => {
                                dispatch(addToCart(course))
                                dispatch(isOpenDrawer(true))
                            }}
                        >
                            <AddShoppingCartIcon sx={{ color: "black" }} />
                        </button>
                        {user?.role === "ADMIN" && <AlertDialog deleted={deleted} />}
                        {user?.role === "ADMIN" && (
                            <button
                                onClick={() => {
                                    navigate(`/edit/${course?._id}`, { state: { status: "EDIT", details: { course } } })
                                }}
                            >
                                <DriveFileRenameOutlineOutlinedIcon />
                            </button>
                        )}
                       
                    </HStack>
                </Card.Footer>

            </Box>

        </Card.Root>
    );
};

export default Course;

// import { Badge, Box, Button, HStack, Text, Flex } from "@chakra-ui/react";
// import * as React from "react";
// import "./course.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
// import AlertDialog from "./AlertDialog";
// import { addToCart, isOpenDrawer, removeFromCart } from "../features/cartSlice";

// const Course = ({ course, onDelete }) => {
//   let dispatch = useDispatch();
//   let navigate = useNavigate();
//   let user = useSelector((state) => state.users.currentUser);

//   const deleted = async () => {
//     try {
//       await deleteCourse(course._id, user?.token);
//       onDelete(course._id);
//       dispatch(removeFromCart(course._id));
//     } catch (ex) {
//       if (ex.response.status == 401) navigate("/login");
//       console.log(ex);
//       alert(ex.response.data.message);
//     }
//   };

//   return (
//     <Box maxW="360px" height="250px" borderRadius="lg" overflow="hidden" position="relative" boxShadow="lg">
//       {/* תמונת הרקע */}


   
//       <Box
//         height="250px"

//         backgroundImage={`url('https://courses-fig4.onrender.com/uploads/${course.img}')`}
//         backgroundSize="cover"
//         backgroundPosition="center"
//         position="relative"
//         borderRadius="lg"
//       >
//         <Box
//           position="absolute"
//           top={0}
//           left={0}
//           right={0}
//           bottom={0}
//           background="linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))"
//         />
//       </Box>

//       {/* טקסט מיושר לשמאל */}
//       <Flex
//         position="absolute"
//         top="0"
//         left="0"
//         width="100%"
//         height="100%"
//         flexDirection="column"
//         justifyContent="center"
//         align="flex-start"
//         p={6}
//         color="white"
//       >
//         <Text fontSize="2xl" fontWeight="bold">{course.name.toUpperCase()}</Text>
//         <Text fontSize="14px" mt={2} fontWeight="bold" textAlign="left">{course.motivation}</Text>
//         <Flex mt={3} align="center">
//           {course.categories.map((cat) => (
//             <Badge key={cat} backgroundColor="white" colorScheme="blue" mr={2}>
//               {cat}
//             </Badge>
//           ))}
//         </Flex>
        
//         <Flex mt={4} align="center" gap={3}>
//           <Button size="sm" colorScheme="whiteAlpha" backgroundColor="white" variant="outline" as={Link} to={"details/" + course._id}>
//             SHOW DETAILS
//           </Button>
//           <Button
//             size="sm"
//     border="none"
//             variant="outline"
//             onClick={() => {
//               dispatch(addToCart(course));
//               dispatch(isOpenDrawer(true));
//             }}
//           >
//             <AddShoppingCartIcon sx={{ color: "white" }} />
//           </Button>
//           {user?.role == "ADMIN" && <AlertDialog deleted={deleted} />}
//           {user?.role == "ADMIN" && (
//             <Button size="sm" colorScheme="whiteAlpha" color="white" variant="outline" border="none" onClick={() => navigate(`/edit/${course._id}`, { state: { status: "EDIT", details: { course } } })}>
//               <DriveFileRenameOutlineOutlinedIcon />
//             </Button>
//           )}
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

// export default Course;


