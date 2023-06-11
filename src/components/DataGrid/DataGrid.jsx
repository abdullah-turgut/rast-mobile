import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below

const DataGrid = ({ gridData }) => {
  //should be memoized or stable
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
        enableSorting: false,
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
