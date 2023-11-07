import {Autocomplete, Box, IconButton, TextField, useTheme} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {ColorModeContext, tokens} from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import {Link} from "react-router-dom";
import {api} from "../../utils/api";

const Topbar = ({handleReload}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [sus, setSus] = useState('');
    const [susData, setSusData] = useState(Array);

    const handleChange = (event, newValue) => {
        if (newValue === null) return;
        setSus(newValue);
        sessionStorage.setItem("sus_id", newValue.id)
        handleReload();
    };

    useEffect(() => {
        const fetchSus = async () => {
            try {
                const response = await api.get('/get-sus.php');
                const tmp = response.data.map(entry => ({
                    label: entry.name, id: entry.id,
                }));
                setSusData(tmp);
                setSus(tmp[0]);
                sessionStorage.setItem("sus_id", response.data[0].id)
            } catch (error) {
                alert(error.response.data.message);
            }
        };

        if (sessionStorage.getItem("role").toString().toLowerCase() === "coach") fetchSus();
    }, []);

    return (<Box
            justifyContent="space-between"
            p={2}
        >
            {/* ICONS */}
            <Box display="flex" justifyContent="flex-end">
                {sessionStorage.getItem("role").toString().toLowerCase() === "coach" && <Autocomplete
                    disablePortal
                    blurOnSelect
                    options={susData}
                    value={sus}
                    sx={{width: "20vw", maxWidth: "300px", mr: "20px"}}
                    onChange={handleChange}
                    renderInput={(params) => <TextField id={params.id} {...params} label="SuS wählen"/>}
                />}
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon/> : <LightModeOutlinedIcon/>}
                </IconButton>
                <IconButton component={Link} to="/profil">
                    <PersonOutlinedIcon/>
                </IconButton>
                <IconButton
                    type="button"
                    sx={{p: 1}}
                    onClick={() => {
                        api.post("/logout.php");
                        sessionStorage.clear();
                        window.location.href = "/login";
                    }}
                >
                    <LogoutIcon/>
                </IconButton>
            </Box>

        </Box>);
};

export default Topbar;
