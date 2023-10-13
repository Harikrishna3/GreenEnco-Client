import { ResponsivePie } from '@nivo/pie'
import { ResponsiveLine } from '@nivo/line'
import { useEffect, useState } from 'react';
import BarChart from './Charts/BarChart';
import HeatChart from './Charts/HeatChart';
import LineChart from './Charts/LineChart';
import CompareBarChart from './Charts/CompareBarChart';
import './Chart.css'

// "Month",
//                 "PVSYST GHI",
//                 "PVSYST GTI",
//                 "PVSYST Energy",
//                 "Contractual Energy",
//                 "Actual GTI",
//                 "Actual GHI",
//                 "PVSyst GTI vs Actual GTI",
//                 "PVSyst GHI vs Actual GHI",
//                 "PVSyst Energy vs Contractual Energy",
//                 "T -Cell Avg(°C)",
//                 "Actual Inverter Energy (KWh)",
//                 "Actual Export Energy (KWh)",
//                 "Actual Import Energy (KWh)",
//                 "AC loss (%)",
//                 "Net Energy",
//                 "Normalised Energy (KWh)",
//                 "Excess\/Shortfall (Normalised) KWh",
//                 "Excess\/Shortfall (Normalised) (%)",
//                 "Excess\/Shortfall (KWh)",
//                 "Excess\/Shortfall %",



