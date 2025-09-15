"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function URI(base, pathname, query) {
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
exports.default = URI;
