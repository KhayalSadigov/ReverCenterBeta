import * as Yup from 'yup';

const mailSchema = Yup.object({
    email : Yup.string().email().required()
})

export default mailSchema