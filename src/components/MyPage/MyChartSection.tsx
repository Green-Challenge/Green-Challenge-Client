import {Chart, Data} from 'components/Challenge/common';
import useChart from 'hooks/my/useChart';
import styled from 'styled-components';

interface MyChartSectionProps {
  userId: number;
}

const chartColos = ['hsl(176,100%,39%)', 'hsl(0,0%,77%)'];

function MyChartSection({userId}: MyChartSectionProps) {
  const {data, loading, error} = useChart(userId);

  if (data == null) {
    return null;
  }

  if (loading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>{error.response!.data}</div>;
  }

  const chartData = Object.keys(data).reduce((left, key, i) => {
    let axis = data[key as keyof typeof data];
    if (isEmpty(axis)) {
      axis = fillData(axis);
    } else if (!isFull(axis)) {
      axis = fullData(axis);
    }

    const chart: Data = {
      id: key === 'currentMonth' ? '이번 달' : '지난 달',
      color: chartColos[i],
      data: axis,
    };
    left.push(chart);
    return left;
  }, [] as Data[]);

  return (
    <>
      {data && (
        <ChartWrapper>
          <Title>탄소저감량</Title>
          <Chart data={chartData} />
        </ChartWrapper>
      )}
    </>
  );
}

const ChartWrapper = styled.div`
  margin: 24px;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  font-size: 1.125rem;
  font-weight: 700;
  top: 1rem;
  left: 1.5rem;
`;

type Axis = {
  x: string;
  y: number;
}[];

const fillData = (emptyAxis: Axis) => {
  const fullAxis: Axis = [];
  for (let i = 1; i <= 31; i++) {
    fullAxis.push({
      x: String(i),
      y: 0,
    });
  }
  return fullAxis;
};

const fullData = (notFullAxis: Axis) => {
  const fullAxis: Axis = [];
  const lastDay = notFullAxis.reduce((prev, cur) => {
    return Math.max(parseInt(cur.x.split('.')[1]), prev);
  }, 0);
  for (let i = 1; i < lastDay; i++) {
    fullAxis.push({x: String(i), y: 0});
  }
  fullAxis.push(
    ...notFullAxis.map(axis => ({...axis, x: String(axis.x.split('.')[1])})),
  );

  for (let i = lastDay + 1; i <= 31; i++) {
    fullAxis.push({x: String(i), y: 0});
  }
  return fullAxis;
};

const isEmpty = (array: object[]) => {
  return array.length === 0;
};

const isFull = (array: object[]) => {
  return array.length === 31;
};

export default MyChartSection;
