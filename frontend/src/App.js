import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import tarotBg from './images/tarot-bg.jpg';

// 导入页面组件
import Home from './pages/Home';
import MajorArcana from './pages/MajorArcana';
import MajorArcanaDetail from './pages/MajorArcanaDetail';
import MinorArcana from './pages/MinorArcana';
import MinorArcanaDetail from './pages/MinorArcanaDetail';
import Reading from './pages/Reading';
import Spreads from './pages/Spreads';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-brand">塔罗牌占卜</Link>
          <ul className="nav-menu">
            <li><Link to="/major-arcana">大阿尔卡纳</Link></li>
            <li><Link to="/minor-arcana/cups">小阿尔卡纳</Link></li>
            <li><Link to="/spreads/three-card">牌阵介绍</Link></li>
            <li><Link to="/reading">在线占卜</Link></li>
          </ul>
        </nav>
        
        <header className="hero" style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                      url(${tarotBg}) center/cover`
        }}>
          <h1>塔罗牌占卜</h1>
          <p>探索命运的奥秘，寻找生命的答案</p>
          <button className="cta-button">开始占卜</button>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/major-arcana" element={<MajorArcana />} />
            <Route path="/major-arcana/:id" element={<MajorArcanaDetail />} />
            <Route path="/minor-arcana/:suit" element={<MinorArcana />} />
            <Route path="/minor-arcana/:suit/:id" element={<MinorArcanaDetail />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/spreads/:type" element={<Spreads />} />
          </Routes>
        </main>

        <section className="features">
          <h2>塔罗牌系统</h2>
          <div className="card-groups">
            <div className="card">
              <h3>圣杯牌组</h3>
              <p>对应水元素，与情感和直觉有关</p>
            </div>
            <div className="card">
              <h3>权杖牌组</h3>
              <p>对应火元素，与行动和创造有关</p>
            </div>
            <div className="card">
              <h3>星币牌组</h3>
              <p>对应土元素，与物质和享乐有关</p>
            </div>
            <div className="card">
              <h3>宝剑牌组</h3>
              <p>对应风元素，与思维和智慧有关</p>
            </div>
          </div>
        </section>

        <section className="reading-types">
          <h2>常见牌阵</h2>
          <div className="spread-list">
            <div className="spread">三张牌占卜法</div>
            <div className="spread">圣三角牌阵</div>
            <div className="spread">灵感对应牌阵</div>
            <div className="spread">六芒星牌阵</div>
            <div className="spread">维纳斯牌阵</div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>关于我们</h3>
              <p>专业的塔罗牌占卜平台</p>
            </div>
            <div className="footer-section">
              <h3>联系方式</h3>
              <p>邮箱：contact@tarot.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            © 2024 塔罗牌占卜. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App; 