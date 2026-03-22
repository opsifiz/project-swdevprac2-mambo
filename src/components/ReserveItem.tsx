import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const ReserveItemContainer = ({children, className, ...props}:React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn(className, "w-full px-4 py-2 rounded-md shadow")} {...props}>
            {children}
        </div>
    )
}

const ReserveItemHeader = ({children, className}:React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <h1 className={cn(className, "text-lg")}>{children}</h1>
    )
}
const ReserveItemContent = ({children, className}:React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <p className={cn(className, "text-base")}>{children}</p>
    )
}

export {ReserveItemContainer, ReserveItemHeader, ReserveItemContent};