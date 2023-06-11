import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

const DataGrid = ({ gridData }) => {
  //columns are used for to create head cells of the table
  const columns = useMemo(
    () => [
      {
        accessorKey: 'link',
        header: 'Sosyal Medya Linki',
      },
      {
        accessorKey: 'name',
        header: 'Sosyal Medya Adı',
      },
      {
        accessorKey: 'description',
        header: 'Açıklama',
        enableSorting: false, //disables sorting for description column
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={gridData}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={true}
      enableSorting={true}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
      enableStickyHeader
      //all below are for styling table (some other stylings included in css file)
      muiTablePaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: '1',
          background: 'transparent',
          borderRadius: '0.8rem',
          boxShadow: 'none',
        },
      }}
      muiTableContainerProps={{
        sx: {
          borderRadius: '0.8rem',
          border: '1px solid #eaeaea',
          background: 'transparent',
          flexGrow: '1',
          maxHeight: 'calc(100vh - 31rem)',
          overflowY: 'auto',
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          fontFamily: 'Poppins',
          fontSize: '1.4rem',
          fontWeight: '500',
          background: 'white',
          paddingLeft: '2.5rem',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid #c4cee5',
        },
      }}
      muiTableHeadProps={{
        sx: {
          color: 'blue',
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          fontFamily: 'Inter',
          fontSize: '1.2rem',
          fontWeight: 400,
          lineHeight: '1.5rem',
          border: 'none',
        },
      }}
      muiBottomToolbarProps={{
        sx: {
          background: 'transparent',
          display: 'flex',
        },
      }}
    />
  );
};

export default DataGrid;
