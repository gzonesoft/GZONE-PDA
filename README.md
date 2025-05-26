# GZONE-PDA
GZONE-PDA 프로젝트(web, svr 폴더 분리)

## 버전 정보

- **v1.0 (2025-05-26)**: 프로젝트 구조 및 개발 작업 이력 관리 지침, 서비스 접속 URL 등 초기 세팅 완료

## 프로젝트 구조

- `web/` : 사용자 화면 및 뷰(View) 관련 프론트엔드 프로젝트가 위치합니다.
- `api/` : 각종 백엔드 로직 및 서버 관련 코드가 위치합니다.

각 폴더별로 독립적으로 개발 및 배포가 가능합니다.

## 서비스 접속 확인

- 서비스 URL: [https://ai.gzonesoft.com/GZONE-PDA/web/](https://ai.gzonesoft.com/GZONE-PDA/web/)

## 개발 작업 이력 관리 지침

1. **Git 브랜치 전략**
   - `main`: 배포(운영)용 코드만 유지
   - `develop`: 개발 통합 브랜치
   - `feature/이름`: 기능별 작업 브랜치
   - `hotfix/이름`: 긴급 수정 브랜치

2. **커밋 메시지 규칙**
   - 명확하고 일관된 메시지 작성 (예: [feat], [fix], [docs], [refactor] 등 태그 사용)
   - 예시: `feat: 로그인 페이지 UI 추가`

3. **Pull Request(PR) 활용**
   - 기능/수정 완료 후 PR 생성, 코드 리뷰 후 main/develop에 병합

4. **이슈(Tasks) 관리**
   - GitHub Issues 등으로 작업 항목 등록 및 진행 상황 추적

5. **CHANGELOG.md 작성**
   - 주요 변경사항을 버전별로 기록
