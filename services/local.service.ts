const setItem = (key: string, data: Object) => {
  try {
    const dataStr = JSON.stringify(data);
    return localStorage.setItem(key, dataStr);
  } catch (e) {
    // console.error(e);
  }
};

const getItem = (key: string) => {
  try {
    const localStr = localStorage.getItem(key);
    return JSON.parse(localStr as any);
  } catch (e) {
    // console.error(e);
    return null;
  }
};

const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    // console.error(e);
  }
};

const localService = {
  setItem,
  getItem,
  removeItem,
};

export default localService;
