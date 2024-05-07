export function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  timeout = 300
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      //@ts-expect-error ignore type error
      func.apply(this, args);
    }, timeout);
  };
}
