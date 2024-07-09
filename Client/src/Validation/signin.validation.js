import * as Yup from 'yup';

const signInSchema = Yup.object({
    username : Yup.string().min(3).required(),
    password : Yup.string().min(8).matches("^[a-zA-Z0-9]{3,30}$").required(),
})

export default signInSchema