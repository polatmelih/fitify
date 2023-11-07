import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import {useEffect, useState} from "react";
import {api} from "../../utils/api";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [contactData, setContactData] = useState(Array);

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const response = await api.get('/get-contact-info.php');
                setContactData(response.data)
            } catch (error) {
                alert(error.response.data.message);
            }
        };

        if (sessionStorage.getItem("role").toString().toLowerCase() === "coach") fetchContactInfo();
    }, []);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "last_name",
            headerName: "Nachname",
            flex: 1,
            cellClassName: "last-name-column--cell",
        },
        {
            field: "e_mail",
            headerName: "E-mail",
            flex: 1,
        },
        {
            field: "age",
            headerName: "Alter",
            flex: 1,
        },
        {
            field: "club",
            headerName: "Club",
            flex: 1,
        },
    ];

    return (
        <Box m="20px">
            <Header
                title="Kontaktdaten"
                subtitle="Kontaktdaten Sportler"
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={contactData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Contacts;