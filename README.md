# Emoji Matching Game (Емоційні пари)

Невеликий навчальний проєкт: гра на пошук пар емодзі (matching pairs).
Поточна версія — **каркас застосунку** (alpha scaffold): сторінки, компоненти, базові стани та стилі.
Без повної бізнес-логіки та без складних механік (додається поступово протягом семестру).

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
