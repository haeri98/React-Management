import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const columns = ["번호","프로필","이름","생년월일","성별","직업"];

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961012',
  'gender' : '남자',
  'job' : '대학생'
  },
  {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '둥글래',
  'birthday' : '970122',
  'gender' : '여자',
  'job' : '대학생'
  },
  {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김옥순',
  'birthday' : '980302',
  'gender' : '여자',
  'job' : '회사원'
  }
]

function App(props) {
  const {classes} = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map(c => {return (
               <TableCell key={c}>{c}</TableCell>
            );})}
          </TableRow>
        </TableHead>
        <TableBody>
        {customers.map(c => {return (
          <TableRow key={c.id}>
            <TableCell>{c.id}</TableCell>
            <TableCell><img src={c.image} alt="profile"/></TableCell>
            <TableCell>{c.name}</TableCell>
            <TableCell>{c.birthday}</TableCell>
            <TableCell>{c.gender}</TableCell>
            <TableCell>{c.job}</TableCell>
          </TableRow>
         );})}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
 