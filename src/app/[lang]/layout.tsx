import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { getDictionary } from "./dictionaries";
import { DictProvider } from "@/context/dict-provider";


export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: "en" | "ru" | "ky" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <Provider>
          {/* Client-side DictProvider */}
          <DictProvider dict={dict}>
            <Flex direction="column" minH="100vh">
              <Navbar currentLang={lang}/>
              <Box as="main" flex="1">
                {children}
              </Box>
              <Footer />
            </Flex>
          </DictProvider>
        </Provider>
      </body>
    </html>
  );
}
