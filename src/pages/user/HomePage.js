import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
// import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  TableHead
} from '@mui/material';
// components
import Label from '../../components/label';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user';
// mock
import USERLIST from '../../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  // { id: 'name', label: 'Name', alignRight: false },
  // { id: 'company', label: 'Company', alignRight: false },
  // { id: 'role', label: 'Role', alignRight: false },
  // { id: 'isVerified', label: 'Verified', alignRight: false },
  // { id: 'status', label: 'Status', alignRight: false },
  // { id: '' },
  { id: 'name', label: '과목명', alignRight: false },
  { id: 'achievement', label: '성취도', alignRight: false },
  { id: 'professor', label: '담당 교수', alignRight: false },
  { id: 'syllabus', label: '강의 계획서', alignRight: false },
  { id: 'attendance', label: '출석 토큰', alignRight: false },
  { id: 'grade', label: '성적 토큰', alignRight: false },
  { id: 'ranking', label: '랭킹', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function HomePage() {
  const [list, setCourseList] = useState([]);

  useEffect(() => {
    axios.get('/dashboard/home').then((response) => {
        setCourseList(response.data)
      });
  }, []);

  const navigate = useNavigate();

  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  // const [filterName, setFilterName] = useState('');

  // const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleCloseMenu = () => {
    setOpen(null);
  };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setPage(0);
  //   setRowsPerPage(parseInt(event.target.value, 10));
  // };

  // const handleFilterByName = (event) => {
  //   setPage(0);
  //   setFilterName(event.target.value);
  // };

  // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  // const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  // const isNotFound = !filteredUsers.length && !!filterName;

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

  return (
    <>
      <Helmet>
        <title> Home </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Home
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            hambugar
          </Button>
        </Stack>
      {/* 여기에서부터 변경 */}
        <Card>
          {/* {list.map((val) => {
              return <h1>{name} = {val.profID}</h1>
          })} */}
          <Scrollbar>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>과목명</TableCell>
                    <TableCell align='center'>성취도</TableCell>
                    <TableCell align='center'>담당 교수</TableCell>
                    <TableCell align='center'>강의 계획서</TableCell>
                    <TableCell align='center'>출석 토큰</TableCell>
                    <TableCell align='center'>성적 토큰</TableCell>
                    <TableCell align='center'>랭킹</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list.map((row) => (
                    <TableRow>
                      <TableCell align='center'>{row.courseName}</TableCell>
                      <TableCell align='center'>{row.achieve}</TableCell>
                      <TableCell align='center'>{row.professor}</TableCell>
                      <TableCell align='center'>
                        <Button onClick={goSyllabus}>확인</Button>
                      </TableCell>
                      <TableCell align='center'>
                        <Button onClick={goAttendance}>입력</Button>
                      </TableCell>
                      <TableCell align='center'>
                        <Button onClick={goGrade}>입력</Button>
                      </TableCell>
                      <TableCell align='center'>
                        <Button onClick={goRanking}>확인</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Scrollbar>
        </Card>
       {/* 변경 마지막 */}
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}