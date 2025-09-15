# Nocors

[![npm version](https://img.shields.io/npm/v/@gabrielgamaalves/nocors)](https://www.npmjs.com/package/@gabrielgamaalves/nocors) [![Open Source](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Nocors** é uma biblioteca Node.js para requisições HTTP avançadas, oferecendo controle granular de cabeçalhos e perfis de identidade de cliente. Projetada para facilitar integrações robustas, monitoramento confiável e testes de compatibilidade em diferentes cenários de rede e dispositivos.

## 🌐 Opções de língua

* [English (en-US)](../README.en-US.md)
* [Português (pt-BR)](README.pt-BR.md)

## ✨ Características Principais

* ✅ **Uso simples** para <u>lidar</u> com problemas de CORS de forma segura
* 🔄 **User Agents automáticos** – Rotação de user agents para simulação de diferentes dispositivos
* 📦 **Zero dependências** – Implementação leve, sem pacotes externos
* ⚡ **Leve e rápido** – Código minimalista e eficiente
* 🔧 **Fácil integração** – Compatível com `fetch` nativo do Node.js

## 📦 Instalação

Instale diretamente do npm:

```bash
npm install @gabrielgamaalves/nocors
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
  device: ['desktop', 'desktop', 'mobile'] // Probabilidade de 2/3 para desktop
};

const response = await nocors('https://api.exemplo.com/endpoint', options);
const resultado = await response.text();
```

## 🎯 Funcionalidades Avançadas

* ⏱ **Timeout Configurável (Em Breve)**
  Planejado para permitir definir limites de tempo por requisição, oferecendo maior controle sobre chamadas lentas ou instáveis. Atualmente, ainda não implementado.

* 🔄 **Retry Automático (Em Breve)**
  Suporte planejado para tentativas automáticas em caso de falhas temporárias, com backoff configurável. Atualmente, ainda não implementado.

* 🧩 **Perfis de Identidade de Cliente**
  Simule diferentes dispositivos e navegadores, garantindo testes de compatibilidade robustos em diversos cenários de integração.

## 📚 API Reference

### `nocors(url, options)`

Realiza uma requisição HTTP com configuração avançada de headers e controle de identidade de cliente.

**Parâmetros:**

* `url` (string): URL da requisição
* `options` (object, opcional): Opções estendidas, atualmente incluindo:

  * Propriedades padrão do `RequestInit`
  * `device` (Array<"mobile" | "desktop">): Array de dispositivos para seleção de user agent
  * ⚠️ `timeout` e `retries` **são funcionalidades planejadas e ainda não implementadas**

**Retorna:** Promise com a resposta da requisição

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ⚠️ Uso Responsável

**Nocors** é uma biblioteca Node.js destinada **estritamente ao desenvolvimento, testes e integração de APIs de forma legítima**. Ao utilizar esta biblioteca, você concorda com os seguintes termos:

1. **Autorização Necessária:** Você deve possuir permissão explícita para acessar os serviços com os quais interage. Não use esta biblioteca para acessar sistemas sem consentimento.

2. **Conformidade com Leis e Políticas:** Você é o único responsável por garantir que seu uso esteja em conformidade com todas as leis, regulamentos e os termos de serviço, políticas de privacidade ou acordos de uso do serviço alvo.

3. **Isenção de Responsabilidade por Uso Indevido:** O autor do **Nocors** **não assume qualquer responsabilidade ou obrigação** por usos indevidos, incluindo, mas não se limitando a: acesso não autorizado, coleta automatizada de dados, coleta de informações pessoais ou ações que possam interromper, sobrecarregar ou prejudicar qualquer serviço ou sistema.

4. **Uso Ético e Responsável Apenas:** Esta biblioteca é fornecida “como está” para cenários legítimos de desenvolvimento e teste. Não deve ser utilizada para atividades ilegais, antiéticas ou que violem direitos de terceiros.

**Ao utilizar o Nocors, você assume total responsabilidade por suas ações.**

---

**Desenvolvido por [Gabriel Gama Alves](https://github.com/gabrielgamaalves)**

---