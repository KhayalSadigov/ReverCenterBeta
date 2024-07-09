import * as Yup from 'yup';

const signUpSchema = Yup.object({
    username : Yup.string().min(3).max(20).required(),
    email : Yup.string().email().required(),
    password : Yup.string().min(8).matches("^[a-zA-Z0-9]{3,30}$").required(),
})

export default signUpSchema

