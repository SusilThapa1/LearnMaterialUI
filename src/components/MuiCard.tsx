import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../Redux/hooks/hooks";

const MuiCard = () => {
  const { user, isLoggedIn } = useAppSelector((state) => state.login);

  if (!isLoggedIn || !user) return null;
  return (
    <>
      <Card className=" w-xl mx-auto mb-10">
        <CardMedia
          className="h-96"
          image="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg"
          title="rose"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rose Flower
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            A rose is a type of flower known for its beauty and often fragrant
            scent. It can refer to the flowering plant itself (genus Rosa) or
            the individual flower it produces. Roses are widely cultivated and
            come in various colors, including red, pink, white, and yellow. They
            are also often associated with love, romance, and other expressions
            of affection
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Box className="flex flex-col gap-5 items-center">
        <Typography variant="h6" color="primary" className="underline">
          Logged in user data:
        </Typography>
        <Box className="flex flex-col gap-2">
          <Box className="flex  items-center gap-4 font-bold text-lg">
            Profile Image:
            <Avatar alt={user.username} src={user.image} />
          </Box>
          <Box>
            <Typography variant="h6">Name: {user.username}</Typography>
            <Typography variant="h6" color="textSecondary">
              Email: {user.email}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MuiCard;
