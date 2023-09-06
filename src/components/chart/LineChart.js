// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Linechart = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(317, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 88,
        },
        {
          x: "helicopter",
          y: 66,
        },
        {
          x: "boat",
          y: 191,
        },
        {
          x: "train",
          y: 281,
        },
        {
          x: "subway",
          y: 33,
        },
        {
          x: "bus",
          y: 259,
        },
        {
          x: "car",
          y: 49,
        },
        {
          x: "moto",
          y: 44,
        },
        {
          x: "bicycle",
          y: 38,
        },
        {
          x: "horse",
          y: 18,
        },
        {
          x: "skateboard",
          y: 179,
        },
        {
          x: "others",
          y: 116,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(338, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 32,
        },
        {
          x: "helicopter",
          y: 75,
        },
        {
          x: "boat",
          y: 198,
        },
        {
          x: "train",
          y: 71,
        },
        {
          x: "subway",
          y: 253,
        },
        {
          x: "bus",
          y: 63,
        },
        {
          x: "car",
          y: 251,
        },
        {
          x: "moto",
          y: 63,
        },
        {
          x: "bicycle",
          y: 218,
        },
        {
          x: "horse",
          y: 154,
        },
        {
          x: "skateboard",
          y: 3,
        },
        {
          x: "others",
          y: 281,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(84, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 93,
        },
        {
          x: "helicopter",
          y: 235,
        },
        {
          x: "boat",
          y: 49,
        },
        {
          x: "train",
          y: 179,
        },
        {
          x: "subway",
          y: 116,
        },
        {
          x: "bus",
          y: 49,
        },
        {
          x: "car",
          y: 74,
        },
        {
          x: "moto",
          y: 84,
        },
        {
          x: "bicycle",
          y: 160,
        },
        {
          x: "horse",
          y: 211,
        },
        {
          x: "skateboard",
          y: 135,
        },
        {
          x: "others",
          y: 106,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(332, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 135,
        },
        {
          x: "helicopter",
          y: 194,
        },
        {
          x: "boat",
          y: 244,
        },
        {
          x: "train",
          y: 248,
        },
        {
          x: "subway",
          y: 35,
        },
        {
          x: "bus",
          y: 53,
        },
        {
          x: "car",
          y: 204,
        },
        {
          x: "moto",
          y: 258,
        },
        {
          x: "bicycle",
          y: 165,
        },
        {
          x: "horse",
          y: 238,
        },
        {
          x: "skateboard",
          y: 214,
        },
        {
          x: "others",
          y: 149,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(176, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 134,
        },
        {
          x: "helicopter",
          y: 47,
        },
        {
          x: "boat",
          y: 231,
        },
        {
          x: "train",
          y: 78,
        },
        {
          x: "subway",
          y: 269,
        },
        {
          x: "bus",
          y: 125,
        },
        {
          x: "car",
          y: 278,
        },
        {
          x: "moto",
          y: 205,
        },
        {
          x: "bicycle",
          y: 99,
        },
        {
          x: "horse",
          y: 27,
        },
        {
          x: "skateboard",
          y: 254,
        },
        {
          x: "others",
          y: 129,
        },
      ],
    },
  ];

  return (
    <div style={{ width: "800px", height: "500px", margin: "0 auto" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Linechart;
