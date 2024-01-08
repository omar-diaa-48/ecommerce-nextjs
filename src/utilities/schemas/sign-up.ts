import * as yup from 'yup';
import signInSchema from './sign-in';

const schema = signInSchema.shape({
    firstName: yup.string().label('First name').min(4).max(20).required(),
    birthDate: yup.date().label('Birth date').max(13).required(),
});

export default schema