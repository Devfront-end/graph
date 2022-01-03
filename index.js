const graph = document.getElementById("graph").getContext("2d");

let myChart = new Chart(graph, {
  type: "bar",
  data: {
    labels: [
      "Pointe-à-Pitre",
      "Basse-Terre",
      "Basse-Terre",
      "Baie-Mahault",
      "Les Abymes",
      "Deshaies",
      "Saint-François",
    ],
    datasets: [
      {
        label: "Population",
        data: [15410, 20705, 31691, 53590, 4097, 12518],
        backgroundColor: [
          "red",
          "orange",
          "salmon",
          "blue",
          "yellow",
          "purple",
          "green",
          "tomato",
        ],
        hoverBorderWidth: 3,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Villes de Guadeloupe",
        fontSize: 24,
        fontFamily: "Arial",
        fontColor: "777",
      },
      legend: {
        display: false,
      },
      
    },
    layout: {
        padding: {
            top: 20,
        },
    },
  },
});
