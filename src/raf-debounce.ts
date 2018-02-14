export function debounce(callback: Function) {
    let savedArgs = null;
    return (...args) => {
        if (!savedArgs) {
            requestAnimationFrame(() => {
                let clone = savedArgs;
                savedArgs = null;
                callback(...clone);
            });
        }
        savedArgs = args;
    };
}
