# cloud-run-proxy

A lightweight HTTP proxy service built with NestJS, designed to run on Google Cloud Run. It forwards HTTP requests through an optional upstream proxy IP, making it useful for routing traffic through specific egress points.

[![Publish to GHCR](https://github.com/rzhosan/cloud-run-proxy/actions/workflows/publish.yml/badge.svg)](https://github.com/rzhosan/cloud-run-proxy/actions/workflows/publish.yml)

## Docker

```bash
docker pull ghcr.io/rzhosan/cloud-run-proxy:latest
docker run -p 8080:8080 ghcr.io/rzhosan/cloud-run-proxy:latest
```

## API

### `GET /health`

Returns service status, version, and the caller's IP address.

**Response:**
```json
{
  "version": "1.0.0",
  "healthy": true,
  "timestamp": "2024-01-01T00:00:00.000Z",
  "your_ip": "1.2.3.4",
  "headers": {}
}
```

Set the `VERSION` environment variable to expose your deployment version.

---

### `POST /proxy`

Forwards an HTTP request to the specified URL, optionally routing through a proxy IP.

**Request body:**

| Field     | Type   | Required | Default | Description                          |
|-----------|--------|----------|---------|--------------------------------------|
| `url`     | string | yes      | —       | Target URL to forward the request to |
| `method`  | string | no       | `get`   | HTTP method                          |
| `headers` | object | no       | `{}`    | Headers to forward                   |
| `body`    | object | no       | `null`  | Request body                         |
| `timeout` | number | no       | `10000` | Timeout in milliseconds              |
| `proxyIp` | string | no       | `null`  | Upstream proxy host/IP (port 80)     |

**Example:**
```bash
curl -X POST http://localhost:8080/proxy \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://jsonplaceholder.typicode.com/posts/1",
    "method": "get"
  }'
```

**Response:**
```json
{
  "status": 200,
  "data": { ... },
  "headers": { ... }
}
```

## Development

```bash
yarn install
yarn start:dev
```

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# coverage
yarn test:cov
```

## Stack

- [NestJS](https://nestjs.com/) v11
- Node.js 24
- Docker / Google Cloud Run
