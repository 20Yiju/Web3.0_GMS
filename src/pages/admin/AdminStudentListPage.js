import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
// import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';

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
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
  

  return (
    <>
    
      <Helmet>
        <title> Home </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          {/* <Typography variant="h4" gutterBottom>
            <h2>관리자 홈페이지</h2>
          </Typography> */}
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            hambugar
          </Button>
        </Stack>

        <Card>
          <AdminListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

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
                            <Button className='btn1' onClick={handleClickOpen}>
                              입력
                            <Dialog 

                            open={open} onClose={handleClose}>
                              <DialogTitle>Subscribe</DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  To subscribe to this website, please enter your email address here. We
                                  will send updates occasionally.
                                </DialogContentText>
                                <TextField
                                  autoFocus
                                  margin="dense"
                                  id="name"
                                  label="Email Address"
                                  type="email"
                                  fullWidth
                                  variant="standard"
                                />
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose}>취소</Button>
                                <Button onClick={handleClose}>발행</Button>
                              </DialogActions>
                            </Dialog>
                            </Button>
                        </TableCell>

                        <TableCell align="left">
                            <Button onClick={handleClickOpen}>
                              입력
                            </Button>
                            <Dialog open={open} onClose={handleClose}>
                              <DialogTitle>홍길동의 출결정보 수정</DialogTitle>
                              <DialogContent>
                                <FormControl sx={{ m: 1, width: 100 }}>
                                  <InputLabel id="demo-multiple-name-label">주차</InputLabel>
                                    <Select
                                      labelId="demo-multiple-name-label"
                                      id="demo-multiple-name"
                                      multiple
                                      value={personName}
                                      onChange={handleChange}
                                      input={<OutlinedInput label="Name" />}
                                      MenuProps={MenuProps}
                                    >
                                      {names.map((name) => (
                                        <MenuItem
                                          key={name}
                                          value={name}
                                          style={getStyles(name, personName, theme)}
                                        >
                                          {name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                </FormControl>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                              
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose}>취소</Button>
                                <Button onClick={handleClose}>발행</Button>
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