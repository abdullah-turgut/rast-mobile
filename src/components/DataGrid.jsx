import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    link: 'instagram.com/mobilerast/',
    name: 'instagram',
    description: `We'll help you to finish your development project successfully.`,
  },
  {
    link: 'tr.linkedin.com/company/rastmobile',
    name: 'linkedin',
    description: `Hire vetted developers from Rast Mobile to scale up your tech projects.`,
  },
  {
    link: 'behance.net/rastmobile',
    name: 'behance',
    description: `Software Development Agency Rast Mobile Information Technology Ltd.`,
  },
  {
    link: 'twitter.com/rastmobile',
    name: 'twitter',
    description: `Software Development Agency Rast Mobile Information Technology Ltd.`,
  },
];

const Example = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'link', //access nested data with dot notation
        header: 'Sosyal Medya Linki',
      },
      {
        accessorKey: 'name',
        header: 'Sosyal Medya Adı',
      },
      {
        accessorKey: 'description', //normal accessorKey
        header: 'Açıklama',
        enableSorting: false,
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={true}
      enableSorting={true}
      initialState={{ sorting: [{ id: 'link', asc: true }] }}
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
          border: '2px solid black',
          borderRadius: '0.8rem',
          boxShadow: 'none',
        },
      }}
      muiTableContainerProps={{
        sx: {
          borderRadius: '0.8rem',
          flexGrow: '1',
          background: 'transparent',
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
    />
  );
};

export default Example;
