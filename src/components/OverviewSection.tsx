import React from 'react';
import ComparisonBox from './ComparisonBox';
import { researchData } from '@/data';

const OverviewSection: React.FC = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Análise Comparativa Completa */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Análise Comparativa por Plataforma</h2>
        
        {/* Two main comparison boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ComparisonBox platform="gitlab" />
          <ComparisonBox platform="github" />
        </div>
      </div>

      {/* Comparativo de Custos */}
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center">
          💰 Comparativo de Custos Anuais (47 usuários)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-yellow-300">
                <th className="text-left font-semibold">Plataforma</th>
                <th className="text-center font-semibold">Licenças (Mensal)</th>
                <th className="text-center font-semibold">Infraestrutura (Mensal)</th>
                <th className="text-center font-semibold">Total Mensal</th>
                <th className="text-center font-semibold">Licenças (Anual)</th>
                <th className="text-center font-semibold">Infraestrutura (Anual)</th>
                <th className="text-center font-semibold">Total Anual</th>
                <th className="text-center font-semibold">VM Specs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-yellow-200">
                <td className="font-medium">GitLab CE (Self-hosted)</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ce_onpremises.licenseMensal}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ce_onpremises.infrastructureMensal}</td>
                <td className="text-center font-semibold">{researchData.custos.gitlab_ce_onpremises.totalMensal}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ce_onpremises.licenseAnual}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ce_onpremises.infrastructureAnual}</td>
                <td className="text-center font-semibold">{researchData.custos.gitlab_ce_onpremises.totalAnual}</td>
                <td className="text-xs">{researchData.custos.gitlab_ce_onpremises.vmSpecs}</td>
              </tr>
              <tr className="border-b border-yellow-200">
                <td className="font-medium">GitLab EE Premium (Self-hosted)</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_premium_onpremises.licenseMensal}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_premium_onpremises.infrastructureMensal}</td>
                <td className="text-center font-semibold">{researchData.custos.gitlab_ee_premium_onpremises.totalMensal}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_premium_onpremises.licenseAnual}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_premium_onpremises.infrastructureAnual}</td>
                <td className="text-center font-semibold">{researchData.custos.gitlab_ee_premium_onpremises.totalAnual}</td>
                <td className="text-xs">{researchData.custos.gitlab_ee_premium_onpremises.vmSpecs}</td>
              </tr>
              <tr className="border-b border-yellow-200">
                <td className="font-medium">GitLab EE Ultimate (Self-hosted)</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_ultimate_onpremises.licenseMensal}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_ultimate_onpremises.infrastructureMensal}</td>
                <td className="text-center font-semibold">{researchData.custos.gitlab_ee_ultimate_onpremises.totalMensal}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_ultimate_onpremises.licenseAnual}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_ultimate_onpremises.infrastructureAnual}</td>
                <td className="text-center font-semibold">{researchData.custos.gitlab_ee_ultimate_onpremises.totalAnual}</td>
                <td className="text-xs">{researchData.custos.gitlab_ee_ultimate_onpremises.vmSpecs}</td>
              </tr>
              <tr className="border-b border-yellow-200">
                <td className="font-medium">GitLab EE Premium (Cloud)</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_premium_cloud.licenseMensal}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_premium_cloud.infrastructureMensal}</td>
                <td className="text-center font-semibold">{researchData.custos.gitlab_ee_premium_cloud.totalMensal}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_premium_cloud.licenseAnual}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_premium_cloud.infrastructureAnual}</td>
                <td className="text-center font-semibold">{researchData.custos.gitlab_ee_premium_cloud.totalAnual}</td>
                <td className="text-xs">{researchData.custos.gitlab_ee_premium_cloud.vmSpecs}</td>
              </tr>
              <tr className="border-b border-yellow-200">
                <td className="font-medium">GitLab EE Ultimate (Cloud)</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_ultimate_cloud.licenseMensal}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_ultimate_cloud.infrastructureMensal}</td>
                <td className="text-center font-semibold">{researchData.custos.gitlab_ee_ultimate_cloud.totalMensal}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_ultimate_cloud.licenseAnual}</td>
                <td className="text-center py-1">{researchData.custos.gitlab_ee_ultimate_cloud.infrastructureAnual}</td>
                <td className="text-center font-semibold">{researchData.custos.gitlab_ee_ultimate_cloud.totalAnual}</td>
                <td className="text-xs">{researchData.custos.gitlab_ee_ultimate_cloud.vmSpecs}</td>
              </tr>
              <tr className="border-b border-yellow-200">
                <td className="font-medium">GitHub EE (Self-hosted)</td>
                <td className="text-center py-1">{researchData.custos.github_ee_onpremises.licenseMensal}</td>
                <td className="text-center py-1">{researchData.custos.github_ee_onpremises.infrastructureMensal}</td>
                <td className="text-center font-semibold">{researchData.custos.github_ee_onpremises.totalMensal}</td>
                <td className="text-center py-1">{researchData.custos.github_ee_onpremises.licenseAnual}</td>
                <td className="text-center py-1">{researchData.custos.github_ee_onpremises.infrastructureAnual}</td>
                <td className="text-center font-semibold">{researchData.custos.github_ee_onpremises.totalAnual}</td>
                <td className="text-xs">{researchData.custos.github_ee_onpremises.vmSpecs}</td>
              </tr>
              <tr className="border-b border-yellow-200 bg-green-50">
                <td className="font-medium">GitHub EE (Cloud)</td>
                <td className="text-center py-1">{researchData.custos.github_ee_cloud.licenseMensal}</td>
                <td className="text-center py-1">{researchData.custos.github_ee_cloud.infrastructureMensal}</td>
                <td className="text-center font-semibold">{researchData.custos.github_ee_cloud.totalMensal}</td>
                <td className="text-center py-1">{researchData.custos.github_ee_cloud.licenseAnual}</td>
                <td className="text-center py-1">{researchData.custos.github_ee_cloud.infrastructureAnual}</td>
                <td className="text-center font-semibold">{researchData.custos.github_ee_cloud.totalAnual}</td>
                <td className="text-xs">{researchData.custos.github_ee_cloud.vmSpecs}</td>
              </tr>
              <tr className="border-b border-yellow-200 bg-green-50">
                <td className="font-medium">GitHub EE + Copilot (Cloud)</td>
                <td className="text-center py-1">{researchData.custos.github_ee_cloud_copilot.licenseMensal}</td>
                <td className="text-center py-1">{researchData.custos.github_ee_cloud_copilot.infrastructureMensal}</td>
                <td className="text-center font-semibold">{researchData.custos.github_ee_cloud_copilot.totalMensal}</td>
                <td className="text-center py-1">{researchData.custos.github_ee_cloud_copilot.licenseAnual}</td>
                <td className="text-center py-1">{researchData.custos.github_ee_cloud_copilot.infrastructureAnual}</td>
                <td className="text-center font-semibold">{researchData.custos.github_ee_cloud_copilot.totalAnual}</td>
                <td className="text-xs">{researchData.custos.github_ee_cloud_copilot.vmSpecs}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

                                      {/* Análise de Migração */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-4xl mx-auto">
                <p className="text-gray-700 text-base leading-relaxed">
                  Há algumas semanas iniciamos um projeto de migração para o GitHub Cloud Enterprise, 
                  buscando utilizar as ferramentas de IA que a plataforma oferece, incluindo o GitHub Copilot. 
                  Já realizamos a tradução dos scripts de CI/CD do GitLab para GitHub Actions e parte da 
                  migração dos repositórios. O trabalho foi pausado temporariamente para revisão dos 
                  requisitos do projeto, mas <strong className="text-blue-600">continuar com GitHub permitiria aproveitar todo esse trabalho já realizado</strong>&nbsp;
                  e manter o progresso já alcançado.
                </p>
              </div>



                   {/* Recomendação Principal */}
             <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
               <h2 className="text-2xl font-bold text-green-800 mb-3">
                 🏆 Recomendação Estratégica: GitHub Enterprise Cloud
               </h2>
               <p className="text-green-700 text-lg max-w-4xl mx-auto mb-4">
                 <strong>Proceder com GitHub Enterprise Cloud</strong> representa a decisão estratégica mais equilibrada.
                 Maximiza o investimento já realizado, oferece superioridade comprovada das ferramentas de IA para modernização .NET,
                 e elimina overhead operacional identificado pela equipe interna.
               </p>
               <div className="bg-blue-50 border border-blue-200 rounded p-3 max-w-3xl mx-auto">
                 <p className="text-blue-800 text-sm font-medium">
                   📋 <strong>Base da Recomendação:</strong> Esta análise foi conduzida pelo time de desenvolvimento, 
                   considerando aspectos técnicos, operacionais e estratégicos da migração.
                 </p>
               </div>
             </div>
    </div>
  );
};

export default OverviewSection; 