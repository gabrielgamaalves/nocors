interface NocorsRequestInit extends RequestInit {
    device?: Array<"mobile" | "desktop">;
}
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
declare function nocors(uri: URL | string, init?: NocorsRequestInit): Promise<Response>;
export default nocors;
//# sourceMappingURL=index.d.ts.map