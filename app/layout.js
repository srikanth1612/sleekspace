
import "./globals.css";

export const metadata = {
  title: "Sleekspace Interiors - Modern Interior Design",
  description:
    "Sleekspace Interiors offers modern, elegant, and functional interior design solutions with premium quality and affordable pricing.",
  
  keywords: [
    "Interior Design",
    "Home Interiors",
    "Modular Kitchen",
    "Residential Interiors",
    "Commercial Interiors",
    "Interior Designers in India",
    "Interior Designers in Hyderabad",
    "Interior Designers in Telangana",
  ],

  verification: {
    google: "googlec2edbeb66fcc6610",
  },

  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

