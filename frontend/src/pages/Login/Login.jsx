import AuthLayout from "../../components/Auth/AuthLayout";
import BrandPanel from "../../components/Auth/BrandPanel";
import LoginForm from "../../components/Auth/LoginForm";

function Login() {
    return (
        <AuthLayout
            left={<BrandPanel />}
            right={<LoginForm />}
        />
    );
}

export default Login;