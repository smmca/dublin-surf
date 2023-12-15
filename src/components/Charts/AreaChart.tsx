import { AreaChart, Card, Title } from "@tremor/react";

interface FetchedDataType {
  date: string;
  "Sea Temperature": number;
  "Air Temperature": number;
}

interface NewAreaChartProps {
  fetchedData: FetchedDataType[];
}

export const NewAreaChart: React.FC<NewAreaChartProps> = ({ fetchedData }) => {
  return (
    <Card>
      <Title>Sea Temperature and Air Temperature</Title>
      <AreaChart
        className="h-72 mt-4"
        data={fetchedData}
        index="date"
        categories={["Sea Temperature", "Air Temperature"]}
        colors={["indigo", "cyan"]}
      />
    </Card>
  );
};