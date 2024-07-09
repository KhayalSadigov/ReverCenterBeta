import * as Yup from 'yup';

const messageSchema = Yup.object({
    title : Yup.string().min(1).required(),
    email : Yup.string().email().required(),
    message : Yup.string().min(15).required()
})

export default messageSchema