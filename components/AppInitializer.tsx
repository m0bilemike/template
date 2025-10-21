import { AppDispatch } from "@/store";
import { registerAppOpen } from "@/store/appUsageSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const AppInitializer: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
  
    useEffect(() => {
      dispatch(registerAppOpen());
    }, [dispatch]);
  
    return null;
  };