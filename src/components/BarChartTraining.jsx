import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarDataTraining as data } from "../data/mockData";
import {useEffect, useState} from "react";
import {api} from "../utils/api";

const BarChartTraining = ({isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [chartData, setChartData] = useState(Array);

    // useEffect(() => {
    //     const fetchWeightData = async () => {
    //         try {
    //             const response = await api.get('/get-training.php');
    //             const weightData = response.data.map(entry => ({
    //                 x: new Date(entry.date), // Converts the date string to a Date object
    //                 y: entry.weight
    //             }));
    //
    //             const goalWeightData = response.data.map(entry => ({
    //                 x: new Date(entry.date), // Converts the date string to a Date object
    //                 y: entry.goal_weight
    //             }));
    //
    //             setChartData([
    //                 { id: 'Gewicht', data: weightData, color: tokens("dark").blueAccent[300] },
    //                 { id: 'Zielgewicht', data: goalWeightData, color: tokens("dark").greenAccent[500] }
    //             ]);
    //         } catch (error) {
    //             alert(error.response.data.message);
    //         }
    //     };
    //
    //     fetchWeightData();
    // }, []);

    return (
        <ResponsiveBar
            data={data}
            theme={{
                // added
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
            }}
            keys={["Trainingsdauer", "Trainingsintensität"]}
            indexBy="day"
            margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            borderColor={{
                from: "color",
                modifiers: [["darker", "1.6"]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "Tag", // changed
                legendPosition: "middle",
                legendOffset: 32,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "in h", // changed
                legendPosition: "middle",
                legendOffset: -40,
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            legends={[
                {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            role="application"
            barAriaLabel={function (e) {
                return e.id + ": " + e.formattedValue + " in day: " + e.indexValue;
            }}
        />
    );
};

export default BarChartTraining;