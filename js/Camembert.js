const xValues = ["Jeux Vidéos", "Donjon & Dragon", "Lecture", "Sport"];
const yValues = [40, 25, 15, 20];
const barColors = ["red", "green","blue","orange"];

new Chart("Passions", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
});