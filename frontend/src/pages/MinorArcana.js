import React from 'react';
import { useParams } from 'react-router-dom';
import './MinorArcana.css';

function MinorArcana() {
  const { suit } = useParams();

  const suitInfo = {
    cups: {
      name: '圣杯牌组',
      element: '水元素',
      description: '圣杯牌组对应水元素，与情感和直觉有关。柔情似水可以说明圣杯牌组的感性特质。圣杯牌组通常反映生活中的人际关系，代表爱、情绪、敏感、体贴、和谐、同理心、友谊、内向、静默、梦境、幻想。',
      cards: [
        {
          name: '圣杯侍者',
          upright: '代表新的感情机会、好消息、创意灵感的开始',
          reversed: '情感上的失望、创意受阻、消息延迟'
        },
        {
          name: '圣杯二',
          upright: '和谐的伙伴关系、相互理解、感情交流顺畅',
          reversed: '感情不和、沟通不良、关系紧张'
        }
        // 可以继续添加更多牌
      ]
    },
    wands: {
      name: '权杖牌组',
      element: '火元素',
      description: '权杖牌组对应火元素，与行动和创造有关。热情如火用来说明火元素的外向特质。权杖牌组通常表现生活中的行动面，代表主动、活力、渴望、直观、积极、创造、乐观、冒险、奋斗、企业、开疆拓土。',
      cards: [
        {
          name: '权杖侍者',
          upright: '新的机会、冒险的开始、好消息即将到来',
          reversed: '计划延迟、坏消息、机会错过'
        }
        // 可以继续添加更多牌
      ]
    },
    pentacles: {
      name: '星币牌组',
      element: '土元素',
      description: '星币牌组对应土元素，与物质和享乐有关。我们喜欢脚踏实地的人，这样的人通常草根性比较强。星币牌组反应外面的物质面，代表金钱、大自然、稳定、安全感、健康、家庭、遗产、日常生活、工作、交易、花钱享乐。',
      cards: [
        {
          name: '星币侍者',
          upright: '新的工作机会、实际的开始、财运来临',
          reversed: '机会错过、投资失利、财务问题'
        }
        // 可以继续添加更多牌
      ]
    },
    swords: {
      name: '宝剑牌组',
      element: '风元素',
      description: '宝剑牌组对应风元素，与思维和智慧有关。剑气逼人用以说明宝剑牌组的锐利特质。宝剑牌组通常呈现生活中的思维活动，代表理性、判断、智慧、决策、分析、逻辑、沟通、学习、真理。',
      cards: [
        {
          name: '宝剑侍者',
          upright: '新的想法、清晰的思维、重要的信息',
          reversed: '混乱的思维、错误的判断、虚假的信息'
        }
        // 可以继续添加更多牌
      ]
    }
  };

  const currentSuit = suitInfo[suit] || suitInfo.cups;

  return (
    <div className="page-container minor-arcana">
      <div className="intro-section">
        <h1>{currentSuit.name}</h1>
        <div className="element-badge">{currentSuit.element}</div>
        <p className="intro-text">{currentSuit.description}</p>
      </div>

      <div className="cards-grid">
        {currentSuit.cards.map((card, index) => (
          <div key={index} className="card-item">
            <div className="card-header">
              <h2>{card.name}</h2>
            </div>
            <div className="card-content">
              <div className="card-meaning">
                <h3>正位释义</h3>
                <p>{card.upright}</p>
              </div>
              <div className="card-meaning">
                <h3>逆位释义</h3>
                <p>{card.reversed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MinorArcana; 