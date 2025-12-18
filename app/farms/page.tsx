'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useAuth } from '@/lib/contexts/AuthContext';
import Card from '@/components/Card';
import { Building2, Plus, Users, MapPin, Calendar, UserPlus, Trash2 } from 'lucide-react';

interface Farm {
  id: string;
  name: string;
  location: string;
  description: string;
  createdAt: Date;
  members: { id: string; name: string; role: 'owner' | 'vet' | 'worker' }[];
}

export default function FarmsPage() {
  const { t, dir } = useLanguage();
  const { user } = useAuth();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [farms, setFarms] = useState<Farm[]>([
    {
      id: '1',
      name: dir === 'rtl' ? 'مزرعة الأمل' : 'Hope Farm',
      location: dir === 'rtl' ? 'الرياض' : 'Riyadh',
      description: dir === 'rtl' ? 'مزرعة دواجن تجارية' : 'Commercial poultry farm',
      createdAt: new Date('2024-01-15'),
      members: [
        { id: '1', name: user?.name || 'محمد أحمد', role: 'owner' },
        { id: '2', name: dir === 'rtl' ? 'د. سارة علي' : 'Dr. Sarah Ali', role: 'vet' },
      ],
    },
    {
      id: '2',
      name: dir === 'rtl' ? 'مزرعة النجاح' : 'Success Farm',
      location: dir === 'rtl' ? 'جدة' : 'Jeddah',
      description: dir === 'rtl' ? 'مزرعة دجاج بياض' : 'Layer chicken farm',
      createdAt: new Date('2024-03-20'),
      members: [
        { id: '1', name: user?.name || 'محمد أحمد', role: 'owner' },
      ],
    },
  ]);
  const [newFarm, setNewFarm] = useState({
    name: '',
    location: '',
    description: '',
  });

  const handleCreateFarm = (e: React.FormEvent) => {
    e.preventDefault();
    const farm: Farm = {
      id: Math.random().toString(36).substr(2, 9),
      ...newFarm,
      createdAt: new Date(),
      members: [{ id: user?.id || '1', name: user?.name || 'User', role: 'owner' }],
    };
    setFarms([...farms, farm]);
    setNewFarm({ name: '', location: '', description: '' });
    setShowCreateModal(false);
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'owner':
        return 'badge-success';
      case 'vet':
        return 'badge-info';
      case 'worker':
        return 'badge-warning';
      default:
        return 'badge-warning';
    }
  };

  return (
    <div className="page-container animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            {t('myFarms')}
          </h1>
          <p className="text-gray-600 text-lg">
            {dir === 'rtl'
              ? 'إدارة مزارعك وأعضاء الفريق'
              : 'Manage your farms and team members'}
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          {t('createFarm')}
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {farms.map((farm) => (
          <Card key={farm.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Building2 size={24} className="text-primary-600" />
              </div>
              <span className="badge badge-success">{t('owner')}</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{farm.name}</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} />
                {farm.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={16} />
                {farm.createdAt.toLocaleDateString(dir === 'rtl' ? 'ar-SA' : 'en-US')}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users size={16} />
                {farm.members.length} {dir === 'rtl' ? 'عضو' : 'members'}
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{farm.description}</p>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">
                  {dir === 'rtl' ? 'الأعضاء' : 'Members'}
                </span>
                <button className="text-primary-600 hover:text-primary-700">
                  <UserPlus size={16} />
                </button>
              </div>
              <div className="space-y-2">
                {farm.members.slice(0, 3).map((member) => (
                  <div key={member.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{member.name}</span>
                    <span className={`badge ${getRoleBadgeColor(member.role)}`}>
                      {t(member.role)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-lg p-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('createFarm')}</h2>
            
            <form onSubmit={handleCreateFarm} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('farmName')}
                </label>
                <input
                  type="text"
                  value={newFarm.name}
                  onChange={(e) => setNewFarm({ ...newFarm, name: e.target.value })}
                  className="input-field"
                  placeholder={dir === 'rtl' ? 'أدخل اسم المزرعة' : 'Enter farm name'}
                  required
                  dir={dir}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('location')}
                </label>
                <input
                  type="text"
                  value={newFarm.location}
                  onChange={(e) => setNewFarm({ ...newFarm, location: e.target.value })}
                  className="input-field"
                  placeholder={dir === 'rtl' ? 'أدخل الموقع' : 'Enter location'}
                  required
                  dir={dir}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('description')}
                </label>
                <textarea
                  value={newFarm.description}
                  onChange={(e) => setNewFarm({ ...newFarm, description: e.target.value })}
                  className="input-field min-h-[100px] resize-none"
                  placeholder={dir === 'rtl' ? 'أدخل الوصف' : 'Enter description'}
                  dir={dir}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button type="submit" className="flex-1 btn-primary">
                  {t('save')}
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 btn-secondary"
                >
                  {t('cancel')}
                </button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
