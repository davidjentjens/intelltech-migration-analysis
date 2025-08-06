import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, CheckCircle, XCircle, AlertTriangle, Lock, Eye, FileSearch } from 'lucide-react';

const SecuritySection: React.FC = () => {
  const { t } = useTranslation();

  // Function to render text with bold markdown
  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto" data-section="security">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('security.title')}</h2>
      </div>

      {/* Aviso sobre escopo da análise */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-amber-800 mb-3">{t('security.scope.title')}</h3>
            <p className="text-amber-700 mb-4">{t('security.scope.description')}</p>

            {/* PDF Document Section */}
            <div className="bg-amber-100 border border-amber-300 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <FileSearch className="w-5 h-5 text-amber-700" />
                <h4 className="font-semibold text-amber-800">
                  {t('security.scope.documentTitle')}
                </h4>
              </div>
              <p className="text-amber-700 text-sm mb-3">
                {t('security.scope.documentDescription')}
              </p>
              <a
                href="/Análise Comparativa Git - Segurança da Informação.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
              >
                <FileSearch className="w-4 h-4" />
                {t('security.scope.viewPDF')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Matriz Comparativa */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" />
          {t('security.matrix.title')}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left font-semibold p-3">
                  {t('security.matrix.headers.criteria')}
                </th>
                <th className="text-center font-semibold p-3">
                  GitLab CE
                  <br />
                  <span className="text-xs text-gray-500">
                    ({t('security.matrix.headers.current')})
                  </span>
                </th>
                <th className="text-center font-semibold p-3">
                  GitLab EE
                  <br />
                  <span className="text-xs text-gray-500">
                    ({t('security.matrix.headers.onPremises')})
                  </span>
                </th>
                <th className="text-center font-semibold p-3">
                  GitHub ES
                  <br />
                  <span className="text-xs text-gray-500">(+ Advanced Security)</span>
                </th>
                <th className="text-center font-semibold p-3">
                  {t('security.matrix.headers.importance')}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">{t('security.matrix.criteria.authentication')}</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    {t('security.matrix.values.basic')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.robust')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.robust')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">
                    {t('security.matrix.values.critical')}
                  </span>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">{t('security.matrix.criteria.permissions')}</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    {t('security.matrix.values.basic')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.robust')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.robust')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">
                    {t('security.matrix.values.critical')}
                  </span>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">{t('security.matrix.criteria.auditLogs')}</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    {t('security.matrix.values.absent')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.robust')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.robust')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">
                    {t('security.matrix.values.critical')}
                  </span>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">{t('security.matrix.criteria.sast')}</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    {t('security.matrix.values.absent')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.native')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-blue-600">
                    <CheckCircle className="w-4 h-4" />
                    <strong>{t('security.matrix.values.codeql')}</strong>
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">
                    {t('security.matrix.values.high')}
                  </span>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">{t('security.matrix.criteria.dast')}</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    {t('security.matrix.values.absent')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.native')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-amber-600">
                    <AlertTriangle className="w-4 h-4" />
                    {t('security.matrix.values.integration')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">
                    {t('security.matrix.values.high')}
                  </span>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">
                  {t('security.matrix.criteria.dependencyAnalysis')}
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    {t('security.matrix.values.absent')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.native')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.native')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">
                    {t('security.matrix.values.high')}
                  </span>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">{t('security.matrix.criteria.secretDetection')}</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    {t('security.matrix.values.absent')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.native')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-blue-600">
                    <CheckCircle className="w-4 h-4" />
                    <strong>{t('security.matrix.values.pushProtection')}</strong>
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">
                    {t('security.matrix.values.critical')}
                  </span>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">{t('security.matrix.criteria.compliance')}</td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    {t('security.matrix.values.absent')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    {t('security.matrix.values.frameworks')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="inline-flex items-center gap-1 text-amber-600">
                    <AlertTriangle className="w-4 h-4" />
                    {t('security.matrix.values.limited')}
                  </span>
                </td>
                <td className="text-center p-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">
                    {t('security.matrix.values.critical')}
                  </span>
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
            <h3 className="text-lg font-bold text-red-800">
              {t('security.analysis.gitlabCE.title')}
            </h3>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              {t('security.analysis.gitlabCE.pros')}
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              {(t('security.analysis.gitlabCE.prosItems', { returnObjects: true }) as string[]).map(
                (item: string, index: number) => (
                  <li key={index}>• {renderTextWithBold(item)}</li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              {t('security.analysis.gitlabCE.cons')}
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              {(t('security.analysis.gitlabCE.consItems', { returnObjects: true }) as string[]).map(
                (item: string, index: number) => (
                  <li key={index}>• {renderTextWithBold(item)}</li>
                )
              )}
            </ul>
          </div>

          <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded">
            <p className="text-red-800 text-xs font-medium">
              ⚠️ <strong>{t('security.analysis.gitlabCE.evaluation')}:</strong>{' '}
              {t('security.analysis.gitlabCE.evaluationText')}
            </p>
          </div>
        </div>

        {/* GitLab EE */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-orange-600" />
            <h3 className="text-lg font-bold text-orange-800">
              {t('security.analysis.gitlabEE.title')}
            </h3>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              {t('security.analysis.gitlabEE.pros')}
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              {(t('security.analysis.gitlabEE.prosItems', { returnObjects: true }) as string[]).map(
                (item: string, index: number) => (
                  <li key={index}>• {renderTextWithBold(item)}</li>
                )
              )}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              {t('security.analysis.gitlabEE.cons')}
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              {(t('security.analysis.gitlabEE.consItems', { returnObjects: true }) as string[]).map(
                (item: string, index: number) => (
                  <li key={index}>• {renderTextWithBold(item)}</li>
                )
              )}
            </ul>
          </div>

          <div className="p-3 bg-orange-100 border border-orange-300 rounded">
            <p className="text-orange-800 text-xs font-medium">
              🏆 <strong>{t('security.analysis.gitlabEE.evaluation')}:</strong>{' '}
              {t('security.analysis.gitlabEE.evaluationText')}
            </p>
          </div>
        </div>

        {/* GitHub ES */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-bold text-blue-800">
              {t('security.analysis.githubES.title')}
            </h3>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              {t('security.analysis.githubES.pros')}
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              {(t('security.analysis.githubES.prosItems', { returnObjects: true }) as string[]).map(
                (item: string, index: number) => (
                  <li key={index}>• {renderTextWithBold(item)}</li>
                )
              )}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              {t('security.analysis.githubES.cons')}
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              {(t('security.analysis.githubES.consItems', { returnObjects: true }) as string[]).map(
                (item: string, index: number) => (
                  <li key={index}>• {renderTextWithBold(item)}</li>
                )
              )}
            </ul>
          </div>

          <div className="p-3 bg-blue-100 border border-blue-300 rounded">
            <p className="text-blue-800 text-xs font-medium">
              🎯 <strong>{t('security.analysis.githubES.evaluation')}:</strong>{' '}
              {t('security.analysis.githubES.evaluationText')}
            </p>
          </div>
        </div>
      </div>

      {/* Recomendação da SI */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center justify-center gap-2">
            <Eye className="w-6 h-6" />
            {t('security.recommendations.title')}
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-orange-300 rounded-lg p-4">
                <h4 className="font-bold text-orange-800 mb-2">
                  🔄 {t('security.recommendations.scenario1.title')}
                </h4>
                <p className="text-sm text-gray-700">
                  {renderTextWithBold(t('security.recommendations.scenario1.description'))}
                </p>
              </div>
              <div className="bg-white border border-blue-300 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">
                  🎯 {t('security.recommendations.scenario2.title')}
                </h4>
                <p className="text-sm text-gray-700">
                  {renderTextWithBold(t('security.recommendations.scenario2.description'))}
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <p className="text-gray-800 text-sm">
                {renderTextWithBold(t('security.recommendations.importantNote'))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nota sobre soluções Cloud */}
      <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <FileSearch className="w-5 h-5 text-gray-600" />
          <h4 className="font-semibold text-gray-800">{t('security.cloudNote.title')}</h4>
        </div>
        <p className="text-gray-700 text-sm">
          {renderTextWithBold(t('security.cloudNote.description'))}
        </p>
      </div>
    </div>
  );
};

export default SecuritySection;
