import React, { useEffect, useState } from "react";
import { addImage } from '../api/courseService.js'

export const AddImage = ({ setNameImage, deafultImg }) => {
  // alert(deafultImg)
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(deafultImg != "" ? `https://courses-fig4.onrender.com/uploads/${deafultImg}` : ""); // כתובת התמונה לתצוגה


  useEffect(() => {
    const storedImage = localStorage.getItem("selectedImage");
    const storedImageName = localStorage.getItem("selectedImageName");

    if (storedImage && storedImageName) {
      setPreview(storedImage);
      setNameImage(storedImageName);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));

      // שמירת הנתונים ב- localStorage
      localStorage.setItem("selectedImage", URL.createObjectURL(file));
      localStorage.setItem("selectedImageName", file.name);
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("בחר תמונה!");


    const formData = new FormData();
    formData.append("image", image);
    setNameImage(image.name)
    alert(image.name)

    try {
      const response = await addImage(formData)
      // alert("תמונה הועלתה בהצלחה!");
      console.log("הקובץ נשמר ב:", response.data.filePath);
      localStorage.removeItem("selectedImage");
      localStorage.removeItem("selectedImageName");

    } catch (error) {
      console.error("שגיאה בהעלאה:", error);
      // alert("שגיאה בהעלאת התמונה!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <label htmlFor="file-upload" style={{ cursor: "pointer", backgroundColor: "white", color: "black", marginLeft: "-50px", padding: "10px 20px", borderRadius: "5px" }}>
        Choose file
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {preview && (
        <div
          style={{
            margin: "20px auto",
            width: "200px",
            height: "200px",
            border: "2px dashed #aaa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={preview} alt="Preview" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </div>
      )}
      <button onClick={handleUpload}>upload image</button>
    </div>
  );
};
