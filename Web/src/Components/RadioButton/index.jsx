import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup() {
  return (
    <FormControl className="w-full">
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className="text-[#acacac] text-sm font-bold mt-6 flex justify-around"
      >
        <FormControlLabel value="Todos" control={<Radio />} label="Todos" />
        <FormControlLabel
          value="Prioridade"
          control={<Radio />}
          label="Prioridade"
        />
        <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
      </RadioGroup>
    </FormControl>
  );
}
