import React from 'react';
import { useTranslation } from 'react-i18next';
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
import { costData } from '../data/researchData';

// Raw cost data imported from researchData (numbers only for proper sorting)

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

const CostTable: React.FC = () => {
  const { t } = useTranslation();
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns = React.useMemo(
    () => [
      columnHelper.accessor('plataforma', {
        header: t('costs.table.platform'),
        cell: (info) => <div className="font-medium">{info.getValue()}</div>,
      }),
      columnHelper.accessor('licenseMensal', {
        header: t('costs.table.licensesMonthly'),
        cell: (info) => (
          <div className="text-center py-1">{formatMonthlyCost(info.getValue())}</div>
        ),
      }),
      columnHelper.accessor('infrastructureMensal', {
        header: t('costs.table.infrastructureMonthly'),
        cell: (info) => (
          <div className="text-center py-1">{formatMonthlyCost(info.getValue())}</div>
        ),
      }),
      columnHelper.accessor('totalMensal', {
        header: t('costs.table.totalMonthly'),
        cell: (info) => (
          <div className="text-center font-semibold">{formatMonthlyCost(info.getValue())}</div>
        ),
      }),
      columnHelper.accessor('licenseAnual', {
        header: t('costs.table.licensesAnnual'),
        cell: (info) => (
          <div className="text-center py-1">{formatMonthlyCost(info.getValue())}</div>
        ),
      }),
      columnHelper.accessor('infrastructureAnual', {
        header: t('costs.table.infrastructureAnnual'),
        cell: (info) => (
          <div className="text-center py-1">{formatMonthlyCost(info.getValue())}</div>
        ),
      }),
      columnHelper.accessor('totalAnual', {
        header: t('costs.table.totalAnnual'),
        cell: (info) => (
          <div className="text-center font-semibold">{formatMonthlyCost(info.getValue())}</div>
        ),
      }),
      columnHelper.accessor('vmSpecs', {
        header: t('costs.table.vmSpecs'),
        cell: (info) => <div className="text-xs">{info.getValue()}</div>,
      }),
    ],
    [t]
  );

  // Transform research data into table data
  const data: CostRowData[] = React.useMemo(
    () => [
      {
        plataforma: t('costs.platforms.gitlabCESelfHosted'),
        licenseMensal: costData.gitlab_ce_onpremises.licenseMensal,
        infrastructureMensal: costData.gitlab_ce_onpremises.infrastructureMensal,
        totalMensal: costData.gitlab_ce_onpremises.totalMensal,
        licenseAnual: costData.gitlab_ce_onpremises.licenseMensal * 12,
        infrastructureAnual: costData.gitlab_ce_onpremises.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ce_onpremises.totalMensal * 12,
        vmSpecs: costData.gitlab_ce_onpremises.vmSpecs,
      },
      {
        plataforma: t('costs.platforms.gitlabEEPremiumSelfHosted'),
        licenseMensal: costData.gitlab_ee_premium_onpremises.licenseMensal,
        infrastructureMensal: costData.gitlab_ee_premium_onpremises.infrastructureMensal,
        totalMensal: costData.gitlab_ee_premium_onpremises.totalMensal,
        licenseAnual: costData.gitlab_ee_premium_onpremises.licenseMensal * 12,
        infrastructureAnual: costData.gitlab_ee_premium_onpremises.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ee_premium_onpremises.totalMensal * 12,
        vmSpecs: costData.gitlab_ee_premium_onpremises.vmSpecs,
      },
      {
        plataforma: t('costs.platforms.gitlabEEUltimateSelfHosted'),
        licenseMensal: costData.gitlab_ee_ultimate_onpremises.licenseMensal,
        infrastructureMensal: costData.gitlab_ee_ultimate_onpremises.infrastructureMensal,
        totalMensal: costData.gitlab_ee_ultimate_onpremises.totalMensal,
        licenseAnual: costData.gitlab_ee_ultimate_onpremises.licenseMensal * 12,
        infrastructureAnual: costData.gitlab_ee_ultimate_onpremises.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ee_ultimate_onpremises.totalMensal * 12,
        vmSpecs: costData.gitlab_ee_ultimate_onpremises.vmSpecs,
      },
      {
        plataforma: t('costs.platforms.gitlabEEPremiumCloud'),
        licenseMensal: costData.gitlab_ee_premium_cloud.licenseMensal,
        infrastructureMensal: costData.gitlab_ee_premium_cloud.infrastructureMensal,
        totalMensal: costData.gitlab_ee_premium_cloud.totalMensal,
        licenseAnual: costData.gitlab_ee_premium_cloud.licenseMensal * 12,
        infrastructureAnual: costData.gitlab_ee_premium_cloud.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ee_premium_cloud.totalMensal * 12,
        vmSpecs: costData.gitlab_ee_premium_cloud.vmSpecs,
      },
      {
        plataforma: t('costs.platforms.gitlabEEUltimateCloud'),
        licenseMensal: costData.gitlab_ee_ultimate_cloud.licenseMensal,
        infrastructureMensal: costData.gitlab_ee_ultimate_cloud.infrastructureMensal,
        totalMensal: costData.gitlab_ee_ultimate_cloud.totalMensal,
        licenseAnual: costData.gitlab_ee_ultimate_cloud.licenseMensal * 12,
        infrastructureAnual: costData.gitlab_ee_ultimate_cloud.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ee_ultimate_cloud.totalMensal * 12,
        vmSpecs: costData.gitlab_ee_ultimate_cloud.vmSpecs,
      },
      {
        plataforma: t('costs.platforms.githubEESelfHosted'),
        licenseMensal: costData.github_ee_onpremises.licenseMensal,
        infrastructureMensal: costData.github_ee_onpremises.infrastructureMensal,
        totalMensal: costData.github_ee_onpremises.totalMensal,
        licenseAnual: costData.github_ee_onpremises.licenseMensal * 12,
        infrastructureAnual: costData.github_ee_onpremises.infrastructureMensal * 12,
        totalAnual: costData.github_ee_onpremises.totalMensal * 12,
        vmSpecs: costData.github_ee_onpremises.vmSpecs,
      },
      {
        plataforma: t('costs.platforms.githubEECloud'),
        licenseMensal: costData.github_ee_cloud.licenseMensal,
        infrastructureMensal: costData.github_ee_cloud.infrastructureMensal,
        totalMensal: costData.github_ee_cloud.totalMensal,
        licenseAnual: costData.github_ee_cloud.licenseMensal * 12,
        infrastructureAnual: costData.github_ee_cloud.infrastructureMensal * 12,
        totalAnual: costData.github_ee_cloud.totalMensal * 12,
        vmSpecs: costData.github_ee_cloud.vmSpecs,
      },
      {
        plataforma: t('costs.platforms.githubEECloudCopilot'),
        licenseMensal: costData.github_ee_cloud_copilot.licenseMensal,
        infrastructureMensal: costData.github_ee_cloud_copilot.infrastructureMensal,
        totalMensal: costData.github_ee_cloud_copilot.totalMensal,
        licenseAnual: costData.github_ee_cloud_copilot.licenseMensal * 12,
        infrastructureAnual: costData.github_ee_cloud_copilot.infrastructureMensal * 12,
        totalAnual: costData.github_ee_cloud_copilot.totalMensal * 12,
        vmSpecs: costData.github_ee_cloud_copilot.vmSpecs,
      },
    ],
    [t]
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
        💡 <strong>{t('common.tip')}:</strong> {t('costs.tooltip')}
      </div>
    </div>
  );
};

export default CostTable;
