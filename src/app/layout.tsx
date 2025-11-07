import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Flex direction="column" minH="100vh">
            <Navbar />

            {/* Main content grows to fill remaining space */}
            <Box as="main" flex="1">
              {children}
            </Box>

            {/* Footer stays at bottom */}
            <Footer />
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
