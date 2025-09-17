/**
 * Constrói uma URL a partir de uma base, pathname e parâmetros de query
 * 
 * @param base - URL base para construção
 * @param pathname - Caminho a ser adicionado à URL base
 * @param query - Parâmetros de query opcionais (key-value pairs)
 * 
 * @returns Objeto URL construído com os parâmetros fornecidos
 * @throws {TypeError} Se a base não for uma URL válida
 */
export interface IURINocors {
  (base: string | URL, pathname: string, query?: Record<string, string>): URL;
}

export const URI: IURINocors = (base, pathname, query) => {
  const url = new URL(base);
  const path = url.pathname ? url.pathname.split("/").filter(f => f) : [];

  path.push(...pathname.split("/").filter(f => f));
  url.pathname = path.join("/");

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  return url;
}

export default URI;