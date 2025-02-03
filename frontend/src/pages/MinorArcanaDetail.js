import React from 'react';
import { useParams } from 'react-router-dom';
import { minorArcanaData } from '../data/tarotData';
import './MinorArcanaDetail.css';

function MinorArcanaDetail() {
  const { suit, id } = useParams();
  const card = minorArcanaData[suit]?.[id];

  if (!card) {
    return <div className="error-message">未找到该塔罗牌的信息</div>;
  }

  // 根据花色和编号获取对应的图片名称
  const getImageName = () => {
    const suitNames = {
      'cups': '圣杯',
      'wands': '权杖',
      'swords': '宝剑',
      'pentacles': '星币'
    };

    const numberNames = {
      '01': '首牌',
      '02': '2',
      '03': '3',
      '04': '4',
      '05': '5',
      '06': '6',
      '07': '7',
      '08': '8',
      '09': '9',
      '10': '10',
      '11': '侍从',
      '12': '骑士',
      '13': '皇后',
      '14': '国王'
    };

    const suitName = suitNames[suit] || '';
    const numberName = numberNames[id] || '';
    return `${suitName}${numberName}`;
  };

  return (
    <div className="card-detail-page">
      <div className="card-header-section">
        <h1>{card.name}</h1>
        <div className="card-title">{card.title}</div>
        <div className="card-number">第{card.id}号{getSuitName(card.suit)}牌</div>
        <div className="keywords">{card.keywords}</div>
      </div>

      <div className="card-image-section">
        <div className="card-image-container">
          <img 
            src={`/images/小阿尔卡纳/${getImageName()}.jpg`} 
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
          <div className="interpretation upright" data-suit={card.suit}>
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

          <div className="interpretation reversed" data-suit={card.suit}>
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

function getSuitName(suit) {
  const suitNames = {
    'cups': '圣杯',
    'wands': '权杖',
    'swords': '宝剑',
    'pentacles': '钱币'
  };
  return suitNames[suit] || suit;
}

export default MinorArcanaDetail; 