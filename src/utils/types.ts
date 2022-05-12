export function isType<T>(x: unknown, array: any): x is T {
  return array.includes(x);
}
