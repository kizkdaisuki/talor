from flask import jsonify, request
from app.routes import main_bp
from app.models.tarot import TarotCard, TarotReading
from app import db
import random

@main_bp.route('/api/tarot/cards', methods=['GET'])
def get_all_cards():
    """获取所有塔罗牌信息"""
    cards = TarotCard.query.all()
    return jsonify([card.to_dict() for card in cards])

@main_bp.route('/api/tarot/reading', methods=['POST'])
def create_reading():
    """创建新的塔罗牌阵解读"""
    data = request.get_json()
    question = data.get('question')
    spread_type = data.get('spread_type', 'three_card')
    
    # 根据牌阵类型选择要抽取的牌数
    cards_count = {
        'three_card': 3,
        'celtic_cross': 10,
        'single_card': 1
    }.get(spread_type, 3)
    
    # 随机抽取指定数量的牌
    all_cards = TarotCard.query.all()
    selected_cards = random.sample(all_cards, cards_count)
    
    # 创建新的解读记录
    reading = TarotReading(
        question=question,
        spread_type=spread_type,
        cards=[card.id for card in selected_cards]
    )
    db.session.add(reading)
    db.session.commit()
    
    return jsonify({
        'reading_id': reading.id,
        'cards': [card.to_dict() for card in selected_cards],
        'question': question,
        'spread_type': spread_type
    }) 