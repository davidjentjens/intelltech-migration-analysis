import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { formatMonthlyCost } from '../utils/formatters';

// Raw cost data (numbers only for proper sorting)
const costData = {
  gitlab_ce_onpremises: {
    licenseMensal: 0,
    infrastructureMensal: 144,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: '4 vCPU 16GB RAM 100GB',
  },
  gitlab_ee_premium_onpremises: {
    licenseMensal: 7482.5,
    infrastructureMensal: 385,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: '8 vCPU 32GB RAM 200GB',
  },
  gitlab_ee_ultimate_onpremises: {
    licenseMensal: 25592.5,
    infrastructureMensal: 385,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: '16 vCPU 64GB RAM 500GB',
  },
  gitlab_ee_premium_cloud: {
    licenseMensal: 7482.5,
    infrastructureMensal: 0,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: 'N/A (Cloud)',
  },
  gitlab_ee_ultimate_cloud: {
    licenseMensal: 25592.5,
    infrastructureMensal: 0,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: 'N/A (Cloud)',
  },
  github_ee_onpremises: {
    licenseMensal: 5423.5,
    infrastructureMensal: 2926,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: '16 vCPU 48-256GB RAM',
  },
  github_ee_cloud: {
    licenseMensal: 5423.5,
    infrastructureMensal: 0,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: 'N/A (Cloud)',
  },
  github_ee_cloud_copilot: {
    licenseMensal: 15510, // ($21 × 47) + ($39 × 47) = $987 + $1833 = $2820 × 5,50 = R$ 15.510
    infrastructureMensal: 0,
    get totalMensal() {
      return this.licenseMensal + this.infrastructureMensal;
    },
    vmSpecs: 'N/A (Cloud)',
  },
};

type CostRowData = {
  plataforma: string;
  licenseMensal: number;
  infrastructureMensal: number;
  totalMensal: number;
  licenseAnual: number;
  infrastructureAnual: number;
  totalAnual: number;
  vmSpecs: string;
};

const columnHelper = createColumnHelper<CostRowData>();

const columns = [
  columnHelper.accessor('plataforma', {
    header: 'Plataforma',
    cell: (info) => <div className="font-medium">{info.getValue()}</div>,
  }),
  columnHelper.accessor('licenseMensal', {
    header: 'Licenças (Mensal)',
    cell: (info) => <div className="text-center py-1">{formatMonthlyCost(info.getValue())}</div>,
  }),
  columnHelper.accessor('infrastructureMensal', {
    header: 'Infraestrutura (Mensal)',
    cell: (info) => <div className="text-center py-1">{formatMonthlyCost(info.getValue())}</div>,
  }),
  columnHelper.accessor('totalMensal', {
    header: 'Total Mensal',
    cell: (info) => (
      <div className="text-center font-semibold">{formatMonthlyCost(info.getValue())}</div>
    ),
  }),
  columnHelper.accessor('licenseAnual', {
    header: 'Licenças (Anual)',
    cell: (info) => <div className="text-center py-1">{formatMonthlyCost(info.getValue())}</div>,
  }),
  columnHelper.accessor('infrastructureAnual', {
    header: 'Infraestrutura (Anual)',
    cell: (info) => <div className="text-center py-1">{formatMonthlyCost(info.getValue())}</div>,
  }),
  columnHelper.accessor('totalAnual', {
    header: 'Total Anual',
    cell: (info) => (
      <div className="text-center font-semibold">{formatMonthlyCost(info.getValue())}</div>
    ),
  }),
  columnHelper.accessor('vmSpecs', {
    header: 'VM Specs',
    cell: (info) => <div className="text-xs">{info.getValue()}</div>,
  }),
];

