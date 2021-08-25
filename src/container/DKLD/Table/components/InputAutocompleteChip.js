import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { Controller } from "react-hook-form";
import { Checkbox, TextField } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { withStyles } from "@material-ui/core";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const MuiAutocomplete = withStyles({
    tag: {
        margin: "1px 6px 1px 6px",
        padding: "5px 0",
    },
    inputRoot: {
        '&&[class*="MuiOutlinedInput-root"]': {
            padding: "1px",
            minHeight: "30px",
        },
    },
    input: {
        width: "0",
    },
})(Autocomplete);

const InputAutocompleteChip = ({ name, control, label, tableList }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onBlur, onChange, ref, value },
                fieldState: { error },
            }) => (
                <MuiAutocomplete
                    onBlur={onBlur}
                    // option={value}
                    multiple
                    limitTags={1}
                    options={tableList}
                    getOptionLabel={(option) => option.dienGiai}
                    renderOption={(option, { selected }) => (
                        <>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                checked={selected}
                                color="primary"
                            />
                            {option.dienGiai}
                        </>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label={label}
                        />
                    )}
                    onChange={(e, option) => {
                        onChange(option);
                    }}
                />
            )}
        />
    );
};

export default InputAutocompleteChip;
