# 🚀 Quick Start Guide - Doctor Poultry

## Step 1: Project Initialization

Open your terminal and run these commands:

```bash
# Navigate to the project directory
cd doctor-poultry

# Install all dependencies
npm install

# This will install:
# - Next.js 14
# - React 18
# - TypeScript
# - Tailwind CSS
# - Lucide React (icons)
# - All required types
```

**Expected output**: You'll see npm installing packages. This takes 1-3 minutes.

## Step 2: Start Development Server

```bash
npm run dev
```

**Expected output**:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully
```

## Step 3: Open Your Browser

Navigate to: **http://localhost:3000**

You should see the Doctor Poultry homepage with:
- Arabic interface (default)
- Welcome message
- Feature cards
- Call-to-action buttons

## Step 4: Test the Application

### Test Authentication (Demo Mode)

1. Click "إنشاء حساب" (Sign Up) or "Sign Up"
2. Enter any information:
   - Name: "Test User"
   - Email: "test@example.com"
   - Password: "password123"
3. Click submit
4. You'll be redirected to the dashboard

### Test Language Switching

1. Click the "AR" or "EN" button in the navigation
2. The entire interface will switch languages
3. The text direction will change (RTL ↔ LTR)

### Test Disease Analysis

1. Go to "تحليل" (Analyze) page
2. **Option A - Image Upload**:
   - Click the upload area
   - Select any chicken/poultry image
   - Click "تحليل الآن" (Analyze Now)
   - Wait 2 seconds for mock AI analysis
   - View the results with confidence score, medications, and tips

3. **Option B - Symptom Description**:
   - Switch to "أدخل الأعراض" (Enter Symptoms) tab
   - Type symptoms like "coughing, sneezing, weakness"
   - Click "تحليل الآن" (Analyze Now)
   - Get diagnosis based on symptom matching

### Test Farm Management

1. Go to "المزارع" (Farms) page
2. See two pre-loaded demo farms
3. Click "إنشاء مزرعة" (Create Farm)
4. Fill in farm details:
   - Name: "My New Farm"
   - Location: "Riyadh"
   - Description: "Test farm"
5. Click "حفظ" (Save)
6. See your new farm in the list

### Test Medication Database

1. Go to "الأدوية" (Medications) page
2. Browse 10+ medications
3. Use the search bar to find specific medications
4. Click any medication card to view details:
   - Usage information
   - Dosage instructions
   - Warnings and precautions

### Test Educational Resources

1. Go to "الموارد" (Resources) page
2. See 10+ educational articles
3. Filter by category (Prevention, Treatment, etc.)
4. Click any article to read full content
5. See reading time and tags

## Step 5: Explore the Dashboard

After logging in, the dashboard shows:
- **Statistics Cards**: Total analyses, active farms, success rate
- **Recent Analyses**: Last 3 disease analyses
- **Quick Actions**: Shortcuts to main features

## Common Issues & Solutions

### Port 3000 Already in Use

```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Loading

```bash
# Rebuild Tailwind CSS
npm run dev
# Then hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
```

### TypeScript Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## Build for Production

When you're ready to deploy:

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Visit http://localhost:3000
```

**Expected output**:
```
- info Creating an optimized production build
- info Compiled successfully
- info Collecting page data
- info Finalizing page optimization
```

## File Structure Overview

```
doctor-poultry/
├── app/                  # All pages and routes
│   ├── page.tsx         # Homepage
│   ├── layout.tsx       # Root layout with providers
│   ├── dashboard/       # Dashboard page
│   ├── analyze/         # Disease analysis
│   ├── farms/           # Farm management
│   ├── medications/     # Medication database
│   ├── resources/       # Educational content
│   ├── login/           # Login page
│   └── signup/          # Registration page
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation
│   ├── Card.tsx         # Card component
│   └── LoadingSpinner.tsx
├── lib/
│   ├── contexts/        # React contexts
│   │   ├── LanguageContext.tsx
│   │   └── AuthContext.tsx
│   └── data/            # Mock data and AI logic
│       ├── aiAnalysis.ts
│       ├── medications.ts
│       └── resources.ts
└── public/              # Static files
```

## Next Steps

1. **Customize Branding**: Update colors in `tailwind.config.js`
2. **Add Real AI**: Replace mock AI in `lib/data/aiAnalysis.ts`
3. **Add Database**: Integrate with PostgreSQL or MongoDB
4. **Deploy**: Push to Vercel, Netlify, or your hosting
5. **Add Features**: Extend with notifications, reports, etc.

## Testing Credentials

**All credentials work in demo mode:**
- Email: Any valid email format
- Password: Any password (min 6 characters)

## Performance Tips

- Use Next.js Image component for optimized images
- Enable caching for API routes
- Use React.memo for expensive components
- Implement lazy loading for heavy pages

## Mobile Testing

1. Open DevTools (F12)
2. Click device icon or press Ctrl+Shift+M
3. Select mobile device (iPhone, Android)
4. Test responsive design and touch interactions

## Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (Chromium) 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## Getting Help

If you encounter issues:
1. Check this QUICKSTART.md
2. Read the full README.md
3. Check console for errors (F12 → Console)
4. Clear browser cache and cookies
5. Restart the development server

---

**Congratulations!** You now have a fully functional poultry disease diagnosis system running locally. Happy coding! 🐔