const CostTable: React.FC = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  // Transform research data into table data
  const data: CostRowData[] = React.useMemo(
    () => [
      {
        plataforma: 'GitLab CE (Self-hosted)',
        licenseMensal: costData.gitlab_ce_onpremises.licenseMensal,
        infrastructureMensal: costData.gitlab_ce_onpremises.infrastructureMensal,
        totalMensal: costData.gitlab_ce_onpremises.totalMensal,
        licenseAnual: costData.gitlab_ce_onpremises.licenseMensal * 12,
        infrastructureAnual: costData.gitlab_ce_onpremises.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ce_onpremises.totalMensal * 12,
        vmSpecs: costData.gitlab_ce_onpremises.vmSpecs,
      },
      {
        plataforma: 'GitLab EE Premium (Self-hosted)',
        licenseMensal: costData.gitlab_ee_premium_onpremises.licenseMensal,
        infrastructureMensal: costData.gitlab_ee_premium_onpremises.infrastructureMensal,
        totalMensal: costData.gitlab_ee_premium_onpremises.totalMensal,
        licenseAnual: costData.gitlab_ee_premium_onpremises.licenseMensal * 12,
        infrastructureAnual: costData.gitlab_ee_premium_onpremises.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ee_premium_onpremises.totalMensal * 12,
        vmSpecs: costData.gitlab_ee_premium_onpremises.vmSpecs,
      },
      {
        plataforma: 'GitLab EE Ultimate (Self-hosted)',
        licenseMensal: costData.gitlab_ee_ultimate_onpremises.licenseMensal,
        infrastructureMensal: costData.gitlab_ee_ultimate_onpremises.infrastructureMensal,
        totalMensal: costData.gitlab_ee_ultimate_onpremises.totalMensal,
        licenseAnual: costData.gitlab_ee_ultimate_onpremises.licenseMensal * 12,
        infrastructureAnual: costData.gitlab_ee_ultimate_onpremises.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ee_ultimate_onpremises.totalMensal * 12,
        vmSpecs: costData.gitlab_ee_ultimate_onpremises.vmSpecs,
      },
      {
        plataforma: 'GitLab EE Premium (Cloud)',
        licenseMensal: costData.gitlab_ee_premium_cloud.licenseMensal,
        infrastructureMensal: costData.gitlab_ee_premium_cloud.infrastructureMensal,
        totalMensal: costData.gitlab_ee_premium_cloud.totalMensal,
        licenseAnual: costData.gitlab_ee_premium_cloud.licenseMensal * 12,
        infrastructureAnual: costData.gitlab_ee_premium_cloud.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ee_premium_cloud.totalMensal * 12,
        vmSpecs: costData.gitlab_ee_premium_cloud.vmSpecs,
      },
      {
        plataforma: 'GitLab EE Ultimate (Cloud)',
        licenseMensal: costData.gitlab_ee_ultimate_cloud.licenseMensal,
        infrastructureMensal: costData.gitlab_ee_ultimate_cloud.infrastructureMensal,
        totalMensal: costData.gitlab_ee_ultimate_cloud.totalMensal,
        licenseAnual: costData.gitlab_ee_ultimate_cloud.licenseMensal * 12,
        infrastructureAnual: costData.gitlab_ee_ultimate_cloud.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ee_ultimate_cloud.totalMensal * 12,
        vmSpecs: costData.gitlab_ee_ultimate_cloud.vmSpecs,
      },
      {
        plataforma: 'GitHub EE (Self-hosted)',
        licenseMensal: costData.github_ee_onpremises.licenseMensal,
        infrastructureMensal: costData.github_ee_onpremises.infrastructureMensal,
        totalMensal: costData.github_ee_onpremises.totalMensal,
        licenseAnual: costData.github_ee_onpremises.licenseMensal * 12,
        infrastructureAnual: costData.github_ee_onpremises.infrastructureMensal * 12,
        totalAnual: costData.github_ee_onpremises.totalMensal * 12,
        vmSpecs: costData.github_ee_onpremises.vmSpecs,
      },
      {
        plataforma: 'GitHub EE (Cloud)',
        licenseMensal: costData.github_ee_cloud.licenseMensal,
        infrastructureMensal: costData.github_ee_cloud.infrastructureMensal,
        totalMensal: costData.github_ee_cloud.totalMensal,
        licenseAnual: costData.github_ee_cloud.licenseMensal * 12,
        infrastructureAnual: costData.github_ee_cloud.infrastructureMensal * 12,
        totalAnual: costData.github_ee_cloud.totalMensal * 12,
        vmSpecs: costData.github_ee_cloud.vmSpecs,
      },
      {
        plataforma: 'GitHub EE + Copilot (Cloud)',
        licenseMensal: costData.github_ee_cloud_copilot.licenseMensal,
        infrastructureMensal: costData.github_ee_cloud_copilot.infrastructureMensal,
        totalMensal: costData.github_ee_cloud_copilot.totalMensal,
        licenseAnual: costData.github_ee_cloud_copilot.licenseMensal * 12,
        infrastructureAnual: costData.github_ee_cloud_copilot.infrastructureMensal * 12,
        totalAnual: costData.github_ee_cloud_copilot.totalMensal * 12,
        vmSpecs: costData.github_ee_cloud_copilot.vmSpecs,
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center">
        💰 Comparativo de Custos Anuais (47 usuários)
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b-2 border-yellow-300">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`font-semibold cursor-pointer select-none hover:bg-yellow-100 transition-colors ${
                      header.id === 'plataforma' ? 'text-left' : 'text-center'
                    }`}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center gap-1 justify-center p-2">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === 'desc' ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronUp className="w-4 h-4" />
                        )
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-yellow-200 hover:bg-yellow-50 transition-colors"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-2 px-1">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-xs text-yellow-700 bg-yellow-100 p-2 rounded">
        💡 <strong>Dica:</strong> Clique nos cabeçalhos das colunas para ordenar os dados.
      </div>
    </div>
  );
};

export default CostTable;
