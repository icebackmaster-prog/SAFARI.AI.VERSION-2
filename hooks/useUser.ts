import { useEffect, useState } from "react";
import { getUser } from "@/lib/auth";

export function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  return user;
}
