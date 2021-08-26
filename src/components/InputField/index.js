import { TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

const InputField = (props) => {
    const {
        name,
        control,
        value,
        updateString,
        disabled,
        required = false,
        ...restProps
    } = props;
    return (
        <Controller
            name={name}
            control={control}
            value={value}
            render={({
                field: { onBlur, onChange, ref, value },
                fieldState: { error },
            }) => (
                <TextField
                    InputLabelProps={{ required }}
                    onBlur={onBlur}
                    value={value}
                    disabled={disabled}
                    fullWidth={true}
                    onChange={(e) => {
                        updateString
                            ? updateString(e, onChange)
                            : onChange(e.target.value);
                    }}
                    error={!!error}
                    helperText={error && error.message}
                    inputRef={ref}
                    {...restProps}
                />
            )}
            onFocus={true}
        />
    );
};

export default InputField;
