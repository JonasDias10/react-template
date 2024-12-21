import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  BarElement
} from "chart.js";
import { Box, Card, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { Pie, Bar, Line, Radar, Doughnut } from "react-chartjs-2";
import { chartData } from "./mock/chartData";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  BarElement
);

export default function HomeView() {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h4">Início</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", sm: "row" }, gap: 1 }}
        >
          <Card sx={{ p: 2, width: 1 }}>
            <Typography variant="h6" gutterBottom>
              Distribuição de Categorias
            </Typography>
            <Pie data={chartData.pieChart} />
          </Card>

          <Card sx={{ p: 2, width: 1 }}>
            <Typography variant="h6" gutterBottom>
              Usuários por Plataforma
            </Typography>
            <Doughnut data={chartData.doughnutChart} />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Vendas Mensais
            </Typography>
            <Bar data={chartData.barChart} />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Usuários Online
            </Typography>
            <Line data={chartData.lineChart} />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Pontuação de Métricas
            </Typography>
            <Radar data={chartData.radarChart} />
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
