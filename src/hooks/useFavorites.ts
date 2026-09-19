import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('meal_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    // Sincroniza si otro componente emite un cambio o si cambia la pestaña
    const syncFavorites = () => {
      try {
        const saved = localStorage.getItem('meal_favorites');
        setFavorites(saved ? JSON.parse(saved) : []);
      } catch (error) {
        setFavorites([]);
      }
    };

    window.addEventListener('favorites_updated', syncFavorites);
    window.addEventListener('storage', syncFavorites); // Sincronización entre pestañas

    return () => {
      window.removeEventListener('favorites_updated', syncFavorites);
      window.removeEventListener('storage', syncFavorites);
    };
  }, []);

  const toggleFavorite = (id: string) => {
    // Leemos el estado más reciente directamente del localStorage antes de mutar
    const currentFavorites = (() => {
      try {
        const saved = localStorage.getItem('meal_favorites');
        return saved ? JSON.parse(saved) : [];
      } catch (error) {
        return [];
      }
    })();

    const newFavorites = currentFavorites.includes(id)
      ? currentFavorites.filter((favId: string) => favId !== id)
      : [...currentFavorites, id];

    localStorage.setItem('meal_favorites', JSON.stringify(newFavorites));
    
    // Disparamos el evento para que los demás componentes se actualicen solos
    window.dispatchEvent(new Event('favorites_updated'));
  };

  return { favorites, toggleFavorite };
};