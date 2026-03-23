import { cn } from "@/lib/utils";
import React from "react";

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className, children, ...props}, ref) => {
    return (
        <div ref={ref} className={cn(className, "h-full p-8 shadow w-full rounded-md border border-gray-400")} {...props}>
            <div className="p-4 h-full shadow rounded-md border border-gray-400 font-bold text-[20px] [text-shadow:0_4px_20px_rgba(0,0,0,0.5)]">
                {children}
            </div>
        </div>
    )
});

export default Container;