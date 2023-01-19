import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
// import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import './Admin.css';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Button,
  Popover,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  TextField,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// components

import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
// sections
import { AdminListHead, AdminListToolbar } from '../../sections/@dashboard/admin';
// mock
import USERLIST from '../../_mock/AdminUser';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  // { id: 'name', label: 'Name', alignRight: false },
  // { id: 'company', label: 'Company', alignRight: false },
  // { id: 'role', label: 'Role', alignRight: false },
  // { id: 'isVerified', label: 'Verified', alignRight: false },
  // { id: 'status', label: 'Status', alignRight: false },
  // { id: '' },
  { id: 'order', label: '순서', alignRight: false },
  { id: 'name', label: '이름', alignRight: false },
  { id: 'studentNum', label: '학번', alignRight: false },
  { id: 'retake', label: '재이수', alignRight: false },
  { id: 'achieve', label: '성취도', alignRight: false },
  { id: 'publishinfo', label: '토큰 발행 정보', alignRight: false },
  { id: 'attendance', label: '출석', alignRight: false },
  { id: 'grade', label: '성적', alignRight: false },
 
];

// ----------------------------------------------------------------------
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}




function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1; 
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}



export default function AdminStudentListPage() {
  
  const navigate = useNavigate();

  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };


  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];
  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
  //   }
  //   setSelected(newSelected);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const [openforAttend, setforAttendOpen] = React.useState(false);
  const [openforGrade, setforGradeOpen] = React.useState(false);

  const handleClickOpenforAttend = () => {
    setforAttendOpen(true);
  };
  const handleCloseforAttend = () => {
    setforAttendOpen(false);
  };

  const handleClickOpenforGrade = () => {
    setforGradeOpen(true);
  };
  const handleCloseforGrade = () => {
    setforGradeOpen(false);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  const goSyllabus = () => {
    navigate("/dashboard/profile");
  };
  const goAttendance = () => {
    navigate("/dashboard/attendance");
  };
  const goGrade = () => {
    navigate("/dashboard/grade");
  };
  const goTokenPublish = () => {
    navigate("/a_dashboard/a_tokenpublish");
  };

  const [week, setWeek] = React.useState('');

  const selecthandleChange = (event) => {
    setWeek(event.target.value);
  };

  const [token, setToken] = React.useState('');

  const handlesetTokenChange = (event) => {
    setToken(event.target.value);
  };
  

  return (
    <>
    
      <Helmet>
        <title> Home </title>
      </Helmet>

      <Container>
        

        <Card>

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <AdminListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length + 2}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { order, name, studentNum, retake , achievement} = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={order} tabIndex={-1}>
                        {/* <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                        </TableCell> */}

                        <TableCell>
                          {order}
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            {/* <Avatar alt={name} src={avatarUrl} /> */}
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{studentNum}</TableCell>
                        <TableCell align="left">{retake}</TableCell>
                        <TableCell align="left">{achievement}</TableCell>

                        <TableCell align="left">
                            <Button onClick={goTokenPublish}>확인</Button>
                        </TableCell>

                        <TableCell align="left">
                            <Button className='btn1' onClick={handleClickOpenforAttend}>
                              입력
                            </Button>

                            <Dialog 
                            open={openforAttend} onClose={handleCloseforAttend}>
                              <DialogTitle>홍길동의 출결정보</DialogTitle>
                              <DialogContent>
                              <FormControl sx={{ m: 1, minWidth: 80 }}>
                                <InputLabel id="demo-simple-select-autowidth-label">주차</InputLabel>
                                <Select
                                  labelId="demo-simple-select-autowidth-label"
                                  id="demo-simple-select-autowidth"
                                  value={week}
                                  onChange={selecthandleChange}
                                  autoWidth
                                  label="Week"
                                >
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={1}>1</MenuItem>
                                  <MenuItem value={2}>2</MenuItem>
                                  <MenuItem value={3}>3</MenuItem>
                                  <MenuItem value={4}>4</MenuItem>
                                  <MenuItem value={5}>5</MenuItem>
                                  <MenuItem value={6}>6</MenuItem>
                                  <MenuItem value={7}>7</MenuItem>
                                  <MenuItem value={8}>8</MenuItem>
                                  <MenuItem value={9}>9</MenuItem>
                                  <MenuItem value={10}>10</MenuItem>
                                  <MenuItem value={11}>11</MenuItem>
                                  <MenuItem value={12}>12</MenuItem>
                                  <MenuItem value={13}>13</MenuItem>
                                  <MenuItem value={14}>14</MenuItem>
                                  <MenuItem value={15}>15</MenuItem>
                                  <MenuItem value={16}>16</MenuItem>
                                </Select>
                              </FormControl>
                                <br />
                                <Stack>
                                <Stack direction="row" alignItems="center">
                                  <div className='attendLabel'>
                                    출석
                                  </div>
                                  <div className='lateLabel'>
                                    지각
                                  </div>
                                </Stack>
                                
                                <div className='attendCheckbox'>
                                  <Stack direction="row" alignItems="center">
                                    <div className='label'>
                                      1차시
                                    </div>
                                    <FormControlLabel control={<Checkbox />} />
                                    <FormControlLabel control={<Checkbox />}/>
                                  </Stack>
                                </div>
                                
                                <br/>
                                <div className='lateCheckbox'>
                                  <Stack direction="row" alignItems="center">
                                    <div className='label'>
                                      2차시
                                    </div>
                                    <FormControlLabel control={<Checkbox />} />
                                    <FormControlLabel control={<Checkbox />}/>
                                  </Stack>
                                </div>
                                </Stack>
                                
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleCloseforAttend}>취소</Button>
                                <Button onClick={handleCloseforAttend}>발행</Button>
                              </DialogActions>
                            </Dialog>
                        </TableCell>


                        <TableCell align="left">
                            <Button onClick={handleClickOpenforGrade}>
                              입력
                            </Button>
                           
                            <Dialog 
                            open={openforGrade} onClose={handleCloseforGrade}>
                              <DialogTitle>출석 점수 입력</DialogTitle>
                              <DialogContent>
                                  
                                  <RadioGroup
                                    row
                                    aria-labelledby="demo-form-control-label-placement"
                                    name="position"
                                    //defaultValue="HW"
                                  >
                                    <FormControlLabel
                                      value="hw"
                                      control={<Radio />}
                                      label="과제"
                                      labelPlacement="top"
                                    />
                                    <FormControlLabel
                                      value="exam"
                                      control={<Radio />}
                                      label="시험"
                                      labelPlacement="top"
 />
                                    <FormControlLabel
                                      value="quiz"
                                      control={<Radio />}
                                      label="퀴즈"
                                      labelPlacement="top"/>
                                  </RadioGroup>
                                    
                                  <FormControl sx={{ m: 1, minWidth: 150 }}>
                                    <InputLabel id="demo-simple-select-helper-label">토큰 선택</InputLabel>
                                    <Select
                                      labelId="demo-simple-select-helper-label"
                                      id="demo-simple-select-helper"
                                      value={token}
                                      label="개설 년도"
                                      onChange={handlesetTokenChange}
                                    >
            
                                      <MenuItem value={10}>HW1</MenuItem>
                                      <MenuItem value={20}>Mid</MenuItem>
                                      <MenuItem value={30}>HW2</MenuItem>
                                    </Select>
                                  </FormControl>

                                  <TextField
                                    autoFocus
                                    margin = "dense"
                                    padding = {5}
                                    id="score"
                                    label="점수 입력"
                                    type="string time"
                                    fullWidth
                                    variant="standard"
                                  />
                                  <TextField
                                    id="outlined-multiline-static"
                                    label="코멘트 입력"
                                    multiline
                                    fullWidth
                                    rows={5}
                                  />
                                </DialogContent>
                              <DialogActions>
                                <Button onClick={handleCloseforGrade}>취소</Button>
                                <Button onClick={handleCloseforGrade}>발행</Button>
                              </DialogActions>
                            </Dialog>
                        </TableCell>
          
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

    </>
  );
}
