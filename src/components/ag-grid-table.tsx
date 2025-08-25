'use client';

import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { themeQuartz } from 'ag-grid-community'; 


ModuleRegistry.registerModules([AllCommunityModule]);

interface RowData {
  symbol: string;
  tradeDate: string;
  price: number;
  change: number;
  changePercent: number;
  tradeType: string;
  tradeEffect: string;
  quantity: number;
  amount: number;
}

export function AgGridTable() {
  const [rowData, setRowData] = useState<RowData[]>([]);

  // Column definitions
  const columnDefs: ColDef[] = [
    { 
      field: 'symbol', 
      headerName: 'Ticker', 
      width: 100,
      pinned: 'left',
      cellStyle: { fontWeight: 'bold' }
    },
    { 
      field: 'tradeDate', 
      headerName: 'Trade Date', 
      width: 130,
      tooltipField: 'tradeDate'
    },
    { 
      field: 'price', 
      headerName: 'Price', 
      width: 100,
      valueFormatter: (params) => '$' + params.value?.toFixed(2),
      cellStyle: { textAlign: 'center' }
    },
    { 
      field: 'change', 
      headerName: 'Change', 
      width: 120,
      valueFormatter: (params) => '$' + params.value?.toFixed(2),
      cellStyle: (params) => ({
        color: params.value >= 0 ? '#16a34a' : '#dc2626',
        textAlign: 'right',
        fontWeight: 'bold'
      })
    },
    { 
      field: 'changePercent', 
      headerName: 'Change %', 
      width: 120,
      valueFormatter: (params) => params.value?.toFixed(2) + '%',
      cellStyle: (params) => ({
        color: params.value >= 0 ? '#16a34a' : '#dc2626',
        textAlign: 'right',
        fontWeight: 'bold'
      })
    },
    { 
      field: 'tradeType', 
      headerName: 'Trade Type', 
      width: 150,
      cellStyle: { textAlign: 'left' }
    },
    { 
      field: 'tradeEffect', 
      headerName: 'Trade Effect', 
      width: 130,
      cellStyle: { textAlign: 'left' }
    },
    { 
      field: 'quantity', 
      headerName: 'Quantity', 
      width: 100,
      cellStyle: { textAlign: 'center', fontWeight: 'bold' }
    },
    { 
      field: 'amount', 
      headerName: 'Cost Basis', 
      width: 120,
      valueFormatter: (params) => '$' + params.value?.toFixed(2),
      cellStyle: (params) => ({
        color: params.value >= 0 ? '#16a34a' : '#dc2626',
        textAlign: 'right',
        fontWeight: 'bold'
      })
    }
  ];

  // Sample data similar to AG Grid examples
  useEffect(() => {
    const sampleData: RowData[] = [
      {
        symbol: 'AAPL',
        tradeDate: '03/15/2025',
        price: 182.52,
        change: 1.25,
        changePercent: 0.69,
        tradeType: 'Common Stock',
        tradeEffect: 'Closing',
        quantity: 15,
        amount: 1250.75
      },
      {
        symbol: 'MSFT',
        tradeDate: '07/22/2025',
        price: 378.85,
        change: -2.15,
        changePercent: -0.56,
        tradeType: 'Option',
        tradeEffect: 'Opening',
        quantity: 8,
        amount: -850.30
      },
      {
        symbol: 'GOOGL',
        tradeDate: '01/08/2025',
        price: 138.21,
        change: 3.45,
        changePercent: 2.56,
        tradeType: 'Common Stock',
        tradeEffect: 'Closing',
        quantity: 12,
        amount: 2100.45
      },
      {
        symbol: 'AMZN',
        tradeDate: '09/12/2025',
        price: 155.89,
        change: -1.23,
        changePercent: -0.78,
        tradeType: 'Option',
        tradeEffect: 'Opening',
        quantity: 3,
        amount: -675.80
      },
      {
        symbol: 'TSLA',
        tradeDate: '05/03/2025',
        price: 248.42,
        change: 12.55,
        changePercent: 5.32,
        tradeType: 'Common Stock',
        tradeEffect: 'Closing',
        quantity: 20,
        amount: 3250.90
      },
      {
        symbol: 'NVDA',
        tradeDate: '11/18/2025',
        price: 875.28,
        change: 25.67,
        changePercent: 3.02,
        tradeType: 'Option',
        tradeEffect: 'Opening',
        quantity: 7,
        amount: -1450.25
      },
      {
        symbol: 'META',
        tradeDate: '02/27/2025',
        price: 485.59,
        change: -8.92,
        changePercent: -1.81,
        tradeType: 'Common Stock',
        tradeEffect: 'Closing',
        quantity: 11,
        amount: 975.60
      },
      {
        symbol: 'NFLX',
        tradeDate: '08/14/2025',
        price: 498.44,
        change: 7.23,
        changePercent: 1.47,
        tradeType: 'Option',
        tradeEffect: 'Opening',
        quantity: 5,
        amount: -1825.15
      },
      {
        symbol: 'AMD',
        tradeDate: '04/09/2025',
        price: 177.51,
        change: -3.44,
        changePercent: -1.90,
        tradeType: 'Common Stock',
        tradeEffect: 'Closing',
        quantity: 18,
        amount: 525.40
      },
      {
        symbol: 'CRM',
        tradeDate: '10/31/2025',
        price: 267.84,
        change: 4.56,
        changePercent: 1.73,
        tradeType: 'Option',
        tradeEffect: 'Opening',
        quantity: 1,
        amount: -2100.85
      }
    ];

    setRowData(sampleData);
  }, []);

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    editable: false,
  };

  return (
    <div className="w-full h-[500px]">
      <AgGridReact
        theme={themeQuartz}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={20}
        rowSelection="multiple"
        animateRows={true}

        rowHeight={45}
        headerHeight={50}
      />
    </div>
  );
}