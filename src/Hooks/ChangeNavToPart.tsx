import { useEffect, useMemo } from "react";
import { useUpdateNav } from "./NavProvider";
import useOnScreen from "./useOnScreen";

const useChangeNav = (
  index: number,
  ref: React.RefObject<HTMLDivElement>,
) => {
  const isOnScreen = useOnScreen(ref);
  const setNav = useUpdateNav();

  useEffect(() => {
    if (isOnScreen) {
      setNav(index);
    }
  }, [isOnScreen]);
  /*  useEffect(() => {}, [index, isOnScreen, setNav]); */
};

export default useChangeNav;
