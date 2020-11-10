export const getAllLabels = () => {
  let labels = [];

  for(let i = 0; i <= 150; i++) {
    labels.push(i)
  }
  return labels;
}

export const getChartData = (stats) => {
  let data = [];
  stats.map(item => data.push(item.base_stat));

  const series = [{
    name: 'Pokemon serie',
    data
  }];

  const options = {
    chart: {
      height: 350,
      type: 'radar',
    },
    xaxis: {
      categories: ['HP', 'Attack', 'Defence', 'Sp Atk', 'Sp Def', 'Speed']
    }
  }

  return { options, series }
}