import { useState } from 'react';
import { MapFieldManager } from './components/MapFieldManager';
import { CropHistoryJournal } from './components/CropHistoryJournal';
import { RotationRecommendations } from './components/RotationRecommendations';
import { EconomicCalculator } from './components/EconomicCalculator';
import { WeatherData } from './components/WeatherData';
import { SoilAnalysis } from './components/SoilAnalysis';
import { ExportReports } from './components/ExportReports';
import { Sprout, Map, Calendar, Calculator, Cloud, Beaker, Download } from 'lucide-react';

type TabType = 'fields' | 'history' | 'recommendations' | 'calculator' | 'weather' | 'soil' | 'export';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('fields');

  const tabs = [
    { id: 'fields' as TabType, name: 'Учет полей', icon: Map },
    { id: 'history' as TabType, name: 'История культур', icon: Calendar },
    { id: 'recommendations' as TabType, name: 'Рекомендации', icon: Sprout },
    { id: 'soil' as TabType, name: 'Анализ почвы', icon: Beaker },
    { id: 'weather' as TabType, name: 'Метеоданные', icon: Cloud },
    { id: 'calculator' as TabType, name: 'Калькулятор', icon: Calculator },
    { id: 'export' as TabType, name: 'Экспорт', icon: Download },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white shadow-sm border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg">
              <Sprout className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-green-900">АгроПлан</h1>
              <p className="text-green-600">Интеллектуальное планирование севооборота</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <nav className="flex border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 transition-all ${
                    activeTab === tab.id
                      ? 'bg-green-50 text-green-700 border-b-2 border-green-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-6">
            {activeTab === 'fields' && <MapFieldManager />}
            {activeTab === 'history' && <CropHistoryJournal />}
            {activeTab === 'recommendations' && <RotationRecommendations />}
            {activeTab === 'soil' && <SoilAnalysis />}
            {activeTab === 'weather' && <WeatherData />}
            {activeTab === 'calculator' && <EconomicCalculator />}
            {activeTab === 'export' && <ExportReports />}
          </div>
        </div>
      </div>
    </div>
  );
}
