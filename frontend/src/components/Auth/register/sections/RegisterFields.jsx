import TextField from "../../../common/TextField";

import {
    User,
    Mail,
    Lock,
} from "lucide-react";
function RegisterFields({

    name,
    setName,

    email,
    setEmail,

    password,
    setPassword,

    confirmPassword,
    setConfirmPassword,

})  {

    return (

        <>
             <div className="mt-12 grid grid-cols-2 gap-6">

               <TextField
    label="Full Name"
    icon={<User size={18} />}
    placeholder="Enter your full name"

    value={name}
    onChange={(e) => setName(e.target.value)}
/>

                <TextField
    label="Email Address"
    icon={<Mail size={18} />}
    placeholder="Enter your email"

    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>

                <TextField
    label="Password"
    type="password"
    icon={<Lock size={18} />}
    placeholder="Create password"

    value={password}
    onChange={(e) => setPassword(e.target.value)}
/>


                <TextField
    label="Confirm Password"
    type="password"
    icon={<Lock size={18} />}
    placeholder="Confirm password"

    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
/>
                

                <div className="mt-1">
                </div>

            </div>
        </>

    );

}

export default RegisterFields;