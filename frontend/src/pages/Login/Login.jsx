import AuthLayout from "../../components/Auth/AuthLayout";
import BrandPanel from "../../components/Auth/AuthBrandPanel";
import LoginForm from "../../components/Auth/LoginForm";
import { useEffect } from "react";
import { useLoading } from "../../context/LoadingContext";

function Login() {
    const { hideLoader } = useLoading();

    useEffect(() => {

    hideLoader();

}, []);

    return (
        <AuthLayout
            left={<BrandPanel />}
            right={<LoginForm />}
        />
    );
}

export default Login;