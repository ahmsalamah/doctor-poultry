export interface Disease {
  id: string;
  nameEn: string;
  nameAr: string;
  symptoms: string[];
  confidence: number;
  medications: string[];
  prevention: {
    en: string[];
    ar: string[];
  };
  whenToConsultVet: {
    en: string[];
    ar: string[];
  };
  severity: 'low' | 'medium' | 'high';
}

export interface AnalysisResult {
  disease: Disease;
  alternativeDiseases?: Disease[];
  analysisDate: Date;
  imageUrl?: string;
  symptoms?: string;
}

const diseasesDatabase: Disease[] = [
  {
    id: 'newcastle',
    nameEn: 'Newcastle Disease',
    nameAr: 'مرض نيوكاسل',
    symptoms: ['respiratory distress', 'twisted neck', 'paralysis', 'green diarrhea', 'weakness'],
    confidence: 0,
    medications: ['Newcastle vaccine', 'Antibiotics (to prevent secondary infection)', 'Vitamin supplements'],
    prevention: {
      en: [
        'Regular vaccination program',
        'Strict biosecurity measures',
        'Quarantine new birds for 30 days',
        'Disinfect equipment regularly',
      ],
      ar: [
        'برنامج تطعيم منتظم',
        'تدابير أمن حيوي صارمة',
        'عزل الطيور الجديدة لمدة 30 يوماً',
        'تطهير المعدات بانتظام',
      ],
    },
    whenToConsultVet: {
      en: [
        'Sudden death in flock',
        'Respiratory distress affecting multiple birds',
        'Neurological signs (twisted neck, paralysis)',
        'Drop in egg production >20%',
      ],
      ar: [
        'موت مفاجئ في القطيع',
        'ضائقة تنفسية تؤثر على عدة طيور',
        'علامات عصبية (التواء الرقبة، شلل)',
        'انخفاض إنتاج البيض بنسبة >20٪',
      ],
    },
    severity: 'high',
  },
  {
    id: 'coccidiosis',
    nameEn: 'Coccidiosis',
    nameAr: 'الكوكسيديا',
    symptoms: ['bloody diarrhea', 'weakness', 'ruffled feathers', 'poor growth', 'dehydration'],
    confidence: 0,
    medications: ['Amprolium', 'Sulfaquinoxaline', 'Toltrazuril', 'Electrolyte solutions'],
    prevention: {
      en: [
        'Keep litter dry and clean',
        'Prevent overcrowding',
        'Use coccidiostats in feed',
        'Regular cleaning and disinfection',
        'Provide clean water',
      ],
      ar: [
        'حافظ على الفرشة جافة ونظيفة',
        'منع الازدحام',
        'استخدام مضادات الكوكسيديا في العلف',
        'التنظيف والتطهير المنتظم',
        'توفير مياه نظيفة',
      ],
    },
    whenToConsultVet: {
      en: [
        'Bloody diarrhea in multiple birds',
        'Severe dehydration',
        'High mortality rate',
        'No improvement with treatment',
      ],
      ar: [
        'إسهال دموي في عدة طيور',
        'جفاف شديد',
        'معدل وفيات مرتفع',
        'عدم تحسن مع العلاج',
      ],
    },
    severity: 'medium',
  },
  {
    id: 'fowl_pox',
    nameEn: 'Fowl Pox',
    nameAr: 'جدري الدجاج',
    symptoms: ['skin lesions', 'scabs on comb and wattles', 'reduced egg production', 'difficulty breathing'],
    confidence: 0,
    medications: ['Fowl pox vaccine', 'Antiseptic treatment for lesions', 'Vitamin A supplements', 'Antibiotics (secondary infection)'],
    prevention: {
      en: [
        'Vaccinate all birds',
        'Control mosquitoes and biting insects',
        'Isolate infected birds immediately',
        'Disinfect equipment',
      ],
      ar: [
        'تطعيم جميع الطيور',
        'مكافحة البعوض والحشرات القارصة',
        'عزل الطيور المصابة فوراً',
        'تطهير المعدات',
      ],
    },
    whenToConsultVet: {
      en: [
        'Lesions spreading rapidly',
        'Difficulty breathing (diphtheritic form)',
        'Secondary bacterial infection',
        'High mortality in young birds',
      ],
      ar: [
        'انتشار الآفات بسرعة',
        'صعوبة في التنفس (الشكل الخناقي)',
        'عدوى بكتيرية ثانوية',
        'وفيات عالية في الطيور الصغيرة',
      ],
    },
    severity: 'medium',
  },
  {
    id: 'infectious_bronchitis',
    nameEn: 'Infectious Bronchitis',
    nameAr: 'التهاب الشعب الهوائية المعدي',
    symptoms: ['coughing', 'sneezing', 'nasal discharge', 'reduced egg production', 'watery eyes'],
    confidence: 0,
    medications: ['IB vaccine', 'Antibiotics (secondary infection)', 'Vitamin C and E', 'Expectorants'],
    prevention: {
      en: [
        'Vaccination program',
        'Good ventilation',
        'Avoid stress factors',
        'Maintain optimal temperature',
        'Biosecurity measures',
      ],
      ar: [
        'برنامج التطعيم',
        'تهوية جيدة',
        'تجنب عوامل الإجهاد',
        'الحفاظ على درجة الحرارة المثلى',
        'تدابير الأمن الحيوي',
      ],
    },
    whenToConsultVet: {
      en: [
        'Severe respiratory distress',
        'Egg production drop >30%',
        'High mortality rate',
        'Misshapen eggs',
      ],
      ar: [
        'ضائقة تنفسية شديدة',
        'انخفاض إنتاج البيض >30٪',
        'معدل وفيات مرتفع',
        'بيض مشوه',
      ],
    },
    severity: 'high',
  },
  {
    id: 'salmonellosis',
    nameEn: 'Salmonellosis',
    nameAr: 'السالمونيلا',
    symptoms: ['diarrhea', 'weakness', 'poor appetite', 'dehydration', 'droopy wings'],
    confidence: 0,
    medications: ['Antibiotics (Enrofloxacin, Trimethoprim)', 'Probiotics', 'Electrolytes', 'Vitamin supplements'],
    prevention: {
      en: [
        'Source chicks from certified hatcheries',
        'Maintain strict hygiene',
        'Rodent and pest control',
        'Clean water supply',
        'Regular testing',
      ],
      ar: [
        'الحصول على الكتاكيت من مفرخات معتمدة',
        'الحفاظ على النظافة الصارمة',
        'مكافحة القوارض والآفات',
        'توفير مياه نظيفة',
        'الفحص المنتظم',
      ],
    },
    whenToConsultVet: {
      en: [
        'Symptoms in young chicks',
        'High mortality rate',
        'Severe dehydration',
        'Suspected food safety issue',
      ],
      ar: [
        'أعراض في الكتاكيت الصغيرة',
        'معدل وفيات مرتفع',
        'جفاف شديد',
        'مشكلة مشتبه بها في سلامة الغذاء',
      ],
    },
    severity: 'medium',
  },
  {
    id: 'marek_disease',
    nameEn: "Marek's Disease",
    nameAr: 'مرض ماريك',
    symptoms: ['paralysis', 'weight loss', 'tumors', 'vision problems', 'uneven pupils'],
    confidence: 0,
    medications: ['No cure - prevention through vaccination', 'Supportive care', 'Culling infected birds'],
    prevention: {
      en: [
        'Vaccinate chicks at day 1',
        'Source from Marek-free flocks',
        'Strict biosecurity',
        'Avoid stress',
        'Good nutrition',
      ],
      ar: [
        'تطعيم الكتاكيت في اليوم الأول',
        'الحصول على كتاكيت من قطعان خالية من ماريك',
        'أمن حيوي صارم',
        'تجنب الإجهاد',
        'تغذية جيدة',
      ],
    },
    whenToConsultVet: {
      en: [
        'Paralysis in birds',
        'Tumors detected',
        'Multiple birds affected',
        'Vision problems in flock',
      ],
      ar: [
        'شلل في الطيور',
        'الكشف عن الأورام',
        'تأثر عدة طيور',
        'مشاكل بصرية في القطيع',
      ],
    },
    severity: 'high',
  },
  {
    id: 'avian_influenza',
    nameEn: 'Avian Influenza',
    nameAr: 'إنفلونزا الطيور',
    symptoms: ['sudden death', 'respiratory distress', 'swollen head', 'purple discoloration', 'drop in egg production'],
    confidence: 0,
    medications: ['Quarantine and reporting mandatory', 'No treatment (cull affected birds)', 'Vaccination in endemic areas'],
    prevention: {
      en: [
        'Strict biosecurity',
        'Prevent contact with wild birds',
        'Disinfection protocols',
        'Report suspected cases immediately',
        'Vaccination where approved',
      ],
      ar: [
        'أمن حيوي صارم',
        'منع الاتصال بالطيور البرية',
        'بروتوكولات التطهير',
        'الإبلاغ عن الحالات المشتبه بها فوراً',
        'التطعيم حيث تمت الموافقة',
      ],
    },
    whenToConsultVet: {
      en: [
        'IMMEDIATE - Any suspected case',
        'Sudden multiple deaths',
        'Respiratory distress in flock',
        'Report to authorities',
      ],
      ar: [
        'فوري - أي حالة مشتبه بها',
        'وفيات مفاجئة متعددة',
        'ضائقة تنفسية في القطيع',
        'الإبلاغ للسلطات',
      ],
    },
    severity: 'high',
  },
];

