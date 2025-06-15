import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../constants/path"

interface AuthContextType {
  current: any;
  logout: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  user?: any;
  isAuthenticated?: boolean;
  setIsAuthenticated?: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
    setIsAuthenticated(false);
  }

  async function init() {
    try {
      const accountData = await account.get();
      setUser(accountData);
      setIsAuthenticated(true);
    } catch {
      setUser(null);
      setIsAuthenticated(false);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <AuthContext.Provider value={{ current: user, logout, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth():AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
