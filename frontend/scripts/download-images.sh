#!/bin/bash

# 创建必要的目录
mkdir -p public/images

# 下载背景图片 - 使用 Lorem Picsum 提供的随机神秘风格图片
curl "https://picsum.photos/1920/1080" -o public/images/tarot-bg.jpg

# 下载网站图标和 Logo - 使用 placehold.co 提供的占位图片
curl "https://placehold.co/32x32" -o public/favicon.ico
curl "https://placehold.co/192x192" -o public/logo192.png
curl "https://placehold.co/512x512" -o public/logo512.png 