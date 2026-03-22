import { cn } from "@/lib/utils";
import React from "react";

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className, children, ...props}, ref) => {
    return (
        <div ref={ref} className={cn(className, "h-full p-8 shadow w-full rounded-md border")} {...props}>
            <div className="p-4 h-full shadow rounded-md border">
                {children}
            </div>
        </div>
    )
});

export default Container;