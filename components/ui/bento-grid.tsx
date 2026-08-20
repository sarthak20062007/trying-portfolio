import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[22rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]",
        className,
      )}
    >
      <GlowingEffect 
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="relative z-10 flex-1 w-full overflow-hidden rounded-xl bg-background/50 mb-6">
        {header}
      </div>
      <div className="relative z-10 transition-transform duration-300 ease-out group-hover/bento:translate-x-1">
        <div className="mb-3 text-accent flex items-center">
          {icon}
        </div>
        <div className="font-heading font-bold text-xl tracking-tight text-foreground mb-2">
          {title}
        </div>
        <div className="text-sm font-normal text-foreground-muted leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
