import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useProfileId = () => {
  const [uId, setUid] = useState("");

  const { push } = useRouter();

  useEffect(() => {
    const uIdStorage = localStorage.getItem("user_id");

    if (uIdStorage) {
      setUid(uIdStorage);
    } else {
      push("/");
    }
  }, []);

  return uId;
};
