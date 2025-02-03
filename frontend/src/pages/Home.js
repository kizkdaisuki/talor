import React from 'react';
import { useNavigate } from 'react-router-dom';
import tarotBg from '../images/tarot-bg.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="hero" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                    url(${tarotBg}) center/cover`
      }}>
        <h1>塔罗牌占卜</h1>
        <p>探索命运的奥秘，寻找生命的答案</p>
        <button className="cta-button" onClick={() => navigate('/reading')}>开始占卜</button>
      </header>

      <section className="features">
        <h2>塔罗牌系统</h2>
        <div className="card-groups">
          <div className="card" onClick={() => navigate('/minor-arcana/cups')}>
            <h3>圣杯牌组</h3>
            <p>对应水元素，与情感和直觉有关</p>
          </div>
          <div className="card" onClick={() => navigate('/minor-arcana/wands')}>
            <h3>权杖牌组</h3>
            <p>对应火元素，与行动和创造有关</p>
          </div>
          <div className="card" onClick={() => navigate('/minor-arcana/pentacles')}>
            <h3>星币牌组</h3>
            <p>对应土元素，与物质和享乐有关</p>
          </div>
          <div className="card" onClick={() => navigate('/minor-arcana/swords')}>
            <h3>宝剑牌组</h3>
            <p>对应风元素，与思维和智慧有关</p>
          </div>
        </div>
      </section>

      <section className="reading-types">
        <h2>常见牌阵</h2>
        <div className="spread-list">
          <div className="spread" onClick={() => navigate('/spreads/three-card')}>三张牌占卜法</div>
          <div className="spread" onClick={() => navigate('/spreads/triangle')}>圣三角牌阵</div>
          <div className="spread" onClick={() => navigate('/spreads/inspiration')}>灵感对应牌阵</div>
          <div className="spread" onClick={() => navigate('/spreads/hexagram')}>六芒星牌阵</div>
          <div className="spread" onClick={() => navigate('/spreads/venus')}>维纳斯牌阵</div>
        </div>
      </section>
    </div>
  );
}

export default Home; 