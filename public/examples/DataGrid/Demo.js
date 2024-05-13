/*
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, necessary for styling
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
*/

function App() {
	const gridRef = React.useRef();

	const [columnDefs] = React.useState([
		{ field: 'make', sortable: true, filter: true, checkboxSelection: true, editable: true },
		{ field: 'model', sortable: true, filter: true, editable: true },
		{ field: 'price', sortable: true, filter: true, editable: true }
	]);

	const [rowData] = React.useState([
		{ make: "Toyota", model: "Celica", price: 35000 },
		{ make: "Ford", model: "Mondeo", price: 32000 },
		{ make: "Porsche", model: "Boxster", price: 72000 }
		{ make: "BMW", model: "335i", price: 43400 }
	]);

    const defaultColDef = {
        flex: 1,
        minWidth: 100,
        resizable: true
    };

    const onGridReady = params => {
        gridRef.current = params.api;
    };

	return (
		<div className="ag-theme-alpine">
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowSelection="multiple"
                pagination={true}
                paginationPageSize={10}
                onGridReady={onGridReady}
                enableRangeSelection={true}
                domLayout='autoHeight'
            />
		</div>
	);
}
