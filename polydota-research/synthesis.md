# Synthesis: Prediction Markets × Киберспорт (Dota 2)

**Дата:** 11 июня 2026
**Тип:** Полный deep research (3-цикловый)
**Методология:** SCOUTs (3) → CRITIC → Deep Divers (3) → SYNTHESIZER

---

## 1. Рынок — цифры

### 1.1 Prediction markets — вся индустрия

| Метрика | 2024 | 2025 | 2026 (run-rate) |
|---|---|---|---|
| Весь рынок (годовой объём) | $15.8B | $44–64B | ~$325B+ |
| Polymarket | ~$5B | $21.5–33.4B | ~$120B |
| Kalshi | ~$2B | $17.1–22.9B | ~$125B |
| Polymarket + Kalshi доля | ~95% | 97.5% | 97%+ |
| Ежемесячный объём (обоих) | <$1B | $13B (дек) | $24B (апр) |

**Источник:** Forbes, Sacra, TRM Labs, FalconX/Covers

### 1.2 Ключевые игроки — valuation и revenue

| Компания | Revenue 2025 | ARR (май 2026) | Valuation | Revenue Model |
|---|---|---|---|---|
| **Polymarket** | $0 | $338M gross / $209M net | $15B | Taker fee 0.75–1.8% (с мар 2026) |
| **Kalshi** | $263.5M | >$1.5B | $22B | Taker fee ~1.2% |
| **Manifold** | <$1M | <$5M | <$20M | Play-money |
| **Metaculus** | <$1M | <$1M | N/A | Grants |

**Ключевой pivot:** Polymarket ввёл fees 30 марта 2026 — daily revenue >$1M сразу.

### 1.3 Esports betting market

| Метрика | Значение |
|---|---|
| Легальная выручка 2024 | $2.5 млрд |
| Легальная выручка 2025 | $2.8 млрд |
| Прогноз 2033 | $13.7 млрд (CAGR 11–14%) |
| Бетторов (2024) | 74.3 млн → 80+ млн (2025) |
| Gen Z доля | 44% |

### 1.4 Dota 2 на рынке ставок

| Параметр | Значение |
|---|---|
| Доля handle среди дисциплин | 8.7% (H1 2025) |
| Тренд доли | 14% (2023) → 10% (2024) → 8.7% (H1 2025) |
| Абсолютный рост объёма | +31% YoY (2025) |
| DATA.BET Dota 2 Q3 2025 | turnover +290%, profit +416% |
| Доля Восточной Европы | 22.8% |
| Активные Polymarket Dota 2 рынки | 5–8 (июнь 2026) |
| Polymarket Dota 2 volume | ~$106K (live markets total) |

### 1.5 Dota 2 экосистема — здоровье

| Метрика | Значение |
|---|---|
| Avg concurrent (H1 2026) | ~400K |
| Peak 2025 (TI) | 961K — лучший за 3 года |
| Core возраст | 25–34 (40–50%) |
| Новые игроки (18–24) | ~15% |
| ARPU core | $30–60/год |
| Регионы: СНГ | 25–30% (сильнейший) |
| Китай | ~15% (падение) |

**Вердикт:** Dota 2 — стабильная ниша, не dying game. Core-аудитория лояльна и платёжеспособна.

---

## 2. Конкурентный ландшафт

### 2.1 Прямые конкуренты Polydota

| Конкурент | Угроза | Почему |
|---|---|---|
| **Polymarket** | ★★★★★ | «Amazon PM» — BLAST partnership, Dota 2 рынки, $15B valuation |
| **Kalshi** | ★★★☆☆ | CFTC-regulated, 176 esports markets, $36M/week объём |
| **DraftKings Predicts** | ★★★★☆ | 6M+ DAU, бренд, 30+ штатов, запущен нояб 2025 |
| **FanDuel Predicts** | ★★★★☆ | Flutter EBITDA >$2.8B, 16 штатов |
| **Robinhood Event Contracts** | ★★★☆☆ | $300M+ revenue RR, esports не приоритет |
| **DATA.BET** | ★★☆☆☆ | B2B, standalone PM vertical (апр 2026) |

