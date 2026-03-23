"use client"

export default function InteractiveCard({children}:{children: React.ReactNode}) {

    function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type == "mouseover") {
            event.currentTarget.classList.remove('shadow-[0_20px_20px_rgba(0,0,0,0.5)]')
            event.currentTarget.classList.add('shadow-[0_20px_20px_rgba(0,0,0,0.7)]')

            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('bg-neutral-200')

        }
        else {
            event.currentTarget.classList.remove('shadow-[0_20px_20px_rgba(0,0,0,0.7)]')
            event.currentTarget.classList.add('shadow-[0_20px_20px_rgba(0,0,0,0.5)]')

            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.add('bg-white')
        }
    }

  // function onCardSelected() {  
  //   alert("Card is Clicked")
  // }

  return (
    <div 
      className="border-[2px] border-black shrink-0 w-[438px] h-[250px] bg-white overflow-y-auto rounded-3xl gap-2.5 shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
      // onClick={()=>onCardSelected()}
      onMouseOver={(e) => onCardMouseAction(e)}
      onMouseOut={(e) => onCardMouseAction(e)}
    >
      {children}
    </div>
  );


}