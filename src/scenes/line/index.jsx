import {Box, Button, TextField} from "@mui/material";
import Header from "../../components/Header";
import LineChartWeight from "../../components/LineChartWeight";
import {useState} from "react";
import {api} from "../../utils/api";

const Line = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [rerender1, setRerender1] = useState(crypto.randomUUID());

    const handleSubmit = async () => {
        try {
            const requestBody = JSON.parse(JSON.stringify({"weight": input1, "goal_weight": input2}));
            await api.post("/set-weight.php", requestBody);
            setInput1("")
            setInput2("")
            setRerender1(crypto.randomUUID())
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <Box m="20px">
            <Header title="Gewichtsdetails" subtitle="Alles im Überblick" />
            {sessionStorage.getItem("role").toString().toLowerCase() !== "coach" &&
            <Box>
                <TextField type="number" value={input1} label="Gewicht" variant="outlined" onChange={(e) => setInput1(e.target.value)} sx={{mr: "20px"}} />
                <TextField type="number" value={input2} label="Zielgewicht" variant="outlined" onChange={(e) => setInput2(e.target.value)} sx={{mr: "20px"}} />
                <Button
                    disabled={!input1 || !input2}
                    variant="contained"
                    size="large"
                    sx={{height: "50px"}}
                    onClick={handleSubmit}
                >Eintragen</Button>
            </Box>}
            <Box height="75vh">
                <LineChartWeight key={rerender1} />
            </Box>
        </Box>
    );
};

export default Line;