import { useState } from "react";
/*
 * Business logic for the single Product component
 */
function useProduct() {
  const [isUnfolded, setIsUnfolded] = useState<boolean>(true);

  function handleToggleFold() {
    setIsUnfolded(!isUnfolded);
  }

  return { isUnfolded, handleToggleFold };
}
export default useProduct;
