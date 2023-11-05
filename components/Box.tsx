import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({
  children,
  className,
}) => {
  // TODO: remove bg-neutral for cleaner look
  return (
    <div
      className={twMerge(
        `
          bg-neutral-900 
          rounded-lg
          h-fit
          w-full
          `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
