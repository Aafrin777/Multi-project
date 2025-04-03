//npm install firebase
// Create a new file firebase.js in your src folder and add this:
import React, { useState } from "react";
import { database, ref, push } from "./components/firebaseConfig";
import "./index.css";
import Illustration from "./assets/undrawpairprogramming.svg";

const Firebase = (props) => {
  const [userData, setUserData] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    addresss: "",
    email: "",
    message: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitDataFirebase = async (event) => {
    event.preventDefault();
    const { FirstName, LastName, Phone, addresss, email, message } = userData;
    if (FirstName && LastName && Phone && addresss && email && message) {
      try {
        await push(ref(database, "userDataRecord"), userData);
        setUserData({ FirstName: "", LastName: "", Phone: "", addresss: "", email: "", message: "" });
        alert("Data stored successfully!");
      } catch (error) {
        alert("Error storing data: " + error.message);
      }
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="container-F"
		style={{
			color: props.mode === "dark" ? "yellow" : "black",
			backgroundColor: props.mode === "dark" ? "#081C15" : "#f9f9f9",
			padding: "20px",
			borderRadius: "10px",
			boxShadow: props.mode === "dark"
				? "15px 15px 20px rgba(0, 206, 178, 0.93)"
				: "15px 15px 15px rgba(8, 66, 59, 0.93)",
			width: "600px",
			margin: "auto",
			textAlign: "center",
			transition: "all 0.3s ease-in-out",
		}}>
      <div className="form-box">
        <h1
							style={{
								width: "400px",
								padding: "10px",
								marginBottom: "10px",
								borderRadius: "5px",
								border: "1px solid ",
								backgroundColor: props.mode === "dark" ? "#183D3D" : "hwb(167 12% 19%)",
								color: props.mode === "dark" ? "hwb(167 12% 19%)" : "black",
							}}  >Firebase Data Submission</h1>
        <form
				style={{
					width: "400px",
					padding: "10px",
					marginBottom: "10px",
					borderRadius: "5px",
					border: "1px solid",
					backgroundColor: props.mode === "dark" ? "#183D3D" : "white",
					color: props.mode === "dark" ? "hwb(167 12% 19%)" : "black",
				}} >
          <input type="text" name="FirstName" placeholder="First Name" value={userData.FirstName} onChange={postUserData}
					 />
          <input type="text" name="LastName" placeholder="Last Name" value={userData.LastName} onChange={postUserData} />
          <input type="text" name="Phone" placeholder="Phone Number" value={userData.Phone} onChange={postUserData} />
          <input type="text" name="addresss" placeholder="Address" value={userData.addresss} onChange={postUserData} />
          <input type="email" name="email" placeholder="Email" value={userData.email} onChange={postUserData} />
          <textarea name="message" placeholder="Enter your message" value={userData.message} onChange={postUserData}></textarea>
          <button type="submit" onClick={submitDataFirebase}
					  style={{
							width: "100%",
							padding: "12px",
							marginTop: "10px",
							backgroundColor: props.mode === "dark" ? "hwb(167 12% 19%)" : "hwb(167 12% 19%)",
							color: "white",
							border: "none",
							borderRadius: "5px",
							fontSize: "18px",
							cursor: "pointer",
							transition: "0.3s",
						}}>Submit</button>
        </form>
      </div>
      <div className="illustration">
        <img src={Illustration} alt="Pair Programming Illustration"/>
      </div>
    </div>
  );
};

export default Firebase;
