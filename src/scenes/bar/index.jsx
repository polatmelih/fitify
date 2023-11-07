import {Box, Button, TextField} from "@mui/material";
import Header from "../../components/Header";
import BarChartTrainingsLength from "../../components/BarChartTrainingsLength";
import BarChartTrainingsIntensity from "../../components/BarChartTrainingsIntensity";
import {useState} from "react";
import {api} from "../../utils/api";

const Bar = ( ) => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [rerender1, setRerender1] = useState(crypto.randomUUID());
    const [rerender2, setRerender2] = useState(crypto.randomUUID());

    const handleSubmit = async () => {
        try {
            const requestBody = JSON.parse(JSON.stringify({"training": input1, "training_intensity": input2}));
            await api.post("/set-training.php", requestBody);
            setInput1("")
            setInput2("")
            setRerender1(crypto.randomUUID())
            setRerender2(crypto.randomUUID())
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    return (
        <Box m="20px">
            <Header title="Trainingsdetails" subtitle="Alles im Überblick" />
            {sessionStorage.getItem("role").toString().toLowerCase() !== "coach" &&<Box>
                <TextField type="number" value={input1} label="Trainingsdauer" variant="outlined" onChange={(e) => setInput1(e.target.value)} sx={{mr: "20px"}} />
                <TextField type="number" value={input2} label="Trainingsintensität" variant="outlined" onChange={(e) => setInput2(e.target.value)} sx={{mr: "20px"}} />
                <Button
                    disabled={!input1 || !input2}
                    variant="contained"
                    size="large"
                    sx={{height: "50px"}}
                    onClick={handleSubmit}
                >Eintragen</Button>
            </Box>}
            <Box height="38vh">
                <BarChartTrainingsIntensity key={rerender1} />
            </Box>
            <Box height="38vh">
                <BarChartTrainingsLength key={rerender2} />
            </Box>
        </Box>
    );
};

export default Bar;