import * as yup from 'yup';
import signInSchema from './sign-in';

const schema = signInSchema.shape({
    firstName: yup.string().label('First name').min(4).max(20).required(),
    birthDate: yup.date().label('Birth date').required().max(new Date(new Date().setFullYear(new Date().getFullYear() - 13)), 'You must be at least 13 years old'),
});

export default schema