import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
    name: string;
    label: string;
}

const DateInput: React.FC<Props> = (props) => {
    const { name, label } = props;

    const methods = useFormContext();
    const { control } = methods;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => (
                    <DatePicker disableFuture label={label} value={value} onChange={onChange}
                        slotProps={{
                            textField: {
                                variant: 'outlined',
                                error: !!error,
                                helperText: error?.message,
                            },
                        }}
                    />
                )}
            />
        </LocalizationProvider>
    );
};

export default DateInput;