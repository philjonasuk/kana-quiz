import {useKanaChart} from '../hooks/useKanaChart';

export const KanaChart = () => {
  const {kanaChart, columnMax, rowMax} = useKanaChart();
  console.log({kanaChart, columnMax, rowMax});

  // return Array(rowMax).keys().map(row=>Array(columnMax).keys(column=>{

  // }));

  return null;
};
