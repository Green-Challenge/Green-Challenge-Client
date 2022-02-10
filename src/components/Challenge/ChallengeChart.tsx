import color from 'color';
import Section from 'components/common/Section';
import useGetChart from 'hooks/challenge/useGetChart';
import {Chart, Data} from './common';

interface ChallengeChartProps {
  challengeId: number;
}

const chartColos = [color.primary, color.mint04];

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
    const chart: Data = {
      id: key,
      color: chartColos[i],
      data: data[key as keyof typeof data],
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

export default ChallengeChart;
