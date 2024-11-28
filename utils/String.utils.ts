export function isRootPath(root: string, path: string): boolean {
    root = root.replace(/\/+$/, '') || '/'
    path = path.replace(/\/+$/, '') || '/'

    return path.startsWith(root) && (path === root || path[root.length] === '/')
}
