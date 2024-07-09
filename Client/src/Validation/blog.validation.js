import * as Yup from 'yup';

const blogSchema = Yup.object({
    description : Yup.string().min(600).required(),
    title : Yup.string().min(5).required(),
    cover : Yup.string().required()
})

export default blogSchema

