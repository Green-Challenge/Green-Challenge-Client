import {ResponsiveLine} from '@nivo/line';
import {css} from 'styled-components/macro';
import color from 'color';

export type Data = {
  id: string;
  color: string;
  data: {x: string; y: number}[];
};

interface ChartProps {
  data: Data[];
}

function Chart({data}: ChartProps) {
  return (
    <div css={divStyle}>
      <ResponsiveLine
        data={data}
        margin={{top: 50, right: 110, bottom: 50, left: 60}}
        xScale={{type: 'point'}}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        pointSize={10}
        pointColor={{theme: 'background'}}
        pointBorderWidth={2}
        pointBorderColor={{from: 'serieColor'}}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

const divStyle = css`
  background-color: ${color.bgWhite};
  width: 312px;
  height: 352px;
  text-align: center;
  padding-top: 30px;
  border-radius: 10px;
`;

export {Chart};
