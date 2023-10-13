import { ResponsiveHeatMap } from "@nivo/heatmap"

const HeatChart = ({ assignmentData }) => {
  return (
    <div>
      <div style={{ margin: "20px", height: "100vh" }}>
        <h1>Heat Chart</h1>
        <ResponsiveHeatMap
          data={assignmentData}
          margin={{ top: 100, right: 130, bottom: 60, left: 90 }}
          valueFormat=">-.2s"
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -20,
            legend: '',
            legendOffset: 46
          }}
          axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 70
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: -72
          }}
          colors={{
            type: 'diverging',
            scheme: 'cool',
            divergeAt: 0.35,
            minValue: -460000,
            maxValue: 1600000
          }}
          emptyColor="#555555"
          legends={[
            {
              anchor: 'bottom',
              translateX: 0,
              translateY: 30,
              length: 400,
              thickness: 8,
              direction: 'row',
              tickPosition: 'after',
              tickSize: 3,
              tickSpacing: 4,
              tickOverlap: false,
              tickFormat: '>-.2s',
              title: 'Value →',
              titleAlign: 'start',
              titleOffset: 4
            }
          ]}
        />
      </div>
    </div>
  )
}
export default HeatChart