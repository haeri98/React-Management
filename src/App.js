import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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

function App() {
  return (
    <div>
    {
      customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })
    }
    </div>
  );
}

export default App;
 