### 2.2 Esports B2B инфраструктура

| Компания | Продукт | Pricing |
|---|---|---|
| **Oddin.gg** | Full esports stack (odds + risk) | B2B непубличный |
| **PandaScore** | Data & Odds API | €500/мес per game |
| **GRID Esports** | Official data rights (Riot) | Enterprise |
| **DATA.BET** | Sportsbook + PM vertical | B2B |

### 2.3 Esports-specific PM платформы

**Специализированных нет.** Polydota — первый вертикальный prediction market для Dota 2.

---

## 3. Техническая реализация

### 3.1 Polymarket API для overlay

| Функция | Доступно |
|---|---|
| Чтение рынков (REST) | ✅ Публично |
| Торговля (CLOB REST + WS) | ✅ API-ключ + EIP-712 |
| Создание рынков | ❌ Только on-chain (смарт-контракты) |
| Реферальная программа | ✅ 25% от комиссии → рефереру |
| UMA Oracle для esports | ✅ Bond ~500 USDC, 1–2 часа resolution |

**Rate limits:** Публичные ~10 req/s, приватные ~1 req/s

### 3.2 UMA Oracle — критическое ограничение
- Liveness period: 1–2 часа для esports
- **Не подходит для live resolution** (нужен централизованный oracle)
- Bond: ~500 USDC (возвратный)
- Источники: ESL, HLTV, Liquipedia

### 3.3 Referral экономика
- 25% от протокольной комиссии → рефереру
- Протокольная комиссия: 2% от выигрыша
- **Фактически: 0.5% от оборота рефералов**

---

## 4. Регуляторный ландшафт

### 4.1 Стратегия регистрации

| Фаза | Юрисдикция | Стоимость | Срок | Особенности |
|---|---|---|---|---|
| **MVP** | **Curacao** | $25–40K/год | 2–6 нед | Crypto-native, esports разрешены |
| **Growth** | Isle of Man | £50–100K/год | 3–6 мес | Crypto разрешён, 0% corp tax |
| **Scale** | Malta (MGA) | €50K+/год | 4–8 мес | EU признание, esports регулируются |

### 4.2 Asia — Dota 2 core market
- **Индия** — 🟢 skill gaming exemption, огромная Dota 2 аудитория
- **Филиппины** — 🟢 PAGCOR, crypto разрешён
- **Китай** — 🚫 полный запрет
- **ЮВА** — 🟡 серый рынок, огромный объём

### 4.3 Риски
- CFTC enforcement (Polymarket штраф $1.2M в 2024)
- Illinois C&D (янв 2026)
- US geo-fence обязателен

---

## 5. Бизнес-модели и оценки

### 5.1 TAM/SAM/SOM для Polydota

| Метрика | Оценка | Источник |
|---|---|---|
| **TAM** — prediction markets всего | $325B+ (2026) | Рыночная экстраполяция |
| **TAM** — esports betting | $2.8B (2025) | SiGMA, SkyQuest |
| **SAM** — Dota 2 betting | $244M (8.7% × $2.8B) | Oddin.gg доля |
| **SOM** — Polydota Year 1 | $2–5M | Оценка (0.8–2% SAM) |
| **SOM** — Polydota Year 3 | $10–25M | При 2–5% рынка Dota 2 PM |

### 5.2 Revenue Model для Polydota

| Модель | Потенциал | Приоритет |
|---|---|---|
| **Taker fee** (0.5–1%) | При $10M объёма = $50–100K | 🥇 Основная |
| **Polymarket referral** (0.5% от оборота) | При $10M = $50K | 🥇 Немедленная |
| **B2B Data API** | $5–20K/мес enterprise | 🥈 Фаза 2 |
| **Telegram Premium** | $9.99/мес × 1000 = $10K/мес | 🥈 Быстрый старт |
| **Rev share с букмекерами** | CPA 50–100€ per FTD | 🥉 Фаза 3 |

