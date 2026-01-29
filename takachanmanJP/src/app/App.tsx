import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
import { AboutPage } from '../pages/AboutPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { AccessibilityPage } from '../pages/AccessibilityPage'
import { CookiePolicyPage } from '../pages/CookiePolicyPage'
import { CreditsPage } from '../pages/CreditsPage'
import { ContactThanksPage } from '../pages/ContactThanksPage'
import { Error500Page } from '../pages/Error500Page'
import { MaintenancePage } from '../pages/MaintenancePage'
import { NewsletterPage } from '../pages/NewsletterPage'
import { GuestbookPage } from '../pages/GuestbookPage'
import { FAQPage } from '../pages/FAQPage'
import { RoadmapPage } from '../pages/RoadmapPage'
import { TermsPage } from '../pages/TermsPage'
import { PrivacyPage } from '../pages/PrivacyPage'
import { SitemapPage } from '../pages/SitemapPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { ProjectDetailPage } from '../pages/ProjectDetailPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="sitemap" element={<SitemapPage />} />
        <Route path="accessibility" element={<AccessibilityPage />} />
        <Route path="cookies" element={<CookiePolicyPage />} />
        <Route path="credits" element={<CreditsPage />} />
        <Route path="thanks" element={<ContactThanksPage />} />
        <Route path="newsletter" element={<NewsletterPage />} />
        <Route path="guestbook" element={<GuestbookPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="500" element={<Error500Page />} />
        <Route path="maintenance" element={<MaintenancePage />} />
        <Route path="404" element={<NotFoundPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}
