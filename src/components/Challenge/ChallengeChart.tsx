import Section from 'components/common/Section';
import useGetChart from 'hooks/challenge/useGetChart';
import {Chart, Data} from './common';

interface ChallengeChartProps {
  challengeId: number;
}

const chartColos = ['hsl(176,100%,39%)', 'hsl(0,0%,77%)'];

function ChallengeChart({challengeId}: ChallengeChartProps) {
  const {data, loading, error} = useGetChart(challengeId);

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
        <Section title="나의 탄소 저감량">
          <Chart data={chartData} />
        </Section>
      )}
    </>
  );
}

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

export default ChallengeChart;
