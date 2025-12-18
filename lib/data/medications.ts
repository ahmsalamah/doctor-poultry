export interface Medication {
  id: string;
  nameEn: string;
  nameAr: string;
  category: string;
  usage: {
    en: string;
    ar: string;
  };
  dosage: {
    en: string;
    ar: string;
  };
  warnings: {
    en: string[];
    ar: string[];
  };
  relatedDiseases: string[];
}

export const medicationsDatabase: Medication[] = [
  {
    id: 'amprolium',
    nameEn: 'Amprolium',
    nameAr: 'أمبروليوم',
    category: 'Anticoccidial',
    usage: {
      en: 'Treatment and prevention of coccidiosis in poultry',
      ar: 'علاج والوقاية من الكوكسيديا في الدواجن',
    },
    dosage: {
      en: '125-250 mg/L drinking water for 3-5 days',
      ar: '125-250 ملغ/لتر ماء الشرب لمدة 3-5 أيام',
    },
    warnings: {
      en: [
        'Do not use in layers producing eggs for human consumption',
        'May cause thiamine deficiency with prolonged use',
        'Ensure adequate water intake',
        'Consult veterinarian for proper dosing',
      ],
      ar: [
        'لا تستخدم في الدجاج البياض المنتج للبيض للاستهلاك البشري',
        'قد يسبب نقص الثيامين مع الاستخدام المطول',
        'تأكد من تناول كمية كافية من الماء',
        'استشر الطبيب البيطري للجرعة المناسبة',
      ],
    },
    relatedDiseases: ['coccidiosis'],
  },
  {
    id: 'enrofloxacin',
    nameEn: 'Enrofloxacin',
    nameAr: 'إنروفلوكساسين',
    category: 'Antibiotic',
    usage: {
      en: 'Treatment of bacterial infections including salmonellosis and E. coli',
      ar: 'علاج الالتهابات البكتيرية بما في ذلك السالمونيلا والإي كولاي',
    },
    dosage: {
      en: '50-100 mg/L drinking water for 3-5 days',
      ar: '50-100 ملغ/لتر ماء الشرب لمدة 3-5 أيام',
    },
    warnings: {
      en: [
        'Withdrawal period: 5 days before slaughter',
        'Not for use in layers producing eggs for consumption',
        'Complete the full course of treatment',
        'Resistant bacteria may develop with misuse',
      ],
      ar: [
        'فترة السحب: 5 أيام قبل الذبح',
        'غير مخصص للاستخدام في البياض المنتج للبيض للاستهلاك',
        'أكمل الدورة العلاجية الكاملة',
        'قد تتطور بكتيريا مقاومة مع سوء الاستخدام',
      ],
    },
    relatedDiseases: ['salmonellosis', 'infectious_bronchitis'],
  },
  {
    id: 'newcastle_vaccine',
    nameEn: 'Newcastle Disease Vaccine',
    nameAr: 'لقاح مرض نيوكاسل',
    category: 'Vaccine',
    usage: {
      en: 'Prevention of Newcastle disease in poultry',
      ar: 'الوقاية من مرض نيوكاسل في الدواجن',
    },
    dosage: {
      en: 'Follow manufacturer instructions. Typically administered via drinking water, eye drop, or injection',
      ar: 'اتبع تعليمات الشركة المصنعة. يُعطى عادةً عن طريق ماء الشرب أو قطرة العين أو الحقن',
    },
    warnings: {
      en: [
        'Vaccinate only healthy birds',
        'Store vaccine at proper temperature (2-8°C)',
        'Use within specified time after opening',
        'Follow recommended vaccination schedule',
      ],
      ar: [
        'طعّم الطيور السليمة فقط',
        'احفظ اللقاح في درجة الحرارة المناسبة (2-8 درجة مئوية)',
        'استخدم خلال الوقت المحدد بعد الفتح',
        'اتبع جدول التطعيم الموصى به',
      ],
    },
    relatedDiseases: ['newcastle'],
  },
  {
    id: 'sulfaquinoxaline',
    nameEn: 'Sulfaquinoxaline',
    nameAr: 'سلفاكينوكسالين',
    category: 'Anticoccidial',
    usage: {
      en: 'Treatment of acute coccidiosis outbreaks',
      ar: 'علاج تفشي الكوكسيديا الحاد',
    },
    dosage: {
      en: '0.04% in drinking water for 2 days, then 0.025% for 2 days',
      ar: '0.04٪ في ماء الشرب لمدة يومين، ثم 0.025٪ لمدة يومين',
    },
    warnings: {
      en: [
        'Withdrawal period: 10 days',
        'Not for use in laying hens',
        'May cause kidney damage with overdose',
        'Ensure birds have access to water',
      ],
      ar: [
        'فترة السحب: 10 أيام',
        'غير مخصص للاستخدام في الدجاج البياض',
        'قد يسبب تلف الكلى مع الجرعة الزائدة',
        'تأكد من وصول الطيور إلى الماء',
      ],
    },
    relatedDiseases: ['coccidiosis'],
  },
  {
    id: 'fowl_pox_vaccine',
    nameEn: 'Fowl Pox Vaccine',
    nameAr: 'لقاح جدري الدجاج',
    category: 'Vaccine',
    usage: {
      en: 'Prevention of fowl pox in chickens and turkeys',
      ar: 'الوقاية من جدري الدجاج في الدجاج والديك الرومي',
    },
    dosage: {
      en: 'Wing-web stab method. One dose per bird at 6-10 weeks of age',
      ar: 'طريقة الوخز في غشاء الجناح. جرعة واحدة لكل طائر في عمر 6-10 أسابيع',
    },
    warnings: {
      en: [
        'Do not vaccinate birds showing disease symptoms',
        'Check for successful vaccination after 7-10 days',
        'Store vaccine frozen until use',
        'Use only designated needles',
      ],
      ar: [
        'لا تطعّم الطيور التي تظهر أعراض المرض',
        'تحقق من نجاح التطعيم بعد 7-10 أيام',
        'احفظ اللقاح مجمداً حتى الاستخدام',
        'استخدم الإبر المخصصة فقط',
      ],
    },
    relatedDiseases: ['fowl_pox'],
  },
  {
    id: 'vitamin_c',
    nameEn: 'Vitamin C',
    nameAr: 'فيتامين سي',
    category: 'Supplement',
    usage: {
      en: 'Stress relief and immune support during disease or environmental stress',
      ar: 'تخفيف الإجهاد ودعم المناعة أثناء المرض أو الإجهاد البيئي',
    },
    dosage: {
      en: '200-500 mg/L drinking water during stress periods',
      ar: '200-500 ملغ/لتر ماء الشرب خلال فترات الإجهاد',
    },
    warnings: {
      en: [
        'Not a cure for diseases',
        'Use as supportive therapy only',
        'Fresh solution daily',
        'May reduce water intake if over-concentrated',
      ],
      ar: [
        'ليس علاجاً للأمراض',
        'استخدم كعلاج داعم فقط',
        'محلول طازج يومياً',
        'قد يقلل من تناول الماء إذا كان مركزاً جداً',
      ],
    },
    relatedDiseases: ['infectious_bronchitis', 'newcastle', 'fowl_pox'],
  },
  {
    id: 'toltrazuril',
    nameEn: 'Toltrazuril',
    nameAr: 'تولترازوريل',
    category: 'Anticoccidial',
    usage: {
      en: 'Treatment and prevention of coccidiosis with high efficacy',
      ar: 'علاج والوقاية من الكوكسيديا بفعالية عالية',
    },
    dosage: {
      en: '7 mg/L drinking water for 2 consecutive days',
      ar: '7 ملغ/لتر ماء الشرب لمدة يومين متتاليين',
    },
    warnings: {
      en: [
        'Withdrawal period: 8 days',
        'Very effective but more expensive',
        'Single treatment usually sufficient',
        'Store in cool, dry place',
      ],
      ar: [
        'فترة السحب: 8 أيام',
        'فعال جداً لكن أغلى سعراً',
        'عادة ما يكون العلاج الواحد كافياً',
        'احفظ في مكان بارد وجاف',
      ],
    },
    relatedDiseases: ['coccidiosis'],
  },
  {
    id: 'electrolytes',
    nameEn: 'Electrolyte Solution',
    nameAr: 'محلول الإلكتروليتات',
    category: 'Supplement',
    usage: {
      en: 'Rehydration and electrolyte balance during disease or heat stress',
      ar: 'إعادة الترطيب وتوازن الإلكتروليتات أثناء المرض أو الإجهاد الحراري',
    },
    dosage: {
      en: 'As per manufacturer instructions, typically 0.5-1 g/L drinking water',
      ar: 'حسب تعليمات الشركة المصنعة، عادة 0.5-1 غ/لتر ماء الشرب',
    },
    warnings: {
      en: [
        'Not a substitute for veterinary treatment',
        'Prepare fresh solution daily',
        'Ensure adequate water consumption',
        'Monitor birds for improvement',
      ],
      ar: [
        'ليس بديلاً عن العلاج البيطري',
        'حضر محلولاً طازجاً يومياً',
        'تأكد من استهلاك كافٍ للماء',
        'راقب الطيور للتحسن',
      ],
    },
    relatedDiseases: ['coccidiosis', 'salmonellosis', 'infectious_bronchitis'],
  },
  {
    id: 'probiotics',
    nameEn: 'Probiotics',
    nameAr: 'البروبيوتيك',
    category: 'Supplement',
    usage: {
      en: 'Gut health support and disease prevention',
      ar: 'دعم صحة الأمعاء والوقاية من الأمراض',
    },
    dosage: {
      en: 'As per product instructions, typically 1-2 g/kg feed or 0.5-1 g/L water',
      ar: 'حسب تعليمات المنتج، عادة 1-2 غ/كغ علف أو 0.5-1 غ/لتر ماء',
    },
    warnings: {
      en: [
        'Do not use with antibiotics simultaneously',
        'Store in cool conditions',
        'Use before expiry date',
        'Best used as preventive measure',
      ],
      ar: [
        'لا تستخدم مع المضادات الحيوية في نفس الوقت',
        'احفظ في ظروف باردة',
        'استخدم قبل تاريخ الانتهاء',
        'الأفضل استخدامه كإجراء وقائي',
      ],
    },
    relatedDiseases: ['salmonellosis', 'coccidiosis'],
  },
  {
    id: 'vitamin_a',
    nameEn: 'Vitamin A',
    nameAr: 'فيتامين أ',
    category: 'Supplement',
    usage: {
      en: 'Eye health and immune function support, especially during fowl pox',
      ar: 'دعم صحة العين ووظيفة المناعة، خاصة أثناء جدري الدجاج',
    },
    dosage: {
      en: '5000-10000 IU per bird, mixed in feed or water',
      ar: '5000-10000 وحدة دولية لكل طائر، مخلوطة في العلف أو الماء',
    },
    warnings: {
      en: [
        'Toxicity possible with excessive doses',
        'Fat-soluble vitamin - accumulates in body',
        'Use under veterinary guidance',
        'Monitor for signs of overdose',
      ],
      ar: [
        'السمية ممكنة مع الجرعات الزائدة',
        'فيتامين قابل للذوبان في الدهون - يتراكم في الجسم',
        'استخدم تحت إشراف بيطري',
        'راقب علامات الجرعة الزائدة',
      ],
    },
    relatedDiseases: ['fowl_pox', 'infectious_bronchitis'],
  },
];

export function getAllMedications(): Medication[] {
  return medicationsDatabase;
}

export function getMedicationById(id: string): Medication | undefined {
  return medicationsDatabase.find(m => m.id === id);
}

export function getMedicationsByDisease(diseaseId: string): Medication[] {
  return medicationsDatabase.filter(m => m.relatedDiseases.includes(diseaseId));
}

export function searchMedications(query: string): Medication[] {
  const lowerQuery = query.toLowerCase();
  return medicationsDatabase.filter(m => 
    m.nameEn.toLowerCase().includes(lowerQuery) ||
    m.nameAr.includes(query) ||
    m.category.toLowerCase().includes(lowerQuery)
  );
}
