import { useState } from "react";
import RegisterHeader from "./sections/RegisterHeader";
import RegisterFields from "./sections/RegisterFields";
import GoogleSignIn from "./sections/GoogleSignIn";
import ProfileAccordion from "./sections/ProfileAccordion";
import RegisterFooter from "./sections/RegisterFooter";
import { registerUser } from "../../../services/authService";
import { useLoading } from "../../../context/LoadingContext";
import { useNavigate } from "react-router-dom";

function RegisterForm({ accountType }) {
    const navigate = useNavigate();

const {
    showLoader,
    hideLoaderAfter,
} = useLoading();

    const [name, setName] = useState("");

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const [confirmPassword, setConfirmPassword] = useState("");

const [error, setError] = useState("");

const handleRegister = async () => {

    setError("");

    if (

        !name.trim() ||

        !email.trim() ||

        !password.trim()

    ) {

        setError("Please fill all required fields.");

        return;

    }

    if (password !== confirmPassword) {

        setError("Passwords do not match.");

        return;

    }

    try {

       showLoader("Creating your account...");

await registerUser({

    fullName: name,

    email,

    password,

    role: accountType,

});

hideLoaderAfter();

navigate("/login", {
    state: {
        success:
            "Account created successfully. Please sign in.",
    },
});

    }

    catch (error) {

        hideLoaderAfter();

        if (error.response?.status === 409) {

            setError("Email already exists.");

        }

        else if (!error.response) {

            setError(
                "Unable to connect. Check your internet connection."
            );

        }

        else {

            setError(
                "Registration failed. Please try again."
            );

        }

    }

};

    return (

        <div
            className="
                flex-1

                overflow-y-auto

                bg-[#111111]

                px-14
                py-12
                pr-6

                hide-scrollbar
            "
        >

            <RegisterHeader />

            <RegisterFields
    name={name}
    setName={setName}

    email={email}
    setEmail={setEmail}

    password={password}
    setPassword={setPassword}

    confirmPassword={confirmPassword}
    setConfirmPassword={setConfirmPassword}
/>

            <GoogleSignIn />

            <ProfileAccordion
                accountType={accountType}
            />

            <RegisterFooter

    onRegister={handleRegister}

    error={error}

/>

        </div>

    );

}

export default RegisterForm;