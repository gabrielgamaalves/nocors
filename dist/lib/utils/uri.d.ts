/**
 * Constrói uma URL a partir de uma base, pathname e parâmetros de query
 * @param base - URL base para construção
 * @param pathname - Caminho a ser adicionado à URL base
 * @param query - Parâmetros de query opcionais (key-value pairs)
 * @returns Objeto URL construído com os parâmetros fornecidos
 * @throws {TypeError} Se a base não for uma URL válida
 */
declare function URI(base: string | URL, pathname: string, query?: Record<string, string>): URL;
export default URI;
//# sourceMappingURL=uri.d.ts.map