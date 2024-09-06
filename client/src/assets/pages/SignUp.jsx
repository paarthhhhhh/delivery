import React, { useState } from "react";
// import defaultProfilePic from "/defaultProfilePic.jpg";
import axios from "axios";
import defaultProfilePic from "/profileImage.jpg"
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [profilePicture, setProfilePicture] = useState(defaultProfilePic);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  
  const navigate = useNavigate()
  
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("MobileNo", mobileNumber);
    formData.append("addressLine1", address1);
    formData.append("addressLine2", address2);
    formData.append("pinCode", pincode);
    formData.append("profilePicture", profilePicture || defaultProfilePic);
    formData.append("state", state );
    formData.append("city",city);

    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        formData
      );
      console.log(response.data);
      console.log(response.data.message) 
        toast.success(response.data.message);
        navigate('/login')

      
    } catch (error) {
      console.log("Error in Client Side", error);
    }
  };


  return(
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-900 text-white">
  <div className="w-full max-w-4xl p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg mt-12">
    <h2 className="text-3xl font-bold text-center">Sign up</h2>
    <form className="mt-8 space-y-6">
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
        <div className="flex-shrink-0 lg:w-1/3 flex flex-col items-center space-y-4">
          <img
            src={
              profilePicture instanceof File
                ? URL.createObjectURL(profilePicture)
                : profilePicture
            }
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-500"
          />
          <input
            id="profile-picture"
            name="profile-picture"
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-gray-200 hover:file:bg-gray-600"
            onChange={handleProfilePictureChange}
          />
        </div>
        <div className="flex flex-col lg:w-2/3 space-y-4">
          {[
            { id: "name", type: "text", placeholder: "Full Name", value: name, onChange: setName },
            { id: "email-address", type: "email", placeholder: "Email address", value: email, onChange: setEmail },
            { id: "password", type: "password", placeholder: "Password", value: password, onChange: setPassword },
            { id: "confirm-password", type: "password", placeholder: "Confirm Password", value: confirmPassword, onChange: setConfirmPassword },
            { id: "mobile-number", type: "tel", placeholder: "Mobile Number", value: mobileNumber, onChange: setMobileNumber },
            { id: "city", type: "text", placeholder: "City", value: city, onChange: setCity },
            { id: "state", type: "text", placeholder: "State", value: state, onChange: setState },
            { id: "address1", type: "text", placeholder: "Address Line 1", value: address1, onChange: setAddress1 },
            { id: "address2", type: "text", placeholder: "Address Line 2", value: address2, onChange: setAddress2 },
            { id: "pincode", type: "text", placeholder: "Pin Code", value: pincode, onChange: setPincode },
          ].map((input) => (
            <div key={input.id} className="flex flex-col lg:w-1/2 space-y-4">
              <input
                id={input.id}
                name={input.id}
                type={input.type}
                required
                className="w-full px-3 py-2 border border-gray-600 placeholder-gray-400 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={input.placeholder}
                value={input.value}
                onChange={(e) => input.onChange(e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={handleSignup}
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign up
        </button>
      </div>
    </form>
    <p className="mt-6 text-center text-sm text-gray-400">
      Already have an account?{" "}
      <a href="/login" className="font-medium text-indigo-500 hover:text-indigo-400">
        Sign in
      </a>
    </p>
  </div>
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
</div>

  )
};

export default Signup;
