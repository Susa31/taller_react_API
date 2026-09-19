import { useFavoritos } from './hooks/useFavoritos';
import { ContadorFavoritos } from './components/ContadorFavoritos';

function App() {
  const { favoritos, toggleFavorito } = useFavoritos();

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Prueba de Favoritos (RF-05)</h1>
      <ContadorFavoritos cantidad={favoritos.length} />
      
      <button 
        onClick={() => toggleFavorito('12345')}
        style={{ marginTop: '10px', padding: '10px', cursor: 'pointer' }}
      >
        {favoritos.includes('12345') ? 'Quitar favorito' : 'Agregar favorito (ID: 12345)'}
      </button>
    </div>
  );
}

export default App;