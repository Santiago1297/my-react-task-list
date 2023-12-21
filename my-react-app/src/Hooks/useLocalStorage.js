export const useLocalStorage = (key, task) => {
      const getLocalStorage = () => {
        const toDo = localStorage.getItem(key);
        if (!toDo){
            localStorage.setItem(key, JSON.stringify([]));
            return [];
        }
        if (toDo){
            return JSON.parse(toDo);
        }
        return toDo;
      }
      const setLocalStorage = () => {
        localStorage.setItem(key, JSON.stringify(task));
      }
      return {getLocalStorage, setLocalStorage};
}