export function analyzeImage(imageData: string): Promise<AnalysisResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomDisease = diseasesDatabase[Math.floor(Math.random() * diseasesDatabase.length)];
      const confidence = 0.65 + Math.random() * 0.3;
      
      const result: AnalysisResult = {
        disease: {
          ...randomDisease,
          confidence: Math.round(confidence * 100) / 100,
        },
        analysisDate: new Date(),
        imageUrl: imageData,
      };
      
      resolve(result);
    }, 2000);
  });
}

export function analyzeSymptoms(symptoms: string): Promise<AnalysisResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const symptomsLower = symptoms.toLowerCase();
      
      let bestMatch = diseasesDatabase[0];
      let maxMatches = 0;
      
      for (const disease of diseasesDatabase) {
        let matches = 0;
        for (const symptom of disease.symptoms) {
          if (symptomsLower.includes(symptom.toLowerCase())) {
            matches++;
          }
        }
        
        if (matches > maxMatches) {
          maxMatches = matches;
          bestMatch = disease;
        }
      }
      
      const confidence = maxMatches > 0 
        ? Math.min(0.5 + (maxMatches * 0.15), 0.95)
        : 0.3 + Math.random() * 0.3;
      
      const result: AnalysisResult = {
        disease: {
          ...bestMatch,
          confidence: Math.round(confidence * 100) / 100,
        },
        analysisDate: new Date(),
        symptoms: symptoms,
      };
      
      resolve(result);
    }, 1500);
  });
}

export function getAllDiseases(): Disease[] {
  return diseasesDatabase;
}

export function getDiseaseById(id: string): Disease | undefined {
  return diseasesDatabase.find(d => d.id === id);
}
