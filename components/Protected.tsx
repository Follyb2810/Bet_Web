import { useRouter } from "next/navigation";
import { useAuth } from "../app/context/AuthContext";
import { useEffect } from "react";

export default function Protected({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router, isAuthenticated]);
  return <>{children}</>;
}
