import { formatDate } from "@fullcalendar/core";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Select,
  InputLabel,
  FormControl
} from "@mui/material";
import { tokens } from "../../theme";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import HotelIcon from "@mui/icons-material/Hotel";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChartWeight from "../../components/LineChartWeight";
import BarChartTraining from "../../components/BarChartTraining";
import BarChartSleep from "../../components/BarChartSleep";
import StatBox from "../../components/StatBox";
import BarChartTrainingsLength from "../../components/BarChartTrainingsLength";
import {useEffect, useState} from "react";
import {api} from "../../utils/api";
import {MenuItem} from "react-pro-sidebar";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [eventsData, setEventsData] = useState(Array);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await api.get('/get-events.php');
        setEventsData(response.data);
      } catch (error) {
        alert(error.response.data.message);
      }
    };

    if (sessionStorage.getItem("role").toString().toLowerCase() !== "coach" || sessionStorage.getItem("sus_id")) fetchEventsData();
  }, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header
          title="DASHBOARD"
          subtitle="Willkommen zu Ihrem Dashboard"
        />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="72.3kg"
            subtitle="Gewichtsänderung in Kilogramm dieser Monat"
            progress="0.75"
            increase="+0.2kg"
            icon={<MonitorWeightIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="7.2h"
            subtitle="Durchschnittliche Schlafdauer diese Woche"
            progress="0.90"
            increase="+0.3h"
            icon={<HotelIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2.5h"
            subtitle="Durchschnittliche Trainingszeit diese Woche"
            progress="0.30"
            increase="+4h"
            increase="+4h"
            icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="23h"
            subtitle="Summe der Trainingszeit diese Woche"
            progress="0.80"
            increase="+10h"
            icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Gewicht
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                72.3kg
              </Typography>
            </Box>
          </Box>
          <Box
            height="250px"
            m="-20px 0 0 0"
          >
            <LineChartWeight isDashboard={true} />
          </Box>
        </Box>
        {/* CALENDAR SIDEBAR */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          sx={{overflowY: "auto"}}
        >
          <Typography variant="h5">Anstehende Termine</Typography>
          <List>
            {eventsData.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={<Typography>{event.title}</Typography>}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        locale: "CH",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight="600"
            >
              Anstehende Ereignisse
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box> */}

        {/* ROW 3 */}

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Trainingszeit in Stunden
          </Typography>
          <Box
            height="250px"
            mt="-20px"
          >
            <BarChartTrainingsLength isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Schlaf in Stunden
          </Typography>
          <Box
            height="250px"
            mt="-20px"
          >
            <BarChartSleep isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
