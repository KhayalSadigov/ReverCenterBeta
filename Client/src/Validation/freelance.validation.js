import * as Yup from "yup";

const freelanceSchema = Yup.object({
  title: Yup.string().min(1).max(60).required(),
  description: Yup.string().min(15).max(380).required(),
  email: Yup.string().email().required(),
  price: Yup.number().min(10).required(),
  tel: Yup.string().trim().matches(
    /^\+?(\d{1,3})?[\s\-\.]?\(?\d{1,4}\)?[\s\-\.]?\d{1,4}[\s\-\.]?\d{1,4}[\s\-\.]?\d{1,9}$/
  , "Phone number is not valid"),
});

export default freelanceSchema;

