import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const metadata = {
  title: "جدة والطائف — نحو منطقة عالمية لفنون الطهي | IGCAT",
  description:
    "تعمل جدة والطائف معًا نحو أن تصبحا منطقة عالمية لفنون الطهي، بالشراكة مع المعهد الدولي لفنون الطهي والثقافة والفنون والسياحة (IGCAT)، احتفاءً بالتراث والثقافة والاستدامة والابتكار.",
  keywords: [
    "جدة",
    "الطائف",
    "فنون الطهي",
    "IGCAT",
    "هيئة فنون الطهي",
    "منطقة عالمية لفنون الطهي",
    "السياحة المستدامة",
  ],
  openGraph: {
    title: "جدة والطائف — نحو منطقة عالمية لفنون الطهي",
    description:
      "رحلة تحتفي بالتراث والثقافة والمطبخ المحلي والاستدامة والابتكار في جدة والطائف ضمن مبادرة IGCAT.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={plexArabic.variable}>
      <body>{children}</body>
    </html>
  );
}
