export const usePagination = ({ perPage, data }) => {
  const chunkedData = [];
  const chunkSize = perPage;

  for (let idx = 0; idx < data.length; idx += chunkSize) {
    chunkedData.push(data.slice(idx, idx + chunkSize));
  }

  return { chunkedData };
};