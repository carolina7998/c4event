$(document).ready(function() {
    $.ajax({
        url: '../../estadisticas.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',  // Puedes cambiarlo a 'bar', 'pie', etc.
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Cantidad de Servicios Solicitados',
                        data: data.counts, // Los datos ya son números
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(199, 199, 199, 0.2)',
                            'rgba(83, 102, 255, 0.2)',
                            'rgba(63, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(199, 199, 199, 1)',
                            'rgba(83, 102, 255, 1)',
                            'rgba(63, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Servicios más solicitados'
                        }
                    }
                }
            });
        },
        error: function(error) {
            console.log('Error al obtener los datos:', error);
        }
    });
});