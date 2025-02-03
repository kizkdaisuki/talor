import React from 'react';
import { useParams } from 'react-router-dom';

function Spreads() {
  const { type } = useParams();

  const spreadTypes = {
    'three-card': '三张牌占卜法',
    'triangle': '圣三角牌阵',
    'inspiration': '灵感对应牌阵',
    'hexagram': '六芒星牌阵',
    'venus': '维纳斯牌阵'
  };

  return (
    <div className="page-container">
      <h1>{spreadTypes[type] || '牌阵介绍'}</h1>
      <p>这里将展示 {spreadTypes[type]} 的详细信息和使用方法...</p>
    </div>
  );
}

export default Spreads; 