const data =
  [
    // {
    //   "id": "Jan-21",
    //   "data": [
    //     {
    //       "x": "PVSYST GHI",
    //       "y": 116.3
    //     },
    //     {
    //       "x": "PVSYST GTI",
    //       "y": 139.6
    //     },
    //     {
    //       "x": "PVSYST Energy",
    //       "y": 1286000
    //     },
    //     {
    //       "x": "Contractual Energy",
    //       "y": 1191623.4247590806
    //     },
    //     {
    //       "x": "Actual GTI",
    //       "y": 124.64999999999999
    //     },
    //     {
    //       "x": "Actual GHI",
    //       "y": 104.75999999999998
    //     },
    //     {
    //       "x": "PVSyst GTI vs Actual GTI",
    //       "y": 0.10709169054441259
    //     },
    //     {
    //       "x": "PVSyst GHI vs Actual GHI",
    //       "y": 0.09922613929492707
    //     },
    //     {
    //       "x": "PVSyst Energy vs Contractual Energy",
    //       "y": 0.0733876945885843
    //     },
    //     {
    //       "x": "T -Cell Avg(°C)",
    //       "y": 32.52364516129032
    //     },
    //     {
    //       "x": "Actual Inverter Energy (KWh)",
    //       "y": 1038119
    //     },
    //     {
    //       "x": "Actual Export Energy (KWh)",
    //       "y": 1026339
    //     },
    //     {
    //       "x": "Actual Import Energy (KWh)",
    //       "y": 7234.389999999999
    //     },
    //     {
    //       "x": "AC loss (%)",
    //       "y": 0.011347446680004893
    //     },
    //     {
    //       "x": "Net Energy",
    //       "y": 1019104.61
    //     },
    //     {
    //       "x": "Normalised Energy (KWh)",
    //       "y": 1148280.0859598853
    //     },
    //     {
    //       "x": "Excess\/Shortfall (Normalised) KWh",
    //       "y": -129175.47595988528
    //     },
    //     {
    //       "x": "Excess\/Shortfall (Normalised) %",
    //       "y": -0.11249474543652234
    //     },
    //     {
    //       "x": "Excess\/Shortfall (KWh)",
    //       "y": -266895.39
    //     },
    //     {
    //       "x": "Excess\/Shortfall %",
    //       "y": -0.20753918351477452
    //     }
    //   ]
    // }
    // ,

    // {
    //   "id": "Feb-21",
    //   "data": [
    //     {
    //       "x": "PVSYST GHI",
    //       "y": 135.2
    //     },
    //     {
    //       "x": "PVSYST GTI",
    //       "y": 157
    //     },
    //     {
    //       "x": "PVSYST Energy",
    //       "y": 1427000
    //     },
    //     {
    //       "x": "Contractual Energy",
    //       "y": 1322275.7598220904
    //     },
    //     {
    //       "x": "Actual GTI",
    //       "y": 139.88
    //     },
    //     {
    //       "x": "Actual GHI",
    //       "y": 121.35
    //     },
    //     {
    //       "x": "PVSyst GTI vs Actual GTI",
    //       "y": 0.10904458598726119
    //     },
    //     {
    //       "x": "PVSyst GHI vs Actual GHI",
    //       "y": 0.10244082840236679
    //     },
    //     {
    //       "x": "PVSyst Energy vs Contractual Energy",
    //       "y": 0.07338769458858418
    //     },
    //     {
    //       "x": "T -Cell Avg(°C)",
    //       "y": 35.97803571428571
    //     },
    //     {
    //       "x": "Actual Inverter Energy (KWh)",
    //       "y": 1180179
    //     },
    //     {
    //       "x": "Actual Export Energy (KWh)",
    //       "y": 1165172
    //     },
    //     {
    //       "x": "Actual Import Energy (KWh)",
    //       "y": 5974.030000000001
    //     },
    //     {
    //       "x": "AC loss (%)",
    //       "y": 0.012715867677699739
    //     },
    //     {
    //       "x": "Net Energy",
    //       "y": 1159197.97
    //     },
    //     {
    //       "x": "Normalised Energy (KWh)",
    //       "y": 1271393.3757961784
    //     },
    //     {
    //       "x": "Excess\/Shortfall (Normalised) KWh",
    //       "y": -112195.40579617838
    //     },
    //     {
    //       "x": "Excess\/Shortfall (Normalised) %",
    //       "y": -0.08824602041513611
    //     },
    //     {
    //       "x": "Excess\/Shortfall (KWh)",
    //       "y": -267802.03
    //     },
    //     {
    //       "x": "Excess\/Shortfall %",
    //       "y": -0.18766785564120533
    //     }
    //   ]
    // }
    // ,
    // {
    //   "Month": "Dec-22",
    //   "PVSYST_GHI": 189.7,
    //   "PVSYST GHIColor": "hsl(261,87%,53%)",
    //   "PVSYST GTI": 139.6,
    //   "burgerColor": "hsl(261,87%,53%)",
    //   "sandwich": 93,
    //   "sandwichColor": "hsl(54, 70%, 50%)",
    //   "kebab": 100,
    //   "kebabColor": "hsl(34, 70%, 50%)",
    //   "fries": 186,
    //   "friesColor": "hsl(50, 70%, 50%)",
    //   "donut": 19,
    //   "donutColor": "hsl(53, 70%, 50%)",
    // //   "Excess/Shortfall %": 0.18766785564120533,
    // //   "Excess/Shortfall %": "hsl(53, 70%, 50%)"
    // },
    // {
    //   "Month": "Oct-21",
    //   "PVSYST_GHI": 138.9,
    //   "PVSYStColor": "hsl(179, 70%, 50%)",
    //   "PVSYST_GTI": 155.9,
    //   "PVSYST_Energy": 1393000,
    //   "Contractual_Energy": 1290770.9414381022,
    //   "Actual_GTI": 144.01,
    //   "Actual_GHI": 128.14,
    //   "PVSyst_GTI_vs_Actual_GTI": 0.07626683771648501,
    //   "PVSyst_GHI_vs_Actual_GHI": 0.0774658027357813,
    //   "PVSyst_Energy_vs_Contractual_Energy": 0.07338769458858418,
    //   "T_Cell_Avg_C": 44.84677419354839,
    //   "Actual_Inverter_Energy_KWh": 1190210,
    //   "Actual_Export_Energy_KWh": 1172556.5,
    //   "Actual_Import_Energy_KWh": 6055.680000000001,
    //   "AC_loss_per": 0.014832256492551734,
    //   "Net_Energy": 1166500.82,
    //   "Normalised_Energy_KWh": 1286760.2950609364,
    //   "Excess_Shortfall_Normalised_KWh": -120259.4750609363,
    //   "Excess_Shortfall_Normalised_in_percentage": -0.09345911241008663,
    //   "Excess_Shortfall_KWh": -226499.17999999993,
    //   "Excess_Shortfall__in_percentage": -0.16259811916726485
    // },

    {
      "id": "PVSYST_GHI",
      "label": "PVSYST_GHI",
      "value": 182.7,
      "color": "hsl(12, 70%, 50%)"
    },
    {
      "id": "PVSYST_GTI",
      "label": "PVSYST_GTI",
      "value": 185,
      "color": "hsl(316, 70%, 50%)"
    },
    {
      "id": "PVSYST_Energy",
      "label": "PVSYST_Energy",
      "value": 1606000,
      "color": "hsl(26, 70%, 50%)"
    },
    {
      "id": "Contractual_Energy",
      "label": "Contractual_Energy",
      "value": 1488139.3624907339,
      "color": "hsl(64, 70%, 50%)"
    },
    {
      "id": "Actual_GTI",
      "label": "Actual_GTI",
      "value": 155.02999999999997,
      "color": "hsl(175, 70%, 50%)"
    },
    {
      "id": "Actual_GHI",
      "label": "Actual_GHI",
      "value": 154.55,
      "color": "hsl(235, 70%, 50%)"
    },
    {
      "id": "PVSyst_GTI_vs_Actual_GTI",
      "label": "PVSyst_GTI_vs_Actual_GTI",
      "value": 0.16200000000000014,
      "color": "hsl(295, 70%, 50%)"
    },
    {
      "id": "PVSyst_GHI_vs_Actual_GHI",
      "label": "PVSyst_GHI_vs_Actual_GHI",
      "value": 0.1540777230432402,
      "color": "hsl(355, 70%, 50%)"
    },
    {
      "id": "PVSyst_Energy_vs_Contractual_Energy",
      "label": "PVSyst_Energy_vs_Contractual_Energy",
      "value": 0.07338769458858418,
      "color": "hsl(415, 70%, 50%)"
    },
    {
      "id": "T_Cell_Avg_C",
      "label": "T_Cell_Avg_C",
      "value": 46.984,
      "color": "hsl(475, 70%, 50%)"
    },
    {
      "id": "Actual_Inverter_Energy_KWh",
      "label": "Actual_Inverter_Energy_KWh",
      "value": 1243080,
      "color": "hsl(535, 70%, 50%)"
    },
    {
      "id": "Actual_Export_Energy_KWh",
      "label": "Actual_Export_Energy_KWh",
      "value": 1224754,
      "color": "hsl(595, 70%, 50%)"
    },
    {
      "id": "Actual_Import_Energy_KWh",
      "label": "Actual_Import_Energy_KWh",
      "value": 5352.61,
      "color": "hsl(655, 70%, 50%)"
    },
    {
      "id": "AC_loss_per",
      "label": "AC_loss_per",
      "value": 0.014742414003925734,
      "color": "hsl(715, 70%, 50%)"
    },
    {
      "id": "Net_Energy",
      "label": "Net_Energy",
      "value": 1219401.39,
      "color": "hsl(775, 70%, 50%)"
    },
    {
      "id": "Normalised_Energy_KWh",
      "label": "Normalised_Energy_KWh",
      "value": 1345827.9999999998,
      "color": "hsl(835, 70%, 50%)"
    },
    {
      "id": "Excess_Shortfall_Normalised_KWh",
      "label": "Excess_Shortfall_Normalised_KWh",
      "value": -126426.60999999987,
      "color": "hsl(895, 70%, 50%)"
    },
    {
      "id": "Excess_Shortfall_Normalised_in_percentage",
      "label": "Excess_Shortfall_Normalised_in_percentage",
      "value": -0.09393964904876395,
      "color": "hsl(955, 70%, 50%)"
    },
    {
      "id": "Excess_Shortfall_KWh",
      "label": "Excess_Shortfall_KWh",
      "value": -386598.6100000001,
      "color": "hsl(1015,70%, 50%)",
    },


    // {
    //   "Month": "Nov-21",
    //   "PVSYST_GHI": 125.5,
    //   "PVSYST_GTI": 150.8,
    //   "PVSYST_Energy": 1364000,
    //   "Contractual_Energy": 1263899.1845811713,
    //   "Actual_GTI": 134.99000000000004,
    //   "Actual_GHI": 110.52,
    //   "PVSyst_GTI_vs_Actual_GTI": 0.1048408488063659,
    //   "PVSyst_GHI_vs_Actual_GHI": 0.11936254980079686,
    //   "PVSyst_Energy_vs_Contractual_Energy": 0.07338769458858407,
    //   "T_Cell_Avg_C": 39.60866666666666,
    //   "Actual_Inverter_Energy_KWh": 1209619,
    //   "Actual_Export_Energy_KWh": 1192369,
    //   "Actual_Import_Energy_KWh": 6798.990000000001,
    //   "AC_loss_per": 0.014260688696192769,
    //   "Net_Energy": 1185570.01,
    //   "Normalised_Energy_KWh": 1220997.082228117,
    //   "Excess_Shortfall_Normalised_KWh": -35427.072228116915,
    //   "Excess_Shortfall_Normalised_in_percentage": -0.029014870505233634,
    //   "Excess_Shortfall_KWh": -178429.99,
    //   "Excess_Shortfall__in_percentage": -0.13081377565982405
    // },
    // {
    //   "Month": "Dec-21",
    //   "PVSYST_GHI": 110.6,
    //   "PVSYST_GTI": 134.7,
    //   "PVSYST_Energy": 1232000,
    //   "Contractual_Energy": 1141586.3602668643,
    //   "Actual_GTI": 109.33,
    //   "Actual_GHI": 89.91000000000001,
    //   "PVSyst_GTI_vs_Actual_GTI": 0.18834446919079428,
    //   "PVSyst_GHI_vs_Actual_GHI": 0.18707052441229644,
    //   "PVSyst_Energy_vs_Contractual_Energy": 0.07338769458858418,
    //   "T_Cell_Avg_C": 34.18306666666667,
    //   "Actual_Inverter_Energy_KWh": 866179,
    //   "Actual_Export_Energy_KWh": 855029.5,
    //   "Actual_Import_Energy_KWh": 6921.189999999999,
    //   "AC_loss_per": 0.01287205069621868,
    //   "Net_Energy": 848108.31,
    //   "Normalised_Energy_KWh": 999959.6139569415,
    //   "Excess_Shortfall_Normalised_KWh": -151851.30395694147,
    //   "Excess_Shortfall_Normalised_in_percentage": -0.15185743687792597,
    //   "Excess_Shortfall_KWh": -383891.68999999994,
    //   "Excess_Shortfall__in_percentage": -0.31160039772727266
    // },
    // {
    //   "Month": "Jan-22",
    //   "PVSYST_GHI": 116.3,
    //   "PVSYST_GTI": 139.6,
    //   "PVSYST_Energy": 1286000,
    //   "Contractual_Energy": 1191623.4247590806,
    //   "Actual_GTI": 124.64999999999999,
    //   "Actual_GHI": 104.75999999999998,
    //   "PVSyst_GTI_vs_Actual_GTI": 0.10709169054441259,
    //   "PVSyst_GHI_vs_Actual_GHI": 0.09922613929492707,
    //   "PVSyst_Energy_vs_Contractual_Energy": 0.0733876945885843,
    //   "T_Cell_Avg_C": 32.52364516129032,
    //   "Actual_Inverter_Energy_KWh": 1038119,
    //   "Actual_Export_Energy_KWh": 1026339,
    //   "Actual_Import_Energy_KWh": 7234.389999999999,
    //   "AC_loss_per": 0.011347446680004893,
    //   "Net_Energy": 1019104.61,
    //   "Normalised_Energy_KWh": 1148280.0859598853,
    //   "Excess_Shortfall_Normalised_KWh": -129175.47595988528,
    //   "Excess_Shortfall_Normalised_in_percentage": -0.11249474543652234,
    //   "Excess_Shortfall_KWh": -266895.39,
    //   "Excess_Shortfall__in_percentage": -0.20753918351477452
    // },
    // {
    //   "Month": "Feb-22",
    //   "PVSYST_GHI": 135.2,
    //   "PVSYST_GTI": 157,
    //   "PVSYST_Energy": 1427000,
    //   "Contractual_Energy": 1322275.7598220904,
    //   "Actual_GTI": 139.88,
    //   "Actual_GHI": 121.35,
    //   "PVSyst_GTI_vs_Actual_GTI": 0.10904458598726119,
    //   "PVSyst_GHI_vs_Actual_GHI": 0.10244082840236679,
    //   "PVSyst_Energy_vs_Contractual_Energy": 0.07338769458858418,
    //   "T_Cell_Avg_C": 35.97803571428571,
    //   "Actual_Inverter_Energy_KWh": 1180179,
    //   "Actual_Export_Energy_KWh": 1165172,
    //   "Actual_Import_Energy_KWh": 5974.030000000001,
    //   "AC_loss_per": 0.012715867677699739,
    //   "Net_Energy": 1159197.97,
    //   "Normalised_Energy_KWh": 1271393.3757961784,
    //   "Excess_Shortfall_Normalised_KWh": -112195.40579617838,
    //   "Excess_Shortfall_Normalised_in_percentage": -0.08824602041513611,
    //   "Excess_Shortfall_KWh": -267802.03,
    //   "Excess_Shortfall__in_percentage": -0.18766785564120533
    // }

    // {
    //   "country": "AF",
    //   "hot dog": 117,
    //   "hot dogColor": "hsl(179, 70%, 50%)",
    //   "burger": 2,
    //   "burgerColor": "hsl(150, 70%, 50%)",
    //   "sandwich": 58,
    //   "sandwichColor": "hsl(145, 70%, 50%)",
    //   "kebab": 177,
    //   "kebabColor": "hsl(5, 70%, 50%)",
    //   "fries": 54,
    //   "friesColor": "hsl(126, 70%, 50%)",
    //   "donut": 40,
    //   "donutColor": "hsl(40, 70%, 50%)"
    // },
    // {
    //   "country": "AG",
    //   "hot dog": 92,
    //   "hot dogColor": "hsl(9, 70%, 50%)",
    //   "burger": 24,
    //   "burgerColor": "hsl(170, 70%, 50%)",
    //   "sandwich": 189,
    //   "sandwichColor": "hsl(278, 70%, 50%)",
    //   "kebab": 38,
    //   "kebabColor": "hsl(79, 70%, 50%)",
    //   "fries": 147,
    //   "friesColor": "hsl(38, 70%, 50%)",
    //   "donut": 30,
    //   "donutColor": "hsl(53, 70%, 50%)"
    // },
    // {
    //   "country": "AI",
    //   "hot dog": 188,
    //   "hot dogColor": "hsl(266, 70%, 50%)",
    //   "burger": 87,
    //   "burgerColor": "hsl(352, 70%, 50%)",
    //   "sandwich": 187,
    //   "sandwichColor": "hsl(158, 70%, 50%)",
    //   "kebab": 38,
    //   "kebabColor": "hsl(111, 70%, 50%)",
    //   "fries": 13,
    //   "friesColor": "hsl(135, 70%, 50%)",
    //   "donut": 18,
    //   "donutColor": "hsl(42, 70%, 50%)"
    // },
    // {
    //   "country": "AL",
    //   "hot dog": 112,
    //   "hot dogColor": "hsl(41, 70%, 50%)",
    //   "burger": 73,
    //   "burgerColor": "hsl(336, 70%, 50%)",
    //   "sandwich": 196,
    //   "sandwichColor": "hsl(236, 70%, 50%)",
    //   "kebab": 3,
    //   "kebabColor": "hsl(64, 70%, 50%)",
    //   "fries": 7,
    //   "friesColor": "hsl(139, 70%, 50%)",
    //   "donut": 36,
    //   "donutColor": "hsl(193, 70%, 50%)"
    // },
    // {
    //   "country": "AM",
    //   "hot dog": 7,
    //   "hot dogColor": "hsl(110, 70%, 50%)",
    //   "burger": 169,
    //   "burgerColor": "hsl(52, 70%, 50%)",
    //   "sandwich": 198,
    //   "sandwichColor": "hsl(172, 70%, 50%)",
    //   "kebab": 7,
    //   "kebabColor": "hsl(335, 70%, 50%)",
    //   "fries": 25,
    //   "friesColor": "hsl(318, 70%, 50%)",
    //   "donut": 155,
    //   "donutColor": "hsl(41, 70%, 50%)"
    // }
  ]
