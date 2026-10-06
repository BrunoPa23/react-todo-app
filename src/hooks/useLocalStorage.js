import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      return localStorageItem ? JSON.parse(localStorageItem) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(itemName, JSON.stringify(item));
    } catch (error) {
      // si localStorage no esta disponible, el valor no se persiste
    }
  }, [item, itemName]);

  return [item, setItem];
}

export { useLocalStorage };
