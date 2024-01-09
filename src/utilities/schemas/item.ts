import * as yup from 'yup';
import { ColorEnum, SizeEnum } from '../enums';

const schema = yup.object().shape({
    productId: yup.string().required(),
    color: yup.string().label('Color').oneOf(Object.keys(ColorEnum).map((item) => ColorEnum[item as keyof typeof ColorEnum])).required(),
    size: yup.string().label('Size').oneOf(Object.keys(SizeEnum).map((item) => SizeEnum[item as keyof typeof SizeEnum])).required(),
});

export default schema;