const Chart = () => {
  const [assignmentData, setAssignmentData] = useState();
  const [searchedData, setSearchedData] = useState([]);
  const [searchedLineData, setSearchedLineData] = useState([]);
  const [BarData, setBarData] = useState();
  const [pieData, setPieData] = useState();
  const [lineData, setLineData] = useState();
  const [checkData, setCheckData] = useState(true);
  const [showHeatChart, setShowHeatChart] = useState(false);
  const [showBarChart, setShowBarChart] = useState(false);
  const [showLineChart, setShowLineChart] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [showSearchedLineChart, setShowSearchedLineChart] = useState(false);
  const [showSearchedBarChart, setShowSearchedBarChart] = useState(false);
  const [showCompareBarChart, setShowCompareBarChart] = useState(false);
  const [searchMonth, setSearchMonth] = useState("");
  const [convertedData, setConvertedData] = useState({
    id: "",
    data: [],
  });

  const getData = () => {
    fetch("https://greenenco-api.onrender.com/details/heatmap", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setAssignmentData(data);
      });
    fetch("https://greenenco-api.onrender.com/details/line", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setLineData(data);
        // console.log(lineData);
      });
    fetch("https://greenenco-api.onrender.com/details/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBarData(data);
      });
  };


  //calls the function after rendered
  useEffect(() => {
    getData();
    // assignmentData ? console.log("not done") : setCheckData(!checkData);
    // console.log(BarData);
    // console.log(convertedData);
  }, []);


  const SearchMonth1 = () => {
    // setSearchedData();
    // console.log(searchMonth);
    // console.log("search");
    BarData.forEach((data) => {
      if (data.Month === searchMonth) {
        //     setDataUpdate(data)
        // console.log(data.Month);
        // console.log(data);
        // const parsedJson = JSON.parse(data);
        setSearchedData(data);


        if (searchedData === undefined || searchedData === null) {
          setSearchedData(data);
          // SearchMonth1();
        }

        // console.log(searchedData);
      }
    });
    // console.log(lineData);
    lineData &&
      lineData.forEach((data) => {
        let id = searchMonth.toLowerCase()
        //  let t= typeof(data.id);
        // console.log(data.id);
        // console.log(id);
        // console.log(data.id === id);

        if (data.id == id) {

          // console.log(data);

          setSearchedLineData(data);
          if (searchedLineData === undefined || searchedLineData === null) {
            setSearchedLineData(data);
            // SearchMonth1();
          }

          // console.log(searchedLineData);
        }
      });


  }

  const PieData = (data) => {
    const convertedData = data.map((item) => ({
      id: item.Month,
      label: item.Month,
      value: item.PVSYST_GHI,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`,
    }));
    convertedData && setPieData(convertedData);
    console.log(pieData);
  }


  // State to keep track of selected keys
  const [selectedKeys, setSelectedKeys] = useState([]);

  // Function to toggle the selection of a key
  const toggleSelection = (key) => {
    // selectedKeys.includes(key)
    if (selectedKeys.includes(key)) {
      setSelectedKeys(selectedKeys.filter((k) => k !== key)); // Unselect key
    } else {
      setSelectedKeys([...selectedKeys, key]); // Select key
    }
    // console.log(selectedKeys);
  };

   const filteredKeys = Object.keys(searchedData).filter(
    (key) => key !== '_id' && key !== 'Month'
  );


  return (
    <div style={{ margin: "20px" }}>
      <h1>Charts</h1>
      <h2>See all data in</h2>
      { /*  Buttons  */}
      {showHeatChart ?
        <button style={{ padding: "10px", marginRight: "20px" }} onClick={() => setShowHeatChart(!showHeatChart)}>Hide heat chart</button> :
        <button style={{ padding: "10px", marginRight: "20px" }} onClick={() => { setShowHeatChart(!showHeatChart); setSearchButton(false); setShowBarChart(false); setShowLineChart(false); setSearchedData([]) }}>Heat chart</button>
      }
      {showBarChart ?
        <button style={{ padding: "10px", marginRight: "20px" }} onClick={() => {setShowBarChart(!showBarChart);setShowCompareBarChart(false)}}>Hide Bar chart</button> :
        <button style={{ padding: "10px", marginRight: "20px" }} onClick={() => { setShowBarChart(!showBarChart); setSearchButton(false); setShowSearchedLineChart(!searchedLineData); setSearchButton(false);setShowCompareBarChart(false);setShowHeatChart(false); setShowLineChart(false); }}>Bar chart</button>
      }
      {showLineChart ?
        <button style={{ padding: "10px", marginRight: "20px" }} onClick={() => setShowLineChart(!showLineChart)}>Hide Line chart</button> :
        <button style={{ padding: "10px", marginRight: "20px" }} onClick={() => { setShowLineChart(!showLineChart); setShowBarChart(false); setShowSearchedLineChart(false); setShowHeatChart(false); setSearchButton(false);setShowCompareBarChart(false);}}>Line chart</button>
      }
      <br /><br /><br /><br />

      <label htmlFor="">Serach for Month</label>
      <input type="text" onChange={(e) => setSearchMonth(e.target.value)} />
      {searchButton === false && <button style={{ padding: "10px" }} onClick={() => { SearchMonth1(); setSearchButton(true); setShowHeatChart(false); setShowBarChart(false) }}>Search</button>}

      {
      }

      {searchButton &&
        // <div style={{margin:"20px",height:"70vh"}}>
        <>
          <button style={{ padding: "10px", marginRight: "20px" }} onClick={() => setSearchButton(false)}>Hide Searched chart</button>

          
          {showSearchedLineChart ?
            (<button style={{ padding: "10px", marginRight: "20px" }} onClick={() => setShowSearchedLineChart(false)}>Hide Line chart</button>) :
            (<button style={{ padding: "10px", marginRight: "20px" }} onClick={() => { setShowSearchedLineChart(true); setShowSearchedBarChart(false); setShowLineChart(false); setShowHeatChart(false); }}>Line chart</button>)
          }
          {showSearchedBarChart ?
            <><button style={{ padding: "10px", marginRight: "20px" }} onClick={() => {setShowSearchedBarChart(!showSearchedBarChart);setShowCompareBarChart(false)}}>Hide Bar chart</button>
             {showCompareBarChart ?
             <button style={{ padding: "10px", marginRight: "20px" }} onClick={() => {setShowCompareBarChart(false)}}>Hide Compare Bar chart</button>
             :
             <button style={{ padding: "10px", marginRight: "20px" }} onClick={() => setShowCompareBarChart(!showCompareBarChart)}>Compare data in Bar chart</button>
             }
             </>
            :
            <button style={{ padding: "10px", marginRight: "20px" }} onClick={() => { setShowSearchedBarChart(!showSearchedBarChart); setShowSearchedLineChart(false); setShowLineChart(false); setShowHeatChart(false); }}>Bar chart</button>
          }
          {
            showSearchedLineChart && (searchedLineData) ? <><LineChart lineData={[searchedLineData]} /></> : <></>
          }
          {
            showCompareBarChart && searchedData && 
            <>
            <h1 style={{paddingRight:"10px"}} >{searchedData.Month} vs Bar Chart</h1>
             <div  
             className='compareBarChart'
           
             >

              <ul >
                <p>Select</p><hr />
             {searchedData  && filteredKeys.map((key) => (
              <li>
              <button
               key={key}
               onClick={() => toggleSelection(key)}
               className={selectedKeys.includes(key) ? 'selected' : 'unSelected'}
               >
                {key}
              </button>
              </li> 
              ))}
                 </ul>
                 <div 
                 style={{width:"70%"}}
                 >
                  {(selectedKeys.length ===0 ) ? <></>:
                 
                 <CompareBarChart  BarData={[searchedData]} selectedKeys={selectedKeys}/>
                
                  }
                 </div>
              </div>
              </>
          }
          {
            !showCompareBarChart && showSearchedBarChart && searchedData && <BarChart BarData={[searchedData]} />
          }


        </>
        // </div>

      }
      {assignmentData && showHeatChart &&
        <HeatChart assignmentData={assignmentData} />
      }
      {BarData && showBarChart &&
        <BarChart BarData={BarData} />
      }
      {lineData && showLineChart &&
        <>
          <LineChart lineData={lineData} />
          <div style={{ height: "20px" }}></div>
        </>
      }



    </div>
  )
}
export default Chart;