import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { motion } from 'framer-motion';

const spreadTypes = [
  { value: 'single_card', label: '单张牌阵', description: '简单直接的答案' },
  { value: 'three_card', label: '三张牌阵', description: '过去、现在、未来' },
  { value: 'celtic_cross', label: '凯尔特十字牌阵', description: '详细的人生解读' },
];

function TarotReading() {
  const [question, setQuestion] = useState('');
  const [spreadType, setSpreadType] = useState('three_card');
  const [isReading, setIsReading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleStartReading = async () => {
    if (!question.trim()) return;

    setIsReading(true);
    try {
      const response = await fetch('http://localhost:5000/api/tarot/reading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          spread_type: spreadType,
        }),
      });

      const data = await response.json();
      setCards(data.cards);
    } catch (error) {
      console.error('Error during reading:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ mt: 8, mb: 4 }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          塔罗牌占卜
        </Typography>

        {!isReading ? (
          <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <TextField
              fullWidth
              label="请输入你的问题"
              variant="outlined"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              sx={{ mb: 3 }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>选择牌阵</InputLabel>
              <Select
                value={spreadType}
                label="选择牌阵"
                onChange={(e) => setSpreadType(e.target.value)}
              >
                {spreadTypes.map((type) => (
                  <MenuItem key={type.value} value={type.value}>
                    {type.label} - {type.description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={handleStartReading}
              disabled={!question.trim()}
            >
              开始占卜
            </Button>
          </Box>
        ) : (
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={card.image_url}
                    alt={card.name}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {card.name}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {card.meaning_upright}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default TarotReading; 