"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"
import { ReactQueryDevtools ,ReactQueryDevtoolsPanel} from "@tanstack/react-query-devtools"

export default function Providers({ children }: { children: ReactNode }) {

  const [queryClient] = useState(() => new QueryClient())
  const [isOpen , setIsOpen ] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      {children}
       {/* The rest of your application */}
       <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}