/*
import React from 'react';
import { Pagination } from 'react-bootstrap';
*/

const paginationData = {
  totalPages: 5,
  currentPage: 1,
  items: [
    { page: 1, label: "1" },
    { page: 2, label: "2" },
    { page: 3, label: "3" },
    { page: 4, label: "4" },
    { page: 5, label: "5" }
  ]
};

function App() {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {paginationData.items.map(item => (
        <Pagination.Item key={item.page} active={item.page === paginationData.currentPage}>
          {item.label}
        </Pagination.Item>
      ))}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

