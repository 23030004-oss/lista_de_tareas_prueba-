export default class Filters {
  constructor() {
    this.form = document.getElementById('filters');
    this.btn = document.getElementById('search');
  }

  onClick(callback) {
    // 1. Maneja el botón de Buscar
    this.btn.onclick = (e) => {
      e.preventDefault();
      const data = new FormData(this.form);
      callback({
        type: data.get('type'),
        words: data.get('words'),
      });
    };

    // 2. NUEVO: Maneja el cambio automático de los filtros (Todos, Completados, etc.)
    // Esto hace que la tabla se actualice sin darle clic a buscar
    this.form.addEventListener('change', () => {
      const data = new FormData(this.form);
      callback({
        type: data.get('type'),
        words: data.get('words'),
      });
    });
  }
}