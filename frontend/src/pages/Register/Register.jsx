import RegisterLayout from "../../components/Auth/register/RegisterLayout";
import RegisterBrandPanel from "../../components/Auth/register/RegisterBrandPanel";
import RegisterForm from "../../components/Auth/register/RegisterForm";

function Register() {
    return (
        <RegisterLayout>
            <RegisterBrandPanel />
            <RegisterForm />
        </RegisterLayout>
    );
}

export default Register;