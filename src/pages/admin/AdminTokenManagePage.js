import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
// import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Label from '../../components/label';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
// sections
import { AdminListHead, AdminTokenToolbar } from '../../sections/@dashboard/admin';
// mock

import TOKENLIST from '../../_mock/token';
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'token', label: '토큰 이름', alignRight: false },
  { id: 'submission', label: '제출 인원', alignRight: false },
  { id: 'total_score', label: '총 배점', alignRight: false },
  { id: 'edit_token', label: '세부 내용', alignRight: false },
  { id: 'delete_token', label: '삭제', alignRight: false }
];

// ----------------------------------------------------------------------

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

export default function HomePage() {
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
      const newSelecteds = TOKENLIST.map((n) => n.name);
      setSelected(newSelecteds);

    
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - TOKENLIST.length) : 0;

  const filteredUsers = applySortFilter(TOKENLIST, getComparator(order, orderBy), filterName);

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
  const goRanking = () => {
    navigate("/dashboard/ranking");
  };



function add_click() {
   console.log("버튼1을 누르셨습니다.");}



  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
    setForCreate(false);
    setForEdit(false);
    
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [openForCreate, setForCreate] = React.useState(false);
  const [openForEdit, setForEdit] = React.useState(false);

  const handleClickOpenForCreate = () => {
    setForCreate(true);
  }

  const handleCloseForCreate = () => {
    setForCreate(false);
  }

  const handleClickOpenForEdit = () => {
    setForEdit(true);
  }

  const handleCloseForEdit = () => {
    setForEdit(false);
  }

  

  return (
    <>
      <Helmet>
        <title> 토큰 관리 </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            토큰 관리
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick= {handleClickOpenForCreate} > 
            토큰 생성         
          </Button>

          <Dialog open={openForCreate} onClose={handleCloseForCreate}>
              <DialogTitle>토큰 생성</DialogTitle>
              <DialogContent>
              
                <RadioGroup
                  row
                  aria-labelledby="demo-form-control-label-placement"
                  name="position"
                  defaultValue="homework"
                >
                  <FormControlLabel
                    value="homework"
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
                    labelPlacement="top"
                  />
                 
                  </RadioGroup>
              
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="토큰명"
                  type="email"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="점수"
                  type="email"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="기타 내용"
                  type="email"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>취소</Button>
                <Button onClick={handleClose}>생성</Button>
              </DialogActions>
            </Dialog>
        </Stack>

        <Card>
          <AdminTokenToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                 <AdminListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={TOKENLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { token, submission, total_score} = row;
                    
                     return (
                      <TableRow> 
                        


                        <TableCell align="left">{token}</TableCell>

                        <TableCell align="left">{submission}</TableCell>

                        <TableCell align="left">{total_score}</TableCell>
                        

                        <TableCell align="left">
                            <Button onClick={handleClickOpenForEdit}>
                              수정
                            </Button>
                            <Dialog open={openForEdit} onClose={handleCloseForEdit}>
                              <DialogTitle>토큰 수정</DialogTitle>
                              <DialogContent>
                              <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                  value={age}
                                  onChange={handleChange}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                                >
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={10}>컴퓨터 네트워크 01분반</MenuItem>
                                  <MenuItem value={20}>컴퓨터 네트워크 02분반</MenuItem>
                                  <MenuItem value={30}>컴퓨터 네트워크 03분반</MenuItem>
                                </Select>
                                <FormHelperText></FormHelperText>
                              </FormControl>

                              
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-form-control-label-placement"
                                  name="position"
                                  defaultValue="homework"
                                >
                                  <FormControlLabel
                                    value="homework"
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
                                    labelPlacement="top"
                                  />
                                
                                  </RadioGroup>
                              
                                <TextField
                                  autoFocus
                                  margin="dense"
                                  id="name"
                                  label="토큰명"
                                  type="email"
                                  fullWidth
                                  variant="standard"
                                />
                                <TextField
                                  autoFocus
                                  margin="dense"
                                  id="name"
                                  label="점수"
                                  type="email"
                                  fullWidth
                                  variant="standard"
                                />
                                <TextField
                                  autoFocus
                                  margin="dense"
                                  id="name"
                                  label="기타 내용"
                                  type="email"
                                  fullWidth
                                  variant="standard"
                                />
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose}>취소</Button>
                                <Button onClick={handleClose}>수정</Button>
                              </DialogActions>
                            </Dialog>
                            
                        </TableCell>

                        <TableCell align="left">
                            <Button onClick={add_click}>삭제</Button>
                        </TableCell>

                        {/* <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell> */}
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
            count={TOKENLIST.length}
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