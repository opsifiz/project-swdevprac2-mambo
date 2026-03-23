import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const ReserveItemContainer = ({children, className, ...props}:React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn(className, "w-full px-4 py-2 rounded-md shadow " ) }
        style={{ background: `linear-gradient(to top right, #DEDEDE, #FFFFFF)`,}} {...props}>
            {children}
        </div>
    )
}

const ReserveItemHeader = ({children, className}:React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <h1 className={cn(className, "text-[30px] font-bold [text-shadow:0_4px_20px_rgba(0,0,0,1)]")}>{children}</h1>
    )
}
const ReserveItemContent = ({children, className}:React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <p className={cn(className, "text-[22px] font-semi-bold [text-shadow:0_4px_20px_rgba(0,0,0,1)]")}>{children}</p>
    )
}

export {ReserveItemContainer, ReserveItemHeader, ReserveItemContent};