export function useLocalStorage<T>(key: string, value?: any) {
  const item = localStorage.getItem(key) as string;
  const getItem = () => (JSON.parse(item) as T) ?? null;
  const setItem = () => localStorage.setItem(key, JSON.stringify(value));
  const removeItem = () => localStorage.removeItem(key);
  console.log(item);
  return {
    getItem,
    setItem,
    removeItem,
  };
}
