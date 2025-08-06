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
  calculationDetails: string;
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
      columnHelper.accessor('calculationDetails', {
        header: t('costs.table.calculationDetails'),
        cell: (info) => <div className="text-xs whitespace-pre-line">{info.getValue()}</div>,
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
        calculationDetails:
          'Licença: R$ 0 (gratuita)\nInfraestrutura: R$ 70 × 5,50 = R$ 144\nTotal: R$ 0 + R$ 144 = R$ 144',
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
        calculationDetails:
          'Licença: $29 × 47 usuários × 5,50 = R$ 7.482,50\nInfraestrutura: $88 × 5,50 = R$ 488\nTotal: R$ 7.482,50 + R$ 488 = R$ 7.970,50',
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
        calculationDetails:
          'Licença: $99 × 47 usuários × 5,50 = R$ 25.592,50\nInfraestrutura: $135 × 5,50 = R$ 742,50\nTotal: R$ 25.592,50 + R$ 742,50 = R$ 26.335',
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
        calculationDetails:
          'Licença: $29 × 47 usuários × 5,50 = R$ 7.482,50\nInfraestrutura: R$ 0 (Cloud)\nTotal: R$ 7.482,50',
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
        calculationDetails:
          'Licença: $99 × 47 usuários × 5,50 = R$ 25.592,50\nInfraestrutura: R$ 0 (Cloud)\nTotal: R$ 25.592,50 (sem IA)',
      },
      {
        plataforma: t('costs.platforms.gitlabEEUltimateCloudDuoPro'),
        licenseMensal: costData.gitlab_ee_ultimate_cloud_duo_pro.licenseMensal,
        infrastructureMensal: costData.gitlab_ee_ultimate_cloud_duo_pro.infrastructureMensal,
        totalMensal: costData.gitlab_ee_ultimate_cloud_duo_pro.totalMensal,
        licenseAnual: costData.gitlab_ee_ultimate_cloud_duo_pro.licenseMensal * 12,
        infrastructureAnual: costData.gitlab_ee_ultimate_cloud_duo_pro.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ee_ultimate_cloud_duo_pro.totalMensal * 12,
        vmSpecs: costData.gitlab_ee_ultimate_cloud_duo_pro.vmSpecs,
        calculationDetails:
          'Ultimate: $99 × 47 = $4.653\nDuo Pro: $19 × 30 = $570\nTotal: $5.223 × 5,50 = R$ 28.726,50',
      },
      {
        plataforma: t('costs.platforms.gitlabEEUltimateCloudDuoEnterprise'),
        licenseMensal: costData.gitlab_ee_ultimate_cloud_duo_enterprise.licenseMensal,
        infrastructureMensal: costData.gitlab_ee_ultimate_cloud_duo_enterprise.infrastructureMensal,
        totalMensal: costData.gitlab_ee_ultimate_cloud_duo_enterprise.totalMensal,
        licenseAnual: costData.gitlab_ee_ultimate_cloud_duo_enterprise.licenseMensal * 12,
        infrastructureAnual:
          costData.gitlab_ee_ultimate_cloud_duo_enterprise.infrastructureMensal * 12,
        totalAnual: costData.gitlab_ee_ultimate_cloud_duo_enterprise.totalMensal * 12,
        vmSpecs: costData.gitlab_ee_ultimate_cloud_duo_enterprise.vmSpecs,
        calculationDetails:
          'Ultimate: $99 × 47 = $4.653\nDuo Enterprise: $39 × 30 = $1.170\nTotal: $5.823 × 5,50 = R$ 32.026,50',
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
        calculationDetails:
          'Licença: $21 × 47 usuários × 5,50 = R$ 5.423,50\nInfraestrutura: $532 × 5,50 = R$ 2.926\nTotal: R$ 5.423,50 + R$ 2.926 = R$ 8.349,50',
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
        calculationDetails:
          'Licença: $21 × 47 usuários × 5,50 = R$ 5.423,50\nInfraestrutura: R$ 0 (Cloud)\nTotal: R$ 5.423,50',
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
        calculationDetails:
          'GitHub EE: $21 × 47 = $987\nCopilot: $39 × 30 = $1.170\nTotal USD: $2.157 × 5,50 = R$ 11.863,50',
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
