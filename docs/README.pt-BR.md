# Nocors

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

O **Nocors** é uma solução simples e eficiente para contornar problemas de CORS (Cross-Origin Resource Sharing) em requisições HTTP feitas com Node.js. Com esta biblioteca, você pode fazer requisições para qualquer API sem se preocupar com restrições de CORS.

## 🌐 Opções de língua
- [English (en-US)](README.md)
- [Português (pt-BR)](docs/README.pt-BR.md)

## ✨ Características

- ✅ **Uso simples** para contornar problemas de CORS
- 🔄 **User Agents automáticos** - Rotação automática de user agents para evitar bloqueios
- 📦 **Zero dependências** - Não requer pacotes externos
- ⚡ **Leve e rápido** - Implementação minimalista e eficiente
- 🔧 **Fácil integração** - Compatível com fetch nativo do Node.js

## 📦 Instalação

⚠️ **Atenção**: Ainda não disponível no NPM. Para usar, clone o repositório:

```bash
git clone https://github.com/gabrielgamaalves/nocors.git
cd nocors
```

## 🚀 Início Rápido

### Exemplo Básico

```javascript
const nocors = require('./nocors');

const response = await nocors('https://api.exemplo.com/dados');
const data = await response.json();
```

### Exemplo com Opções Personalizadas

```javascript
const nocors = require('./nocors');

const options = {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer seu-token-aqui'
  },
  body: JSON.stringify({ chave: 'valor' }),
  device: ['desktop', 'desktop', 'mobile'] /* 2/3 de chance de ser um user-agent desktop */
};

const response = await nocors.fetch('https://api.exemplo.com/endpoint', options);
const resultado = await response.text();
```

## 🎯 Features

### Timeout Configurável
Suporte para timeout personalizado em requisições.

### Retry Automático
Tentativas automáticas de reconexão em caso de falhas.

## 📚 API Reference

### `nocors(url, options)`

Faz uma requisição HTTP contornando restrições de CORS.

**Parâmetros:**
- `url` (string): URL da requisição
- `options` (object, opcional): Opções estendidas da requisição que incluem:
  - Propriedades padrão do `RequestInit`
  - `timeout` (number): Timeout em milissegundos
  - `retries` (number): Número de tentativas em caso de falha
  - `device` (Array<"mobile" | "desktop">): Array de dispositivos para seleção de user agent

**Retorna:** Promise contendo a resposta da requisição

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ⚠️ Disclaimer

Este projeto é destinado para fins educacionais e de desenvolvimento. Use com responsabilidade e respeite os termos de serviço dos sites que você acessa.

---

**Desenvolvido por [Gabriel Gama Alves](https://github.com/gabrielgamaalves)**