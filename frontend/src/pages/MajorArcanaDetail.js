import React from 'react';
import { useParams } from 'react-router-dom';
import { majorArcanaData } from '../data/tarotData';
import './MajorArcanaDetail.css';

function MajorArcanaDetail() {
  const { id } = useParams();
  const card = majorArcanaData[id];

  if (!card) {
    return <div className="error-message">未找到该塔罗牌的信息</div>;
  }

  // 根据卡牌ID获取对应的图片名称
  const getImageName = () => {
    switch(id) {
      case '00': return '愚者';
      case '01': return '魔术师';
      case '02': return '女祭司';
      case '03': return '皇后';
      case '04': return '皇帝';
      case '05': return '教皇';
      case '06': return '恋人';
      case '07': return '战车';
      case '08': return '力量';
      case '09': return '隐者';
      case '10': return '命运之轮';
      case '11': return '正义';
      case '12': return '倒吊人';
      case '13': return '死神';
      case '14': return '节制';
      case '15': return '恶魔';
      case '16': return '高塔';
      case '17': return '星星';
      case '18': return '月亮';
      case '19': return '太阳';
      case '20': return '审判';
      case '21': return '世界';
      default: return '';
    }
  };

  return (
    <div className="card-detail-page">
      <div className="card-header-section">
        <h1>{card.name}</h1>
        <div className="card-title">{card.title}</div>
        <div className="card-number">第{card.id}号牌</div>
        <div className="keywords">{card.keywords}</div>
      </div>

      <div className="card-image-section">
        <div className="card-image-container">
          <img 
            src={`/images/大阿尔卡纳/${getImageName()}.jpg`} 
            alt={card.name} 
            className="card-image"
          />
        </div>
      </div>

      <div className="card-content-section">
        <div className="card-appearance">
          <h2>牌面描述</h2>
          <p>{card.description.appearance}</p>
        </div>

        <div className="card-symbolism">
          <h2>象征意义</h2>
          <p>{card.description.symbolism}</p>
        </div>

        <div className="card-interpretations">
          <div className="interpretation upright">
            <h2>正位解释</h2>
            <div className="interpretation-section">
              <h3>总体含义</h3>
              <p>{card.description.upright.general}</p>
            </div>
            <div className="interpretation-section">
              <h3>感情</h3>
              <p>{card.description.upright.love}</p>
            </div>
            <div className="interpretation-section">
              <h3>事业</h3>
              <p>{card.description.upright.career}</p>
            </div>
            <div className="interpretation-section">
              <h3>建议</h3>
              <p>{card.description.upright.advice}</p>
            </div>
          </div>

          <div className="interpretation reversed">
            <h2>逆位解释</h2>
            <div className="interpretation-section">
              <h3>总体含义</h3>
              <p>{card.description.reversed.general}</p>
            </div>
            <div className="interpretation-section">
              <h3>感情</h3>
              <p>{card.description.reversed.love}</p>
            </div>
            <div className="interpretation-section">
              <h3>事业</h3>
              <p>{card.description.reversed.career}</p>
            </div>
            <div className="interpretation-section">
              <h3>建议</h3>
              <p>{card.description.reversed.advice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MajorArcanaDetail; 