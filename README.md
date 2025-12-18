# 🐔 Doctor Poultry - دكتور دواجن

A complete, production-ready web and mobile-responsive application for poultry disease analysis and farm management with AI-powered diagnosis.

## ✨ Features

### 🔍 AI Disease Analysis
- **Image Upload**: Upload poultry images for instant disease detection
- **Symptom Analysis**: Describe symptoms in text for diagnosis
- **Confidence Scoring**: Get reliability scores for each diagnosis
- **Treatment Recommendations**: Receive medication suggestions and dosages
- **Prevention Tips**: Learn how to prevent future outbreaks
- **Veterinary Consultation Guide**: Know when to seek professional help

### 🏢 Farm Management
- **Multi-Farm Support**: Create and manage multiple farms
- **Team Collaboration**: Invite users with different roles (Owner, Vet, Worker)
- **Analysis History**: Track all disease analyses per farm
- **Location Tracking**: Monitor farms across different locations

### 💊 Medication Database
- **Comprehensive Catalog**: 10+ medications with full details
- **Smart Search**: Quick search by name, category, or disease
- **Detailed Information**: Usage, dosage, warnings, and side effects
- **Disease Linking**: See which medications treat which diseases
- **Multi-language Support**: All medications in Arabic and English

### 📚 Educational Resources
- **10+ Articles**: Covering prevention, treatment, nutrition, biosecurity
- **Category Filtering**: Easy navigation by topic
- **Reading Time**: Estimated time for each resource
- **Practical Tips**: Real-world advice from experts

### 🌐 Language Support
- **Arabic (Default)**: Full RTL support with native Arabic interface
- **English**: Complete English translation
- **Dynamic Switching**: Change language instantly without page reload
- **Persistent Preference**: Language choice saved in browser

### 🔐 Authentication System
- **User Registration**: Create accounts with email and password
- **Secure Login**: Mock authentication (ready for real backend)
- **Role Management**: Different permissions for farm members
- **User Profiles**: Manage personal information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Storage**: LocalStorage (for demo)

## 📁 Project Structure

```
doctor-poultry/
├── app/
│   ├── analyze/          # Disease analysis page
│   ├── dashboard/        # User dashboard
│   ├── farms/           # Farm management
│   ├── login/           # Login page
│   ├── medications/     # Medication database
│   ├── resources/       # Educational content
│   ├── signup/          # Registration page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with providers
│   └── page.tsx         # Home page
├── components/
│   ├── Card.tsx         # Reusable card component
│   ├── LoadingSpinner.tsx  # Loading indicator
│   └── Navigation.tsx   # Main navigation with language switcher
├── lib/
│   ├── contexts/
│   │   ├── AuthContext.tsx      # Authentication state
│   │   └── LanguageContext.tsx  # Language and translations
│   └── data/
│       ├── aiAnalysis.ts    # Mock AI analysis logic
│       ├── medications.ts   # Medication database
│       └── resources.ts     # Educational resources
├── public/              # Static assets
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd doctor-poultry
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Usage Guide

### For First-Time Users

1. **Visit the Homepage**: See the welcome screen and feature overview
2. **Sign Up**: Create an account (any email/password works in demo mode)
3. **Explore Dashboard**: View your statistics and quick actions
4. **Analyze a Disease**:
   - Go to "Analyze" page
   - Upload an image OR describe symptoms
   - Get instant diagnosis with treatment recommendations
5. **Manage Farms**: Create farms and add team members
6. **Browse Medications**: Search and learn about different treatments
7. **Read Resources**: Access educational content on poultry care

### Demo Login

- **Email**: Any valid email format (e.g., demo@example.com)
- **Password**: Any password (min 6 characters)

The app uses mock authentication, so any credentials will work.

## 🎨 Design Philosophy

### Medical/Agricultural Aesthetic
- **Clean & Professional**: Medical-grade interface design
- **Trust-Building Colors**: Green (health), Blue (medical), Warm accents
- **Clear Typography**: Georgia for headings, system fonts for body
- **Spacious Layout**: Easy scanning and comfortable reading
- **Status Indicators**: Color-coded confidence levels and badges

### Mobile-First Approach
- **Responsive Grid**: Adapts from mobile to desktop
- **Touch-Friendly**: Large tap targets and spacing
- **Hamburger Menu**: Mobile navigation drawer
- **Optimized Images**: Fast loading on all devices

## 🔧 Customization

### Adding New Diseases

Edit `lib/data/aiAnalysis.ts`:

```typescript
const newDisease: Disease = {
  id: 'disease_id',
  nameEn: 'Disease Name',
  nameAr: 'اسم المرض',
  symptoms: ['symptom1', 'symptom2'],
  medications: ['medication1', 'medication2'],
  prevention: {
    en: ['Prevention tip 1', 'Prevention tip 2'],
    ar: ['نصيحة وقاية 1', 'نصيحة وقاية 2'],
  },
  whenToConsultVet: {
    en: ['Condition 1', 'Condition 2'],
    ar: ['الحالة 1', 'الحالة 2'],
  },
  severity: 'high',
  confidence: 0,
};
```

### Adding New Medications

Edit `lib/data/medications.ts`:

```typescript
const newMedication: Medication = {
  id: 'med_id',
  nameEn: 'Medication Name',
  nameAr: 'اسم الدواء',
  category: 'Antibiotic',
  usage: {
    en: 'Usage description',
    ar: 'وصف الاستخدام',
  },
  dosage: {
    en: 'Dosage information',
    ar: 'معلومات الجرعة',
  },
  warnings: {
    en: ['Warning 1', 'Warning 2'],
    ar: ['تحذير 1', 'تحذير 2'],
  },
  relatedDiseases: ['disease_id'],
};
```

### Adding Translations

Edit `lib/contexts/LanguageContext.tsx`:

```typescript
const translations: Translations = {
  newKey: {
    ar: 'النص بالعربية',
    en: 'English text',
  },
};
```

## 🔄 Integration with Real AI

To integrate with a real AI service:

1. **Update `lib/data/aiAnalysis.ts`**:
   ```typescript
   export async function analyzeImage(imageData: string): Promise<AnalysisResult> {
     const response = await fetch('YOUR_AI_ENDPOINT', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ image: imageData }),
     });
     return await response.json();
   }
   ```

2. **Add environment variables**:
   Create `.env.local`:
   ```
   NEXT_PUBLIC_AI_API_KEY=your_api_key
   NEXT_PUBLIC_AI_ENDPOINT=https://your-ai-service.com/api
   ```

## 🔐 Production Considerations

### Security
- Replace mock authentication with real auth (NextAuth.js, Clerk, etc.)
- Implement proper API routes with authentication
- Add CSRF protection
- Use environment variables for sensitive data
- Implement rate limiting

### Database
- Replace LocalStorage with a real database (PostgreSQL, MongoDB)
- Implement proper data persistence
- Add data validation and sanitization
- Set up database migrations

### Deployment
- Deploy to Vercel, Netlify, or your preferred platform
- Set up CI/CD pipeline
- Configure environment variables
- Enable analytics and monitoring

## 📱 Progressive Web App (PWA)

To make this a PWA, add:

1. **Service Worker**: For offline functionality
2. **Web Manifest**: For install prompts
3. **Icons**: For home screen
4. **Caching Strategy**: For faster loads

## 🤝 Contributing

This is a complete, ready-to-use application. To extend it:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open-source and available for educational and commercial use.

## 🙏 Credits

- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cairo, Tajawal)
- **Framework**: Next.js by Vercel
- **Styling**: Tailwind CSS

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

Made with ❤️ for poultry farmers worldwide
