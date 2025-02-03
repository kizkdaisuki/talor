from app import db
from datetime import datetime
import json

class TarotCard(db.Model):
    """塔罗牌模型"""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    number = db.Column(db.Integer)
    arcana_type = db.Column(db.String(20))  # Major or Minor
    suit = db.Column(db.String(50))  # For minor arcana: Wands, Cups, Swords, Pentacles
    image_url = db.Column(db.String(200))
    keywords = db.Column(db.String(500))
    meaning_upright = db.Column(db.Text)
    meaning_reversed = db.Column(db.Text)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'number': self.number,
            'arcana_type': self.arcana_type,
            'suit': self.suit,
            'image_url': self.image_url,
            'keywords': self.keywords.split(',') if self.keywords else [],
            'meaning_upright': self.meaning_upright,
            'meaning_reversed': self.meaning_reversed
        }

class TarotReading(db.Model):
    """塔罗牌阵解读记录"""
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(500))
    spread_type = db.Column(db.String(50))
    cards = db.Column(db.Text)  # Stored as JSON string of card IDs
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def set_cards(self, card_list):
        self.cards = json.dumps(card_list)
    
    def get_cards(self):
        return json.loads(self.cards) if self.cards else [] 