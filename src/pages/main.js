import logo from '../static/emergency.JPG';
import '../css/main.css';
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>여기는 딴따라들 메인 페이지입니다.</h1>
        <Link to="feed">
          <h3>피드 보러 가기</h3>
        </Link>
        <Link to="brick_breaker">
          <h3>벽돌깨기 하러가기</h3>
        </Link>
      </header>
    </div>
  );
}

export default MainPage;
