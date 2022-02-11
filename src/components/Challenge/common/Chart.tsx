import {ResponsiveLine} from '@nivo/line';
import {css} from 'styled-components/macro';
import color from 'color';
import {FC} from 'react';

export type Data = {
  id: string;
  color: string;
  data: {x: string; y: number}[];
};

interface ChartProps {
  data: Data[];
}

interface CustomSymbolShapeProps {
  fill?: any;
}

const CustomSymbolShape: FC<CustomSymbolShapeProps> = ({
  fill,
}: CustomSymbolShapeProps) => {
  return <rect width={20} height={3} y={8} fill={fill} />;
};

function Chart({data}: ChartProps) {
  console.log(data);

  return (
    <div css={divStyle}>
      <ResponsiveLine
        layers={['lines', 'mesh', 'legends', 'crosshair']}
        crosshairType="bottom"
        data={data}
        margin={{top: 0, right: 20, bottom: 20, left: 20}}
        xScale={{type: 'linear'}}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        // pointSize={10}
        // pointColor={{theme: 'background'}}
        // pointBorderWidth={2}
        // pointBorderColor={{from: 'serieColor'}}
        // pointLabelYOffset={-12}
        useMesh={true}
        curve="basis"
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 18,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSpacing: 20,
            symbolSize: 12,
            symbolShape: CustomSymbolShape,
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
