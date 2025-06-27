import { queryConfig } from "@/lib/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      })
  );

  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </React.Suspense>
  );
}
