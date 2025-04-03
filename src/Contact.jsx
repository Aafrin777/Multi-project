import React, { useState } from "react";
import ContactImage from "./assets/ContactImage.webp";
import "./index.css";

const Contact = () => {
  // State to store user input data
  const [userData, setUserData] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    addresss: "",
    email: "",
    message: "",
  });

  // Function to handle input field changes
  const postUserData = (event) => {
    const { name, value } = event.target; // Extract name and value from input
    setUserData({ ...userData, [name]: value }); // Update the specific field
  };

  // Function to submit data to Firebase
  const submitData = async (event) => {
    event.preventDefault(); // Prevents default form submission

    const { FirstName, LastName, Phone, addresss, email, message } = userData;

    // Ensure all fields are filled before submitting
    if (FirstName && LastName && Phone && addresss && email && message) {
      try {
        // Send data to Firebase using fetch API
        const res = await fetch(
          "https://fir-contact-5f56e-default-rtdb.firebaseio.com/userDataRecord.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData), // Convert JavaScript object to JSON
          }
        );

        // Check if data was successfully stored in Firebase
        if (res.ok) {
          // Reset form fields after successful submission
          setUserData({
            FirstName: "",
            LastName: "",
            Phone: "",
            addresss: "",
            email: "",
            message: "",
          });
          alert("Data stored successfully!");
        } else {
          alert("Error storing data!");
        }
      } catch (error) {
        alert("Something went wrong! Try again later.");
      }
    } else {
      alert("Please fill in all fields!"); // Alert user if fields are empty
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* Left Side: Contact Information */}
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Teams
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore ea iure aperiam autem sapiente?
                  </p>

                  <figure>
                    <img
                      src={ContactImage}
                      alt="contactusimg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* Right Side: Form Section */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      {/* First Name Input */}
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="FirstName"
                             className="form-control"
                          placeholder="First Name"
                          value={userData.FirstName}
                          onChange={postUserData}
                        />
                      </div>

                      {/* Last Name Input */}
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="LastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.LastName}
                          onChange={postUserData}
                        />
                      </div>

                      {/* Phone Number Input */}
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="Phone"
                          className="form-control"
                          placeholder="Phone Number"
                          value={userData.Phone}
                          onChange={postUserData}
                        />
                      </div>

                      {/* Email Input */}
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    {/* Address Input */}
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="addresss"
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.addresss}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="message"
                          className="form-control"
                          placeholder="Enter your message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    {/* Checkbox */}
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label main-hero-para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, dolore?
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

/*
steps
Go to Firebase Console.

Click on "Create a project" and follow the setup steps.
After creating the project, go to "Build" → "Realtime Database".

after realdatabase
{
  "rules": {
    ".read": true,
    ".write": true
  }
}

i get this i select enabled thAN

const res = fetch(
  "https://reactfirebase-f90c9-default-rtdb.firebaseio.com/userDataRecord.json",

  if (res.ok)



  Method 2: Firebase SDK (Recommended)
  file firebase.jsx

*/