# Nocors

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Nocors** is a simple and efficient solution to bypass CORS (Cross-Origin Resource Sharing) issues in HTTP requests made with Node.js. With this library, you can make requests to any API without worrying about CORS restrictions.

## 🌐 Language Options
- [English (en-US)](README.md)
- [Português (pt-BR)](docs/README.pt-BR.md)

## ✨ Features

- ✅ **Simple usage** to bypass CORS problems
- 🔄 **Automatic User Agents** - Automatic rotation of user agents to avoid blocks
- 📦 **Zero dependencies** - No external packages required
- ⚡ **Lightweight and fast** - Minimalist and efficient implementation
- 🔧 **Easy integration** - Compatible with Node.js native fetch

## 📦 Installation

⚠️ **Note**: Not yet available on NPM. To use, clone the repository:

```bash
git clone https://github.com/gabrielgamaalves/nocors.git
cd nocors
```

## 🚀 Quick Start

### Basic Example

```javascript
const nocors = require('./nocors');

const response = await nocors('https://api.example.com/data');
const data = await response.json();
```

### Example with Custom Options

```javascript
const nocors = require('./nocors');

const options = {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token-here'
  },
  body: JSON.stringify({ key: 'value' }),
  device: ['desktop', 'desktop', 'mobile'] /* 2/3 chance of being a desktop user-agent */
};

const response = await nocors('https://api.example.com/endpoint', options);
const result = await response.text();
```

## 🎯 Features

### Configurable Timeout
Support for custom timeout in requests.

### Automatic Retry
Automatic reconnection attempts in case of failures.

## 📚 API Reference

### `nocors(url, options)`

Makes an HTTP request bypassing CORS restrictions.

**Parameters:**
- `url` (string): Request URL
- `options` (object, optional): Extended request options that include:
  - Standard `RequestInit` properties
  - `timeout` (number): Timeout in milliseconds
  - `retries` (number): Number of retry attempts in case of failure
  - `device` (Array<"mobile" | "desktop">): Array of devices for user agent selection

**Returns:** Promise containing the request response

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This project is intended for educational and development purposes. Use responsibly and respect the terms of service of the websites you access.

---

**Developed by [Gabriel Gama Alves](https://github.com/gabrielgamaalves)**