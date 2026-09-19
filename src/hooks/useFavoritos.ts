import { useState, useEffect } from 'react';

export const useFavoritos = () => {
  const [favoritos, setFavoritos] = useState<string[]>(() => {
    const guardados = localStorage.getItem('meal_favoritos');
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem('meal_favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (id: string) => {
    setFavoritos((prev) => 
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return { favoritos, toggleFavorito };
};