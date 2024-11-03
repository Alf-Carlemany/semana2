const ctx = document.getElementById('myChart');
var votos = [0, 0, 0, 0, 0]; // Inicializa los votos a 0

const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Socialistas', 'Liberales', 'Animalistas', 'Centristas', 'Ecologistas'],
    datasets: [{
      label: 'Votaciones',
      data: votos,
      backgroundColor: [
        'rgba(255, 0, 0, 0.2)',
        'rgba(0, 0, 255, 0.2)',
        'rgba(255, 255, 0, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 0, 0, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(255, 255, 0, 1)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 255, 0, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {

  }
});

/* Implementamos la función votar de cada botón */
function vote(option) {
  votos[option]++;
  myChart.update();
}

/* Implementamos la función reset, que pone a 0 los contadores */
function reset() {
  votos.fill(0);
  myChart.update();
}
