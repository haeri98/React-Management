import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name' : '홍길동',
  'birthday' : '96 1012',
  'gender' : '남자',
  'job' : '대학생'
}

function App() {
  return (
    <Customer 
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
 