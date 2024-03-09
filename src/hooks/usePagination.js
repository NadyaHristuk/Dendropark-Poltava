import { useEffect, useState } from 'react';

export const usePagination = ({ postPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(() => {
    const calculatePagination = () => {
      const startIndex = (currentPage - 1) * postPerPage;
      const endIndex = startIndex + postPerPage;
      const slicedPosts = data.slice(startIndex, endIndex);
      setCurrentPosts(slicedPosts);
    };

    calculatePagination();
  }, [currentPage, data, postPerPage]);

  const totalPages = Math.ceil(data.length / postPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage + 1 > totalPages) return totalPages;

      return prevPage + 1;
    });
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage - 1 <= 0) return 1;

      return prevPage - 1;
    });
  };

  return {
    currentPosts,
    currentPage,
    totalPages,
    setCurrentPage,
    goToNextPage,
    goToPrevPage,
  };
};
