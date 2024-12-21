export const chartData = {
  pieChart: {
    labels: ["Categoria A", "Categoria B", "Categoria C"],
    datasets: [
      {
        label: "Distribuição",
        data: [300, 150, 100],
        backgroundColor: ["#3f51b5", "#ff4081", "#4caf50"],
        hoverBackgroundColor: ["#303f9f", "#f50057", "#388e3c"]
      }
    ]
  },
  barChart: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
    datasets: [
      {
        label: "Vendas",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "#3f51b5"
      }
    ]
  },
  lineChart: {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],
    datasets: [
      {
        label: "Usuários Online",
        data: [50, 75, 150, 120, 100],
        borderColor: "#ff4081",
        backgroundColor: "rgba(255, 64, 129, 0.2)",
        tension: 0.4
      }
    ]
  },
  radarChart: {
    labels: ["Design", "Desempenho", "Funcionalidade", "Usabilidade", "Segurança"],
    datasets: [
      {
        label: "Pontuação",
        data: [8, 7, 9, 6, 8],
        backgroundColor: "rgba(63, 81, 181, 0.2)",
        borderColor: "#3f51b5"
      }
    ]
  },
  doughnutChart: {
    labels: ["Android", "iOS", "Web"],
    datasets: [
      {
        label: "Usuários por Plataforma",
        data: [400, 300, 200],
        backgroundColor: ["#4caf50", "#ff9800", "#3f51b5"],
        hoverBackgroundColor: ["#388e3c", "#f57c00", "#303f9f"]
      }
    ]
  }
};
