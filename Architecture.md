# O.W.L - Architecture Details

## 🏗️ Project Structure

```
O.W.L/
├── Frontend (Next.js - Vercel)
│ ├── Dashboard/
│ │ ├── Global View
│ │ │ - Active pipelines status
│ │ │ - Real-time security alerts
│ │ │ - Main KPIs
│ │ │ - Multi-language overview
│ │ └── Performance Charts
│ │ - Template execution time
│ │ - Environment comparisons
│ │ - Build history
│ │
│ ├── Templates/
│ │ ├── By Language
│ │ │ - TypeScript/JavaScript
│ │ │ - Python
│ │ │ - C/C++
│ │ │ - Java
│ │ │ - Go
│ │ │ - Rust
│ │ └── Configuration
│ │ - Template editor
│ │ - Interactive examples
│ │ - Documentation
│ │
│ ├── Monitoring/
│ │ ├── Pipeline Metrics
│ │ │ - Runtime stats
│ │ │ - Resource usage
│ │ │ - Real-time logs
│ │ └── Environment Tests
│ │ - Docker vs Podman
│ │ - Linux vs Windows
│ │ - Performance comparisons
│ │
│ └── Security/
│ ├── Scan Results
│ │ - SAST/DAST overview
│ │ - Dependencies scan
│ │ - Container security
│ └── Security Dashboard
│ - Vulnerabilities
│ - Compliance
│ - Risk scoring

├── Backend (Freebox Delta Server)
│ ├── API/
│ │ ├── GitLab Integration
│ │ │ - Pipeline status
│ │ │ - Build metrics
│ │ │ - Test results
│ │ │
│ │ ├── Docker/Podman Manager
│ │ │ - Container status
│ │ │ - Resource monitoring
│ │ │ - Environment metrics
│ │ │
│ │ ├── Security Scanner
│ │ │ - SAST/DAST aggregator
│ │ │ - Vulnerability tracking
│ │ │ - Compliance checker
│ │ │
│ │ └── Analytics Engine
│ │ - Performance metrics
│ │ - Historical data
│ │ - Trend analysis
│ │
│ ├── Services/
│ │ ├── Database (PostgreSQL)
│ │ │ - Template storage
│ │ │ - Metrics history
│ │ │ - Security results
│ │ │
│ │ ├── Cache (Redis)
│ │ │ - Real-time data
│ │ │ - Pipeline status
│ │ │ - Performance metrics
│ │ │
│ │ ├── Monitoring Stack
│ │ │ - Prometheus
│ │ │ - Grafana
│ │ │ - Alert manager
│ │ │
│ │ └── Security Tools
│ │ - SonarQube
│ │ - Container scanners
│ │ - Dependency checkers
│ │
│ └── Infrastructure/
│ ├── Docker Compose
│ │ - Service definitions
│ │ - Network config
│ │ - Volume management
│ │
│ └── Deployment
│ - CI/CD configs
│ - Backup strategy
│ - Monitoring setup
```

---

## 🔌 System Integration

### Frontend (Vercel)

- Next.js user interface
- REST API communication with backend
- Real-time updates via WebSocket
- Automatic deployment

### Backend (Freebox Delta)

- Node.js/Express API
- PostgreSQL database
- Redis cache
- Monitoring stack
- Security tools

### Communication

- Secured REST API
- WebSocket for real-time data
- GitLab API integration
- Docker/Podman API

### Security

- HTTPS enforcement
- API authentication
- Token management
- Rate limiting

## 🔑 Key Features

### 1. Global Monitoring

- Real-time pipeline visualization
- Build status by language
- Performance metrics
- Critical alerts

### 2. Template Management

- Automated testing across environments
- Model validation
- Generated documentation
- Configuration examples

### 3. Security Hub

- Centralized security results
- Vulnerability analysis
- Security recommendations
- Patch tracking

### 4. Performance Analytics

- Environment comparisons
- Execution metrics
- Resource utilization
- History and trends

## 🔄 Typical Workflow

1. Template selection
2. Environment configuration
3. Test launch
4. Real-time monitoring
5. Results analysis
6. Data-driven optimization

## 🎯 Main Objectives

- Monitor complete GitLab CI/CD chain
- Explore GitLab CI capabilities
  - Build processes
  - Security checks
  - Cyber security
  - Integrity checks
  - Testing suites
- Create and maintain CI/CD templates for various technologies
- Validate templates across different environments
- Document and share knowledge
