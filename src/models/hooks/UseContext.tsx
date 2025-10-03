import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
function LoginButton() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Login Button must be used within an AuthProvider.");
  }
  const { isLoggedIn, setIsLoggedIn } = context;
  return (
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

function UseContext() {
  return (
    <>
      <div className="heading-div">
        <h1 className="heading">Use Context</h1>
      </div>
      <AuthProvider>
        <LoginButton />
      </AuthProvider>
    </>
  );
}

export default UseContext;
