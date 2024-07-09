import * as Yup from 'yup';

const titbitSchema = Yup.object({
    content : Yup.string().min(1).max(380).required(),
})

export default titbitSchema

