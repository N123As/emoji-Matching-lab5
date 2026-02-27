# Emoji Matching Game (Емоційні пари)

На даному етапі проєкт є архітектурним каркасом (alpha scaffold), який фокусується на правильній структурі застосунку, стандартах документації та відповідності сучасним вимогам розробки. 

## Мета
- Створити правильну структуру проєкту (папки, компоненти, сторінки).
- Продемонструвати перевикористання компонентів.
- Підготувати основу для подальшого розвитку гри протягом півріччя.

## Реалізовано в цій версії (Alpha)
- 3 сторінки:
  - **Start** (Старт)
  - **Game** (Гра)
  - **Results** (Результати)
- Компоненти:
  - `StartScreen`
  - `EmojiCard`
  - `EmojiGrid`
  - `GameHUD`
  - `ResultsBlock`
- Базові стилі та плейсхолдери станів (без повної логіки гри).

## Структура проєкту
```text
emoji-matching-game/
├─ app/
│  ├─ layout.jsx
│  ├─ page.jsx
│  ├─ game/
│  │  └─ page.jsx
│  └─ results/
│     └─ page.jsx
│
├─ components/
│  ├─ StartScreen.jsx
│  ├─ EmojiCard.jsx
│  ├─ EmojiGrid.jsx
│  ├─ GameHUD.jsx
│  └─ ResultsBlock.jsx
│
├─ store/
│  └─ gameStore.js
│
├─ hooks/
│  └─ useGameLogic.js
│
├─ styles/
│  └─ globals.css
│
├─ public/
│
├─ package.json
└─ README.md
