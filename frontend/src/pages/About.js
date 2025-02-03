import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';

function About() {
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
            mb: 6,
          }}
        >
          关于塔罗占卜
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  塔罗的起源
                </Typography>
                <Typography paragraph>
                  塔罗牌最早可以追溯到15世纪的欧洲，最初是一种纸牌游戏。随着时间推移，它逐渐发展成为一种深具象征意义的占卜工具，包含了丰富的神秘学知识和心理学智慧。
                </Typography>
                <Typography paragraph>
                  现代最广为使用的韦特-史密斯塔罗牌（Rider-Waite-Smith Tarot）由亚瑟·爱德华·韦特、帕梅拉·科尔曼·史密斯于1909年创作，其符号系统对现代塔罗占卜产生了深远影响。
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  塔罗牌的构成
                </Typography>
                <Typography paragraph>
                  一副完整的塔罗牌由78张牌组成，分为大阿尔卡纳（22张）和小阿尔卡纳（56张）。大阿尔卡纳代表人生重大主题和灵性课题，小阿尔卡纳则反映日常生活中的具体情况。
                </Typography>
                <Typography paragraph>
                  每张牌都蕴含着丰富的象征意义，通过抽牌和解读，能够帮助我们更好地理解当前处境，做出更明智的决定。
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.02 }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  如何解读塔罗牌
                </Typography>
                <Typography paragraph>
                  塔罗牌解读是一门需要经验和直觉的艺术。在进行占卜时，我们需要：
                </Typography>
                <Typography component="div" sx={{ pl: 2 }}>
                  • 保持开放和专注的心态<br />
                  • 清晰地表达你的问题<br />
                  • 相信直觉的指引<br />
                  • 结合牌面含义和个人感受<br />
                  • 理性分析，不盲目依赖
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About; 