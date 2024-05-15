/*
import React, { useEffect, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
*/

function App() {
    const gridRef = useRef();

    const [columnDefs] = useState([
        { field: 'make', sortable: true, filter: true, checkboxSelection: true, editable: true },
        { field: 'model', sortable: true, filter: true, editable: true },
        { field: 'price', sortable: true, filter: true, editable: true }
    ]);

    const [rowData, setRowData] = useState([]);

    const defaultColDef = {
        flex: 1,
        minWidth: 100,
        resizable: true
    };

    const onGridReady = params => {
        gridRef.current = params.api;
    };

    // Function to fetch data from a JSON file URL
    const fetchData = async () => {
        try {
            const response = await fetch('/data/cars.json'); 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    // Function to process the data
    const processData = data => {
        let processedData = [];
        data.forEach(make => {
            make.models.forEach(model => {
                model.variants.forEach(variant => {
                    processedData.push({
                        make: make.make,
                        model: model.model,
                        price: variant.price
                    });
                });
            });
        });
        return processedData;
    };

    // Effect to fetch and set data on load
    useEffect(() => {
        fetchData().then(data => {
            setRowData(processData(data));
        });
    }, []);

    return (
        <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
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
