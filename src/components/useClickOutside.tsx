import { useEffect } from "react";

const useClickOutside = (
  //  as the HTMLDivElement extends the generic HTMLElement,
  // we can specify the generic object here to allow this hook to be used with other types of html elements
  ref: React.MutableRefObject<HTMLElement>,
  // ref: React.MutableRefObject<HTMLDivElement>, //  specifies that a div has to be passed
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
};

export { useClickOutside };
