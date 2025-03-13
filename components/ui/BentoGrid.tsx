import { cn } from "@/lib/utils";

// A set of 8 similar gradients, each slightly different in shade.
const gradientStyles = [
  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgb(49, 54, 108) 100%)",
  "linear-gradient(90deg, rgba(6,9,31,1) 0%, rgb(67, 69, 93) 100%)",
  "linear-gradient(90deg, rgba(8,11,33,1) 0%, rgb(60, 65, 120) 100%)",
  "linear-gradient(90deg, rgba(10,13,35,1) 0%, rgb(48, 54, 109) 100%)",
  "linear-gradient(90deg, rgba(12,15,37,1) 0%, rgb(92, 95, 136) 100%)",
  "linear-gradient(90deg, rgba(14,17,39,1) 0%, rgb(61, 63, 90) 100%)",
  "linear-gradient(90deg, rgba(16,19,41,1) 0%, rgb(112, 115, 146) 100%)",
  "linear-gradient(90deg, rgba(18,21,43,1) 0%, rgb(111, 114, 150) 100%)",
];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Improved responsive grid layout
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  titleClassName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  titleClassName?: string;
}) => {
  const gradientIndex = (id - 1) % gradientStyles.length;

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 p-6",
        className
      )}
      style={{
        // Fallback color for older browsers:
        backgroundColor: "rgb(4,7,29)",
        // Apply the gradient from our array:
        backgroundImage: gradientStyles[gradientIndex],
      }}
    >
      {/* Title */}
      {title && (
        <h2
          className={cn(
            titleClassName,
            "text-2xl font-bold text-white"
          )}
        >
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
};