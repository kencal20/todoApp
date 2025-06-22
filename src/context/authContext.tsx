import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../constants/path";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  current: any;
  logout: () => Promise<void>;
  setUser: (user: any) => void;
  setIsAuthenticated: (value: boolean) => void;
  user?: any;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const logout = async () => {
    setIsLoading(true);
    try {
      await account.deleteSession("current");
      setUser(null);
      setIsAuthenticated(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuth = async () => {
    setIsLoading(true);
    try {
      const accountData = await account.get();
      setUser(accountData);
      setIsAuthenticated(!!accountData);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        current: user,
        user,
        isAuthenticated,
        isLoading,
        logout,
        setUser,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
