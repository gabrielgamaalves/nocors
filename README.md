# Nocors

[![npm version](https://img.shields.io/npm/v/@gabrielgamaalves/nocors)](https://www.npmjs.com/package/@gabrielgamaalves/nocors) [![Open Source](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Nocors** is a Node.js library for advanced HTTP requests, providing fine-grained header control and client identity profiles. Designed to support robust integrations, reliable monitoring, and compatibility testing across diverse network and device scenarios.

## 🌐 Language Options

* [English (en-US)](README.en-US.md)
* [Português (pt-BR)](docs/README.pt-BR.md)

## ✨ Key Features

* ✅ **Simple usage** to <u>handle</u> CORS issues safely
* 🔄 **Automatic User Agents** – Rotate user agents to simulate different devices
* 📦 **Zero dependencies** – Lightweight implementation with no external packages
* ⚡ **Fast and Efficient** – Minimalist, high-performance code
* 🔧 **Easy Integration** – Fully compatible with Node.js native `fetch`

## 📦 Installation

Install directly from npm:

```bash
npm install @gabrielgamaalves/nocors
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
  device: ['desktop', 'desktop', 'mobile'] // 2/3 chance of being a desktop user-agent
};

const response = await nocors('https://api.example.com/endpoint', options);
const result = await response.text();
```

## 🎯 Advanced Features

* ⏱ **Configurable Timeout (Coming Soon)**
  Planned feature to set a specific timeout for each request, providing better control over slow or unstable calls. Currently not implemented.

* 🔄 **Automatic Retry (Coming Soon)**
  Planned support for automatic retries in case of transient failures, with configurable backoff. Currently not implemented.

* 🧩 **Client Identity Profiles**
  Simulate different devices and browsers, ensuring robust compatibility testing across diverse integration scenarios.

## 📚 API Reference

### `nocors(url, options)`

Performs an HTTP request with advanced header configuration and client identity control.

**Parameters:**

* `url` (string): The request URL
* `options` (object, optional): Extended request options, currently including:

  * Standard `RequestInit` properties
  * `device` (Array<"mobile" | "desktop">): Array of devices for user-agent selection
  * ⚠️ `timeout` and `retries` **are planned features and not yet implemented**

**Returns:** Promise containing the response

## 📄 License

This project is licensed under MIT. See the [LICENSE](LICENSE) file for details.

## ⚠️ Responsible Usage

**Nocors** is a Node.js library intended strictly for legitimate development, testing, and API integration purposes. By using this library, you agree to the following terms:

1. **Authorization Required:** You must have explicit permission to access the services you interact with. Do not use this library to access systems without consent.

2. **Compliance with Laws and Policies:** You are solely responsible for ensuring your usage complies with all applicable laws, regulations, and the terms of service, privacy policies, or usage agreements of the target service.

3. **No Liability for Misuse:** The author of **Nocors** assumes **no responsibility or liability** for any misuse, including but not limited to unauthorized access, data scraping, automated data collection of personal information, or actions that may disrupt, overload, or harm any service or system.

4. **Ethical and Responsible Use Only:** This library is provided as-is for legitimate development and testing scenarios. You must not use it for activities that could be considered illegal, unethical, or in violation of third-party rights.

**By using Nocors, you accept full responsibility for your actions.**

---

**Developed by [Gabriel Gama Alves](https://github.com/gabrielgamaalves)**

---