import React from 'react';
import { Shield, CheckCircle, XCircle, AlertTriangle, Lock, Eye, FileSearch } from 'lucide-react';

const SecuritySection: React.FC = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto" data-section="security">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Análise de Segurança da Informação</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-blue-800 text-sm mb-3">
            📄 <strong>Documento Completo Disponível:</strong> Acesse a análise técnica detalhada da equipe de SI
          </p>
          <a
            href="/Análise Comparativa Git - Segurança da Informação.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            <FileSearch className="w-4 h-4" />
            Visualizar PDF Completo
          </a>
        </div>
      </div>
      
      {/* Aviso sobre escopo da análise */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-500" />
          <div>
            <h3 className="text-lg font-bold text-amber-800 mb-2">Escopo da Análise de SI</h3>
            <p className="text-amber-700">
              Esta análise foi conduzida pela equipe de Segurança da Informação focando especificamente em 
              <strong> soluções On-Premises</strong>. As opções Cloud (GitHub Enterprise Cloud, GitLab Cloud) 
              não foram consideradas nesta avaliação de segurança corporativa.
            </p>
          </div>
        </div>
      </div>

      {/* Matriz Comparativa */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" />
          Matriz Comparativa de Segurança
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left font-semibold p-3">Critério de Segurança</th>
                <th className="text-center font-semibold p-3">GitLab CE<br/><span className="text-xs text-gray-500">(Atual)</span></th>
                <th className="text-center font-semibold p-3">GitLab EE<br/><span className="text-xs text-gray-500">(On-Premises)</span></th>
                <th className="text-center font-semibold p-3">GitHub ES<br/><span className="text-xs text-gray-500">(+ Advanced Security)</span></th>
                <th className="text-center font-semibold p-3">Importância</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">Autenticação e Autorização (SSO, MFA)</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    Básico
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Robusto
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Robusto
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">CRÍTICA</span>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">Controle de Permissões Granulares</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    Básico
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Robusto
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Robusto
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">CRÍTICA</span>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">Registro e Auditoria de Atividades</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    Ausente
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Robusto
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Robusto
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">CRÍTICA</span>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">SAST (Análise de Código Estático)</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    Ausente
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Nativo
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-blue-600">
                    <CheckCircle className="w-4 h-4" />
                    <strong>CodeQL</strong>
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">ALTA</span>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">DAST (Análise de Aplicação Dinâmica)</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    Ausente
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Nativo
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-amber-600">
                    <AlertTriangle className="w-4 h-4" />
                    Integração
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">ALTA</span>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">Análise de Dependências</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    Ausente
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Nativo
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Nativo
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">ALTA</span>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">Detecção de Segredos</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    Ausente
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Nativo
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-blue-600">
                    <CheckCircle className="w-4 h-4" />
                    <strong>Push Protection</strong>
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">CRÍTICA</span>
                </td>
              </tr>
              
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">Suporte a Compliance (SOC 2, ISO 27001)</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    Ausente
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Frameworks
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-amber-600">
                    <AlertTriangle className="w-4 h-4" />
                    Limitado
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">CRÍTICA</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Análise Detalhada por Solução */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* GitLab CE */}
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <XCircle className="w-6 h-6 text-red-600" />
            <h3 className="text-lg font-bold text-red-800">GitLab CE (Atual)</h3>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Prós
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Custo de licenciamento zero</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Contras Críticos
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>Lacunas de segurança e auditoria</strong></li>
              <li>• Ausência de trilhas de auditoria</li>
              <li>• Necessidade de ferramentas externas</li>
              <li>• Desafios de conformidade</li>
              <li>• Sem suporte profissional</li>
            </ul>
          </div>
          
          <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded">
            <p className="text-red-800 text-xs font-medium">
              ⚠️ <strong>Avaliação SI:</strong> Não sustentável por motivos de segurança
            </p>
          </div>
        </div>

        {/* GitLab EE */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-orange-600" />
            <h3 className="text-lg font-bold text-orange-800">GitLab EE Ultimate</h3>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Prós
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>Plataforma unificada</strong> (All-in-One)</li>
              <li>• Integração nativa SAST, DAST, etc</li>
              <li>• <strong>Governança centralizada</strong></li>
              <li>• Compliance Frameworks nativos</li>
              <li>• Visibilidade completa</li>
              <li>• <strong>Evolução natural</strong> (baixo risco)</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Contras
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Scanners podem ser menos especializados que soluções dedicadas</li>
            </ul>
          </div>
          
          <div className="p-3 bg-orange-100 border border-orange-300 rounded">
            <p className="text-orange-800 text-xs font-medium">
              🏆 <strong>Cenário 1 (SI):</strong> Evolução natural com suíte DevSecOps completa
            </p>
          </div>
        </div>

        {/* GitHub ES */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-bold text-blue-800">GitHub Enterprise Server</h3>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Prós
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Ecossistema maduro (GitHub Actions)</li>
              <li>• <strong>CodeQL SAST</strong> (reconhecido no mercado)</li>
              <li>• <strong>Push Protection</strong> (preventivo)</li>
              <li>• Análise estática de destaque</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Contras
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>Advanced Security como add-on</strong></li>
              <li>• Ausência de DAST nativo</li>
              <li>• Foco menor em compliance</li>
              <li>• <strong>Projeto de migração</strong> complexo</li>
            </ul>
          </div>
          
          <div className="p-3 bg-blue-100 border border-blue-300 rounded">
            <p className="text-blue-800 text-xs font-medium">
              🎯 <strong>Cenário 2 (SI):</strong> Excelência em SAST específico, maior complexidade
            </p>
          </div>
        </div>
      </div>

      {/* Recomendação da SI */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center justify-center gap-2">
            <Eye className="w-6 h-6" />
            Recomendação da Segurança da Informação
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-orange-300 rounded-lg p-4">
                <h4 className="font-bold text-orange-800 mb-2">🔄 Cenário 1: GitLab EE Ultimate</h4>
                <p className="text-sm text-gray-700">
                  <strong>Evolução natural e baixo risco.</strong> Suíte DevSecOps unificada com governança centralizada. 
                  Ideal para simplificação operacional e gestão integrada de vulnerabilidades.
                </p>
              </div>
              <div className="bg-white border border-blue-300 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">🎯 Cenário 2: GitHub ES + Advanced Security</h4>
                <p className="text-sm text-gray-700">
                  <strong>Migração complexa com excelência técnica.</strong> Acesso ao CodeQL (SAST líder de mercado) 
                  e Push Protection, mas requer integração de soluções complementares.
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <p className="text-gray-800 text-sm">
                <strong>📋 Nota Importante:</strong> Para o GitHub Enterprise Server ser comparável ao GitLab EE em segurança, 
                a contratação do complemento "Advanced Security" é <strong>indispensável</strong>. 
                Sem ele, a plataforma não atende diversos critérios de segurança críticos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nota sobre soluções Cloud */}
      <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <FileSearch className="w-5 h-5 text-gray-600" />
          <h4 className="font-semibold text-gray-800">Nota sobre Soluções Cloud</h4>
        </div>
        <p className="text-gray-700 text-sm">
          As opções <strong>GitHub Enterprise Cloud</strong> e <strong>GitLab Cloud</strong> não foram avaliadas nesta análise de 
          Segurança da Informação, que se concentrou especificamente em soluções on-premises para atender aos 
          requisitos de controle de dados da organização.
        </p>
      </div>
    </div>
  );
};

export default SecuritySection;