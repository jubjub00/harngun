export function getFirstSegment(path: string): string {
    const segments = path.split('/').filter((segment) => segment !== '')

    return segments.length > 0 ? segments[0] : ''
}
