import { ReactNode } from "react";

interface ListboxWrapperProps {
  children: ReactNode; // This allows any valid React child
}

export const ListboxWrapper: React.FC<ListboxWrapperProps> = ({ children }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);
