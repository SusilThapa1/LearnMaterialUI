import { Typography } from "@mui/material"
const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">H1 heading</Typography>
        <Typography variant="h2">H2 heading</Typography>
        <Typography variant="h3">H3 heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom>H4 heading</Typography>
        <Typography variant="h5">H5 heading</Typography>
        <Typography variant="h6">H6 heading</Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, minima incidunt voluptatibus architecto soluta aperiam laboriosam illo temporibus exercitationem ea.</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque repudiandae et sed fuga inventore cupiditate perspiciatis dignissimos, adipisci aliquid!</Typography>
    </div>
  )
}

export default MuiTypography