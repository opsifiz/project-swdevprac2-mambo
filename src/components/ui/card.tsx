import { cn } from "@/lib/utils";

const Card = ({className, children, ...props}:React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn(className, "shadow p-4")} {...props}>
            {children}
        </div>
    )
}

export { Card };