### 5.3 Примерный P&L Year 1

| Статья | Месяц | Год |
|---|---|---|
| **Доход** | | |
| Polymarket referral (0.5% × $5M) | $2,083 | $25K |
| Taker fee (0.5% × $5M) | $2,083 | $25K |
| Telegram Premium (500 × $9.99) | $4,995 | $60K |
| **Total Revenue** | **$9,161** | **$110K** |
| **Расходы** | | |
| Разработка (freelance) | $5K | $60K |
| Лицензия Curacao | $2,083 | $25K |
| Хостинг/инфра | $500 | $6K |
| Marketing | $2K | $24K |
| Юр. сопровождение | $1K | $12K |
| **Total Cost** | **$10,583** | **$127K** |
| **Net** | **-$1,422** | **-$17K** |

**Окупаемость:** ~18–24 месяцев при росте объёмов.

---

## 6. Ключевой риск: DK/FanDuel

**Уже запущены** (ноябрь-декабрь 2025).

Последствия:
1. Отток casual users с Polymarket/Kalshi на знакомые бренды
2. Давление на fee rates
3. Регуляторное ускорение
4. **Окно Polydota: 12–18 месяцев** до полноценных Dota 2 markets

---

## 7. SWOT Polydota

| Сильные стороны | Слабые стороны |
|---|---|
| First-mover Dota 2 PM | Нет бренда/доверия |
| Экспертиза в экосистеме | Cold-start liquidity |
| Уже есть Telegram-бот + ML | Нет регуляторного щита |
| Dota 2 core лояльна | Маленький TAM ($244M) |

| Возможности | Угрозы |
|---|---|
| DK/FD игнорируют esports пока | Polymarket добавляет Dota 2 |
| Индия — skill gaming exemption | Kalshi: 176 esports markets |
| Polymarket API overlay | CFTC enforcement |
| BLAST партнёрство | DK/FD неизбежно зайдут |
| DATA.BET B2B | Dota 2 доля падает (8.7%) |

---

## 8. Рекомендации

### Product
1. **Telegram Premium Bot** (2 недели) — ML прогнозы $9.99/мес
2. **Polymarket referral layer** — направлять трафик → 0.5% оборота
3. **Не конкурировать head-on** — Polymarket проигрыш по ликвидности
4. **Ultra-specialised Dota 2:** TI bracket, live match, player transfers

### Revenue
1. **Немедленно:** Polymarket referral (0%)
2. **2 недели:** Telegram Premium ($10K/мес при 1000)
3. **3 месяца:** Taker fee overlay на Polymarket
4. **6 месяцев:** B2B Data API

### Legal
1. **Curacao** — старт ($25K)
2. **Geo-fence USA** — обязательно
3. **Индия** — отдельная стратегия (skill gaming)

### Risk
1. DK/FanDuel — **12–18 month window**
2. Dota 2 — shrinking share — мониторинг
3. Polymarket может закрыть/ограничить API

---

## 9. Fact-Check

| Утверждение | Проверка | Вердикт |
|---|---|---|
| Polymarket $33.4B в 2025 | Forbes vs Sacra разные цифры | ✅ ~$21.5–33.4B |
| Polymarket daily fees >$1M | Yahoo Finance, апр 2026 | ✅ Подтверждено |
| Esports betting $2.8B (2025) | SiGMA, SkyQuest | ✅ |
| Dota 2 handle 8.7% | Oddin.gg H1 2025 | ✅ |
| Polymarket API CLOB | docs.polymarket.com | ✅ |
| Dota 2 MAU ~400K | Steam Charts | ✅ |
| Kalshi $22B valuation | Май 2026, Series F | ✅ |

---

*Исследование проведено 11 июня 2026. Данные актуальны на дату публикации.*
