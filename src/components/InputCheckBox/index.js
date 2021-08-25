import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";
import { Controller } from "react-hook-form";
import React from "react";

const useStyles = makeStyles((theme) => ({
    checkbox: {
        padding: "0px",
        height: "48px",
    },
}));

const InputCheckbox = ({
    label,
    color,
    checked,
    disabled,
    name,
    control,
    required = false,
}) => {
    const classes = useStyles();

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onBlur, onChange, ref, value },
                fieldState: { error },
            }) => (
                <FormControlLabel
                    onBlur={onBlur}
                    className={classes.checkbox}
                    inputRef={ref}
                    checked={value}
                    onChange={(e, checked) => {
                        onChange(checked);
                    }}
                    control={
                        <Checkbox
                            InputLabelProps={{ required }}
                            color={color}
                            disabled={disabled}
                        />
                    }
                    label={label}
                />
            )}
        />
    );
};
export default InputCheckbox;
