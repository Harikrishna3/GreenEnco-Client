import { ResponsiveBarCanvas } from "@nivo/bar"

const CompareBarChart = ({ BarData, selectedKeys }) => {
    // console.log(selectedKeys);
    return (
        <div style={{ margin: "20px", height: "70vh", }}>
            <ResponsiveBarCanvas
                data={BarData}
                keys={selectedKeys
                    //     [
                    //   // 'Month',
                    //   // 'PVSYST_GHI',
                    //   // 'PVSYST_GTI',

                    //   'Excess_Shortfall_KWh',
                    //   'Excess_Shortfall_Normalised_KWh',
                    //   'Excess_Shortfall_Normalised_in_percentage',
                    //   'Excess_Shortfall__in_percentage',
                    //   'AC_loss_per',
                    //   'PVSyst_Energy_vs_Contractual_Energy',
                    //   'PVSyst_GHI_vs_Actual_GHI',
                    //   'PVSyst_GTI_vs_Actual_GTI',
                    //   'T_Cell_Avg_C',
                    //   'Actual_GTI',
                    //   'Actual_GHI',
                    //   'PVSYST_GHI',
                    //   'PVSYST_GTI',
                    //   'PVSYST_Energy',
                    //   'Contractual_Energy',
                    //   'Actual_Inverter_Energy_KWh',
                    //   'Actual_Export_Energy_KWh',
                    //   'Actual_Import_Energy_KWh',
                    //   'Net_Energy',
                    //   'Normalised_Energy_KWh',
                    //     // 'sandwich',
                    //     // 'kebab',
                    //     // 'fries',
                    //     // 'donut',
                    //     // 'Excess/Shortfall %',
                    // ]
                }
                indexBy="Month"
                margin={{ top: 50, right: 170, bottom: 50, left: 50 }}
                padding={0.3}
                // minValue={-100}
                // maxValue={50000}
                innerPadding={2}
                groupMode="grouped"
                valueScale={{ type: 'symlog' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'paired' }}

                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            '0.7'
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Month',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Values',
                    legendPosition: 'middle',
                    legendOffset: -40,
                }}
                type={'logarithmic'}
                labelSkipWidth={12}
                labelSkipHeight={3}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 200,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo - Logarithmic'"
                barAriaLabel={e => e.id + ": " + e.formattedValue + " in Month: " + e.indexValue}
            />
        </div>
    )
}
export default CompareBarChart