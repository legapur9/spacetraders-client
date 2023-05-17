import { Providers } from "@/components/providers";
import "./globals.css";
import Header from "@/components/Header/Header";
import RadialProgress from "@/components/ui/radialProgress";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body>
        <Providers>
          <Header />
          <div className="fixed top-24 left-0">
            <RadialProgress seconds={5}/>
          </div>
          <div className="p-8">
          {children}
          </div>
        </Providers>
        <div className="fixed h-full w-full top-0 -z-10">
          <svg height="100%" width="100%">
            <defs>
              <linearGradient id="0" x1="0.7" y1="0.04" x2="0.3" y2="0.96">
                <stop offset="0%" stopColor="rgba(44, 38, 43, 0.7)" />
                <stop offset="10.25%" stopColor="rgba(38, 33, 38, 0.7)" />
                <stop offset="20.5%" stopColor="rgba(32, 29, 34, 0.7)" />
                <stop offset="41%" stopColor="rgba(20, 20, 25, .7)" />
                <stop offset="49%" stopColor="rgba(19, 19, 24, .7)" />
                <stop offset="57%" stopColor="rgba(18, 18, 23, .7)" />
                <stop offset="73%" stopColor="rgba(16, 15, 20, .7)" />
              </linearGradient>
              <radialGradient
                id="1"
                gradientTransform="translate(0.12 -0.83) scale(1.77, 1.81)"
              >
                <stop offset="0%" stopColor="rgba(44, 38, 43, 0.3)" />
                <stop offset="20.25%" stopColor="rgba(69, 48, 62, 0.22)" />
                <stop offset="40.5%" stopColor="rgba(100, 55, 79, 0.15)" />
                <stop offset="81%" stopColor="rgba(177, 56, 94, 0)" />
              </radialGradient>
            </defs>
            <rect fill="url(#0)" height="100%" width="100%"/>
            {/* <rect fill="url(#1)" height="100%" width="100%" /> */}
          </svg>
        </div>
        <div className="fixed h-full w-full top-0 -z-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="filter">
              <feTurbulence baseFrequency="0.22" />
              <feColorMatrix
                values="0 0 0 9 -5.5
                               0 0 0 9 -5.5
                               0 0 0 9 -5.5
                               0 0 0 0 1"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#filter)" fill="" />
          </svg>
        </div>
      </body>
    </html>
  );
}
