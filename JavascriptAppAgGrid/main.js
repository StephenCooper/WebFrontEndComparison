/** @type {import('ag-grid-community').ColDef[]} */
const columnDefs = [
    {
        headerName: "Last Rendered",
        minWidth: 250,
        valueGetter: (params) => {
            return params.node.group ? '' : new Date().toISOString()
        }
    },
    { field: "Date" },
    { field: "TemperatureC", headerName: 'Temp C' },
    { field: "Summary" },
];

// let the grid know which columns and what data to use
/** @type {import('ag-grid-community').GridOptions} */
const gridOptions = {
    columnDefs: columnDefs,
    rowData: gridData,
    rowGroupPanelShow: 'always',
    suppressRowGroupHidesColumns: true,
    defaultColDef: {
        sortable: true,
        enableRowGroup: true,
        resizable: true,
    },
    statusBar: {
        statusPanels: [
            {
                statusPanel: 'agTotalAndFilteredRowCountComponent',
                align: 'left',
            }
        ]
    },
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});




