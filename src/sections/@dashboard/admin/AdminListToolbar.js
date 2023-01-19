import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectOtherProps() {
  const [year, setYear] = React.useState('');

  const handlesetYearChange = (event) => {
    setYear(event.target.value);
  };

  const [semester, setSemester] = React.useState('');

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-helper-label">개설 년도</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={year}
          label="개설 년도"
          onChange={handlesetYearChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>2020</MenuItem>
          <MenuItem value={20}>2021</MenuItem>
          <MenuItem value={30}>2022</MenuItem>
        </Select>
      </FormControl>

      
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-helper-label">개설 학기</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={semester}
          label="개설 학기"
          onChange={handleSemesterChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1 학기</MenuItem>
          <MenuItem value={20}>2 학기</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}