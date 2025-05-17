import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../app/context/AuthContext";

export function withAuth<P extends React.JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
) {
  return function ProtectedComponent(props: P) {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      const publicPaths = ["/", "/login", "/register"];
      const currentPath = router.pathname.toLowerCase();

      if (!isAuthenticated && !publicPaths.includes(currentPath)) {
        router.replace("/login");
      } else {
        setIsReady(true);
      }
    }, [isAuthenticated, router]);

    if (
      !isAuthenticated &&
      !["/", "/login", "/register"].includes(router.pathname)
    ) {
      return null;
    }

    return isReady ? <WrappedComponent {...props} /> : null;
  };
}
