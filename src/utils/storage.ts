export default {
  set: (name: string, value: any) => {
    if (value !== null) {
      localStorage.setItem(`${name}`, JSON.stringify(value));
    } else {
      localStorage.removeItem(`${name}`);
    }
  },
  get: (name: string) => {
    return JSON.parse(localStorage.getItem(`${name}`) || 'null');
  },
  remove: (name: string) => {
    localStorage.removeItem(`${name}`);
  },
};
