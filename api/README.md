# GZONE-PDA API 폴더

- Node.js(Express) 기반 REST API 서버
- MySQL 접속정보는 .env 파일로 분리
- Swagger 문서: /api-docs 경로에서 확인

## 실행 방법

1. .env 파일 생성 및 DB 정보 입력
2. 의존성 설치: npm install
3. 서버 실행: npm start

## 예시 .env 파일

(DB 정보는 실제 환경에 맞게 수정)

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
PORT=3002
