import React from 'react';
import DataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap.min.css';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' }
];

const rows = [
  { id: 1, title: 'Row 1', count: 20 },
  { id: 2, title: 'Row 2', count: 30 },
  { id: 3, title: 'Row 3', count: 40 }
];

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <DataGrid 
            columns={columns}
            rows={rows}
            defaultColumnOptions={{
              sortable: true,
              resizable: true
            }}
            className="fill-grid"
          />
        </div>
      </div>
    </div>
  );
}

export default MyGrid;
