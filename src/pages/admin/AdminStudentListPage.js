import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
// import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
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
  Checkbox,
  TableHead
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
import axios from 'axios';
import { pickersDayClasses } from '@mui/lab';
import { sizeWidth } from '@mui/system';
// const selectAll=async ()=>{
//   axios.get('/a_dashboard/a_studentlist')
// }

export default function AdminStudentListPage() {
  const [list, setStudentList] = useState([]);

  useEffect(() => {
    axios.get('/a_dashboard/a_studentlist').then((response) => {
        setStudentList(response.data)
      });
  }, []);

  const [name, stname] = useState('');

  return (
    <>
      <Helmet >
        <title> Student List </title>
      </Helmet>

      <Container>
        <h1> Student List</h1>
        <Card>
          {/* {list.map((val) => {
              return <h1>{name} = {val.profID}</h1>
          })} */}
          <Scrollbar>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>순서</TableCell>
                    <TableCell align='center'>이름</TableCell>
                    <TableCell align='center'>학번</TableCell>
                    <TableCell align='center'>재이수</TableCell>
                    <TableCell align='center'>토큰 발행정보</TableCell>
                    <TableCell align='center'>출석</TableCell>
                    <TableCell align='center'>성적</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list.map((row) => (
                    <TableRow key={row.profID}>
                      <TableCell align='center'>{row.profID}</TableCell>
                      <TableCell align='center'>{row.studentName}</TableCell>
                      <TableCell align='center'>{row.studentID}</TableCell>
                      <TableCell align='center'>{row.isRetake}</TableCell>
                      <TableCell align='center'>
                        <Button>확인</Button>
                      </TableCell>
                      <TableCell align='center'>
                        <Button>입력</Button>
                      </TableCell>
                      <TableCell align='center'>
                        <Button>입력</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Scrollbar>
        </Card>
      </Container>
    </>
  );
}
