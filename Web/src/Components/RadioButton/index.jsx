import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup({ selectedValue, handleChange }) {
  return (
    <FormControl className="w-full">
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className="text-[#acacac] text-sm font-bold mt-6 flex justify-around"
      >
        <FormControlLabel
          value="all"
          control={<Radio />}
          label="Todos"
          checked={selectedValue == "all"}
          onChange={(e) => handleChange(e.target)}
        />
        <FormControlLabel
          value="true"
          control={<Radio />}
          label="Prioridade"
          checked={selectedValue == "true"}
          onChange={(e) => handleChange(e.target)}
        />
        <FormControlLabel
          value="false"
          control={<Radio />}
          label="Normal"
          checked={selectedValue == "false"}
          onChange={(e) => handleChange(e.target)}
        />
      </RadioGroup>
    </FormControl>
  );
}
