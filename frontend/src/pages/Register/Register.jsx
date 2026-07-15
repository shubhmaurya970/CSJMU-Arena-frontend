import RegisterLayout from "../../components/Auth/register/RegisterLayout";
import RegisterBrandPanel from "../../components/Auth/register/RegisterBrandPanel";
import RegisterForm from "../../components/Auth/register/RegisterForm";
import { useEffect } from "react";
import { useLoading } from "../../context/LoadingContext";



function Register() {
    const { hideLoader } = useLoading();

useEffect(() => {

    hideLoader();

}, []);
    return (
        <RegisterLayout>
            <RegisterBrandPanel />
            <RegisterForm />
        </RegisterLayout>
    );
}

export default Register;