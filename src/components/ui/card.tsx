import InteractiveCard from "./InteractiveCard";
import Rating from '@mui/material/Rating';
import { Box } from "@mui/material";

export default function Card( {imgSrc , venueName , onRatingChange}:{imgSrc:string , venueName:string ,onRatingChange?: (venueName: string, rating: number) => void} ) {

  // const [value, setValue] = useState<number | null>(2);
  
  return (
  <>
      <InteractiveCard>

      <Box className="relative w-full h-full">
        <img
          src={imgSrc}
          className="w-full h-full object-cover rounded-[20px]"
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "40%",
            background: "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />

        <Rating
          value={5}
          readOnly
          sx={{
            position: "absolute",
            bottom: 12,
            left: 16,
            zIndex: 2,
            fontSize: "2rem"
          }}
        />

        <button className="font-bold h-8 w-35 absolute bg-white bottom-2 right-2 rounded-xl text-right p-2 flex items-center justify-end" style={{zIndex: 3}}>
          SEE MORE
        </button>

      </Box>
      </InteractiveCard>
  </>
  );
}