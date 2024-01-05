import Image from "next/image";
import { Inter } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/slices/userSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const userRef = useRef(false);
  const { entities } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  console.log(entities);

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(fetchUsers());
    }

    return () => {
      userRef.current = true;
    };
  }, []);

  return (
    <div>
      {entities?.map((user: any) => {
        <h3 key={user.id}>{user.name}</h3>;
      })}
    </div>
  );
}
