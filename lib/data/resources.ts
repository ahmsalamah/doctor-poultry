export interface Resource {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'prevention' | 'treatment' | 'nutrition' | 'biosecurity' | 'management';
  contentEn: string;
  contentAr: string;
  imageUrl?: string;
  readTime: number;
  tags: string[];
}

export const resourcesDatabase: Resource[] = [
  {
    id: 'biosecurity-basics',
    titleEn: 'Biosecurity Basics for Poultry Farms',
    titleAr: 'أساسيات الأمن الحيوي لمزارع الدواجن',
    category: 'biosecurity',
    contentEn: 'Biosecurity is your first line of defense against disease. Key measures include: controlling access to your farm, using footbaths with disinfectant, maintaining a clean and dry environment, separating age groups, and implementing all-in/all-out production systems. Always quarantine new birds for at least 30 days before introducing them to your flock.',
    contentAr: 'الأمن الحيوي هو خط دفاعك الأول ضد الأمراض. تشمل التدابير الرئيسية: السيطرة على الوصول إلى مزرعتك، استخدام أحواض القدم بالمطهر، الحفاظ على بيئة نظيفة وجافة، فصل الفئات العمرية، وتنفيذ أنظمة الإنتاج الكامل الدخول/الكامل الخروج. اعزل دائماً الطيور الجديدة لمدة 30 يوماً على الأقل قبل إدخالها إلى قطيعك.',
    readTime: 5,
    tags: ['biosecurity', 'prevention', 'farm management'],
  },
  {
    id: 'vaccination-schedule',
    titleEn: 'Essential Vaccination Schedule',
    titleAr: 'جدول التطعيم الأساسي',
    category: 'prevention',
    contentEn: 'A proper vaccination program is crucial for disease prevention. Day 1: Newcastle and Infectious Bronchitis (spray or eye drop). Week 3-4: Newcastle booster. Week 6-8: Fowl Pox (wing web). Week 10-12: Newcastle and IB boosters. Week 16-18: Newcastle before laying period. Always consult with a veterinarian to customize the schedule for your specific conditions.',
    contentAr: 'برنامج التطعيم المناسب أمر بالغ الأهمية للوقاية من الأمراض. اليوم 1: نيوكاسل والتهاب الشعب الهوائية المعدي (رش أو قطرة عين). الأسبوع 3-4: جرعة معززة لنيوكاسل. الأسبوع 6-8: جدري الدجاج (غشاء الجناح). الأسبوع 10-12: جرعات معززة لنيوكاسل والتهاب الشعب الهوائية. الأسبوع 16-18: نيوكاسل قبل فترة وضع البيض. استشر دائماً طبيباً بيطرياً لتخصيص الجدول حسب ظروفك المحددة.',
    readTime: 7,
    tags: ['vaccination', 'prevention', 'schedule'],
  },
  {
    id: 'coccidiosis-prevention',
    titleEn: 'Preventing Coccidiosis in Your Flock',
    titleAr: 'الوقاية من الكوكسيديا في قطيعك',
    category: 'prevention',
    contentEn: 'Coccidiosis is one of the most common poultry diseases. Prevention strategies include: keeping litter dry (moisture promotes oocyst development), avoiding overcrowding, using coccidiostats in feed, maintaining good ventilation, and regular cleaning of feeders and waterers. Young birds are most susceptible, so pay special attention during the first 6 weeks.',
    contentAr: 'الكوكسيديا من أكثر أمراض الدواجن شيوعاً. تشمل استراتيجيات الوقاية: الحفاظ على الفرشة جافة (الرطوبة تعزز نمو البويضات)، تجنب الازدحام، استخدام مضادات الكوكسيديا في العلف، الحفاظ على تهوية جيدة، والتنظيف المنتظم للمعالف والمشارب. الطيور الصغيرة هي الأكثر عرضة، لذا انتبه بشكل خاص خلال الأسابيع الستة الأولى.',
    readTime: 6,
    tags: ['coccidiosis', 'prevention', 'young birds'],
  },
  {
    id: 'nutrition-immune-system',
    titleEn: 'Nutrition for Strong Immune System',
    titleAr: 'التغذية لنظام مناعي قوي',
    category: 'nutrition',
    contentEn: 'Proper nutrition is fundamental to disease resistance. Ensure your feed contains adequate protein (18-20% for layers, 20-24% for broilers), essential vitamins (especially A, D, E), minerals (calcium, phosphorus), and amino acids. Consider supplementing with probiotics for gut health, and provide vitamin C during stress periods. Always ensure access to clean, fresh water.',
    contentAr: 'التغذية السليمة أساسية لمقاومة الأمراض. تأكد من أن علفك يحتوي على بروتين كافٍ (18-20٪ للبياض، 20-24٪ للتسمين)، فيتامينات أساسية (خاصة A، D، E)، معادن (كالسيوم، فوسفور)، والأحماض الأمينية. فكر في التكميل بالبروبيوتيك لصحة الأمعاء، وقدم فيتامين C خلال فترات الإجهاد. تأكد دائماً من الوصول إلى مياه نظيفة وطازجة.',
    readTime: 5,
    tags: ['nutrition', 'immunity', 'health'],
  },
  {
    id: 'respiratory-disease-signs',
    titleEn: 'Early Signs of Respiratory Diseases',
    titleAr: 'العلامات المبكرة لأمراض الجهاز التنفسي',
    category: 'treatment',
    contentEn: 'Recognizing respiratory diseases early can save your flock. Watch for: coughing, sneezing, nasal discharge, labored breathing, open-mouth breathing, reduced activity, decreased feed intake, and rales (rattling sounds). If multiple birds show these signs, isolate affected birds immediately and consult a veterinarian. Common causes include Newcastle disease, Infectious Bronchitis, and Chronic Respiratory Disease.',
    contentAr: 'التعرف المبكر على أمراض الجهاز التنفسي يمكن أن ينقذ قطيعك. راقب: السعال، العطس، إفرازات الأنف، صعوبة التنفس، التنفس بفم مفتوح، انخفاض النشاط، انخفاض تناول العلف، والصفير (أصوات خشخشة). إذا أظهرت عدة طيور هذه العلامات، اعزل الطيور المتأثرة فوراً واستشر طبيباً بيطرياً. الأسباب الشائعة تشمل مرض نيوكاسل، التهاب الشعب الهوائية المعدي، ومرض الجهاز التنفسي المزمن.',
    readTime: 6,
    tags: ['respiratory', 'symptoms', 'early detection'],
  },
  {
    id: 'heat-stress-management',
    titleEn: 'Managing Heat Stress in Poultry',
    titleAr: 'إدارة الإجهاد الحراري في الدواجن',
    category: 'management',
    contentEn: 'Heat stress can severely impact poultry health and productivity. Prevention strategies: ensure adequate ventilation, provide cool, fresh water at all times, adjust feeding times (feed during cooler hours), use electrolytes in water, provide shade, and consider misting systems in extreme heat. Birds panting with wings spread away from body are showing heat stress signs - take immediate action.',
    contentAr: 'الإجهاد الحراري يمكن أن يؤثر بشدة على صحة وإنتاجية الدواجن. استراتيجيات الوقاية: ضمان تهوية كافية، توفير مياه باردة وطازجة في جميع الأوقات، تعديل أوقات التغذية (إطعام خلال الساعات الأكثر برودة)، استخدام الإلكتروليتات في الماء، توفير الظل، والنظر في أنظمة الرذاذ في الحرارة الشديدة. الطيور التي تلهث مع انتشار الأجنحة بعيداً عن الجسم تظهر علامات الإجهاد الحراري - اتخذ إجراءً فورياً.',
    readTime: 5,
    tags: ['heat stress', 'management', 'summer'],
  },
  {
    id: 'egg-quality-management',
    titleEn: 'Maintaining Optimal Egg Quality',
    titleAr: 'الحفاظ على جودة البيض المثلى',
    category: 'management',
    contentEn: 'Good egg quality starts with proper management. Key factors: adequate calcium (3.5-4% in feed), proper lighting (14-16 hours for layers), collect eggs frequently (at least 3-4 times daily), maintain clean nests, control temperature (ideal 13-24°C), and ensure proper nutrition. Avoid stress, provide clean water, and maintain a consistent routine.',
    contentAr: 'جودة البيض الجيدة تبدأ بالإدارة السليمة. العوامل الرئيسية: كالسيوم كافٍ (3.5-4٪ في العلف)، إضاءة مناسبة (14-16 ساعة للبياض)، جمع البيض بشكل متكرر (3-4 مرات على الأقل يومياً)، الحفاظ على أعشاش نظيفة، التحكم في درجة الحرارة (مثالي 13-24 درجة مئوية)، وضمان التغذية السليمة. تجنب الإجهاد، قدم مياهاً نظيفة، وحافظ على روتين ثابت.',
    readTime: 6,
    tags: ['eggs', 'quality', 'layers'],
  },
  {
    id: 'disinfection-protocols',
    titleEn: 'Effective Disinfection Protocols',
    titleAr: 'بروتوكولات التطهير الفعالة',
    category: 'biosecurity',
    contentEn: 'Proper disinfection is essential for disease control. Steps: 1) Remove all organic matter (cleaning), 2) Apply appropriate disinfectant (quaternary ammonium, iodine, or chlorine-based), 3) Ensure proper contact time (15-30 minutes), 4) Allow to dry completely. Disinfect equipment, boots, vehicles, and housing between flocks. Use footbaths at entry points with fresh disinfectant daily.',
    contentAr: 'التطهير السليم أساسي لمكافحة الأمراض. الخطوات: 1) إزالة جميع المواد العضوية (التنظيف)، 2) تطبيق مطهر مناسب (أمونيوم رباعي، يود، أو قائم على الكلور)، 3) ضمان وقت اتصال مناسب (15-30 دقيقة)، 4) السماح بالجفاف الكامل. طهّر المعدات، الأحذية، المركبات، والمساكن بين القطعان. استخدم أحواض القدم عند نقاط الدخول بمطهر طازج يومياً.',
    readTime: 7,
    tags: ['disinfection', 'biosecurity', 'cleaning'],
  },
  {
    id: 'water-quality',
    titleEn: 'Importance of Water Quality',
    titleAr: 'أهمية جودة المياه',
    category: 'management',
    contentEn: 'Water quality directly affects poultry health and performance. Test water regularly for: bacterial contamination, pH (ideal 6-8), hardness, and mineral content. Clean water lines weekly, sanitize drinkers daily, and ensure adequate water pressure. Birds consume 2-3 times more water than feed by weight. Poor water quality can reduce feed intake and productivity significantly.',
    contentAr: 'جودة المياه تؤثر مباشرة على صحة وأداء الدواجن. اختبر المياه بانتظام لـ: التلوث البكتيري، درجة الحموضة (مثالي 6-8)، القساوة، ومحتوى المعادن. نظف خطوط المياه أسبوعياً، طهّر المشارب يومياً، وتأكد من ضغط مياه كافٍ. تستهلك الطيور 2-3 أضعاف وزن العلف من الماء. جودة المياه الرديئة يمكن أن تقلل من تناول العلف والإنتاجية بشكل كبير.',
    readTime: 5,
    tags: ['water', 'quality', 'health'],
  },
  {
    id: 'parasite-control',
    titleEn: 'External Parasite Control',
    titleAr: 'مكافحة الطفيليات الخارجية',
    category: 'treatment',
    contentEn: 'External parasites like mites and lice can severely impact flock health. Control measures: regular inspection of birds (especially under wings and around vent), dust bathing areas with approved pesticides, treat housing and equipment, maintain dry conditions, and consider diatomaceous earth in dust baths. Severe infestations require veterinary-prescribed treatments.',
    contentAr: 'الطفيليات الخارجية مثل العث والقمل يمكن أن تؤثر بشدة على صحة القطيع. تدابير المكافحة: الفحص المنتظم للطيور (خاصة تحت الأجنحة وحول الفتحة)، مناطق حمام الغبار بمبيدات معتمدة، معالجة المساكن والمعدات، الحفاظ على ظروف جافة، والنظر في التراب الدياتومي في حمامات الغبار. الإصابات الشديدة تتطلب علاجات موصوفة من الطبيب البيطري.',
    readTime: 6,
    tags: ['parasites', 'treatment', 'health'],
  },
];

export function getAllResources(): Resource[] {
  return resourcesDatabase;
}

export function getResourceById(id: string): Resource | undefined {
  return resourcesDatabase.find(r => r.id === id);
}

export function getResourcesByCategory(category: Resource['category']): Resource[] {
  return resourcesDatabase.filter(r => r.category === category);
}

export function searchResources(query: string): Resource[] {
  const lowerQuery = query.toLowerCase();
  return resourcesDatabase.filter(r =>
    r.titleEn.toLowerCase().includes(lowerQuery) ||
    r.titleAr.includes(query) ||
    r.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
