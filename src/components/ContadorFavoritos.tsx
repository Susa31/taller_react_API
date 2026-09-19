interface Props {
  cantidad: number;
}

export const ContadorFavoritos = ({ cantidad }: Props) => {
  return (
    <div style={{ padding: '10px', fontWeight: 'bold' }}>
      Favoritos guardados: {cantidad}
    </div>
  );
};