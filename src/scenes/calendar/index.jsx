import {useEffect, useState} from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {api} from "../../utils/api";

const Index = () => {
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

  const handleDateClick = async (selected) => {
    const title = prompt("Bitte Termin eingeben");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      try {
        const requestBody = {
          "title": title,
          "start": selected.startStr,
          "end": selected.endStr,
          "allDay": selected.allDay,
        }
        await api.post('/set-event.php', JSON.parse(JSON.stringify(requestBody)));
        const response = await api.get('/get-events.php');
        setEventsData(response.data);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  const handleEventClick = async (selected) => {
    if (window.confirm(`Sind Sie sich sicher, dass Sie diesen Termin löschen möchten? '${selected.event.title}'`)) {

      try {
        await api.delete('/delete-event.php?id=' + selected.event.id);
        const response = await api.get('/get-events.php');
        setEventsData(response.data);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <Box m="20px">
      <Header
        title="Kalender"
        subtitle="Termine eintragen"
      />

      <Box
        display="flex"
        justifyContent="space-between"
      >
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
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
                      primary={event.title}
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

        {/* CALENDAR */}
        <Box
          flex="1 1 100%"
          ml="15px"
        >
          <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listYear",
            }}
            buttonText={{
              today: "Heute",
              month: "Monat",
              week: "Woche",
              day: "Tag",
              list: "Liste",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={eventsData}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
