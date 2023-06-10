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
      enableBottomToolbar={false}
      enableTopToolbar={false}
      enableStickyHeader
      muiTablePaperProps={{
        sx: {
          flexGrow: '1',
        },
      }}
    />
  );
};

export default Example;
