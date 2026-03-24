import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { toast } from "sonner";

type AlertRemoveParam = {
    id: string,
    removeReserve?: () => void,
}

export function AlertRemoveDialog({id, removeReserve}:AlertRemoveParam) {
    const handleRemove = async () => {
        try {
            const resp = await fetch(`/api/reservations/${id}`, {
                method: 'DELETE'
            });
            const data = await resp.json();
            if(!resp.ok) {
                throw new Error(data.message || "Failed to delete reservation");
            }
            toast.success("Reservation deleted!", {position: 'top-center'})
            removeReserve?.();
        } catch(err) {
            console.log(err);
            toast.error("Failed to delete reservation.", {
                position: 'top-center',
                description: err instanceof Error ? err.message : "Something went wrong.",
            });
        }
    }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={'ghost'}><Trash2 className="h-4 aspect-square stroke-red-400"/></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold">Remove Reservation</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            reservation data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant={'destructive'} onClick={handleRemove}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
