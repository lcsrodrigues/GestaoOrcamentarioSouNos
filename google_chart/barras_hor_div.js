google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        [' ', ' ',],
        ['Tarefa 1', 8175000],
        ['Tarefa 2', 3792000],
        ['Tarefa 3', 2695000],
        ['Tarefa 4', 2099000],
        ['Tarefa 5', 1526000]
      ]);

      var options = {
        title: ' ',
        chartArea: {width: '50%', height: '100%'},
        hAxis: {
          title: ' ',
          minValue: 0
        },
        vAxis: {
          title: ' '
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('barras_hor_div'));

      chart.draw(data, options);
    }