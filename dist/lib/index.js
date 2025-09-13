"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nocors = nocors;
const UsersAgent_1 = __importDefault(require("./core/UsersAgent"));
/**
 * Realiza uma requisição HTTP com sistema avançado para burlar a segurança CORS
 * @param uri - URL ou objeto URL para a requisição
 * @param init - Opções de configuração do requisição. Com opção de user-agent(mobile ou desktop) => device
 * @description Sistema de segurança avançado para validação CORS, eficaz, mas com desempenho reduzido. Voltado para requisições críticas
 * @returns Promise resolvida com a resposta da requisição
 * @throws {TypeError} Se o URI não for válido
 * @throws {Error} Se a validação CORS falhar
 * @example
 * // Example:
 * await nocors('https://api.example.com/data', {
 *   method: 'GET',
 *   device: ['desktop'],
 *   headers: {
 *      authorization: Bearer ...
 *   }
 * });
 */
function nocors(uri_1) {
    return __awaiter(this, arguments, void 0, function* (uri, init = {}) {
        const url = new URL(uri);
        const headers = new Headers({
            "User-Agent": (0, UsersAgent_1.default)({ device: init === null || init === void 0 ? void 0 : init.device }),
            "Host": url.host,
            "Origin": url.origin,
            "Referer": url.origin + "/",
            "Connection": "keep-alive"
        });
        if (init === null || init === void 0 ? void 0 : init.headers) {
            Object.entries(init.headers).forEach(([key, value]) => {
                headers.set(key, value);
            });
            delete init.headers;
        }
        const $f = yield fetch(url, Object.assign({ headers, referrer: url.origin }, init));
        return $f;
    });
}
exports.default = nocors;
