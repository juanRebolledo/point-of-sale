const clearLocalStorage = () => localStorage.clear()

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))

const removeItemLocalStorage = (key) => localStorage.removeItem(key)

const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export { clearLocalStorage, getLocalStorage, removeItemLocalStorage, setLocalStorage }
