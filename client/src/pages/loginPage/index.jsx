import coffee from "./coffee.png";
import Form from "./Form";
import { Box, Typography} from "@mui/material";

const LoginPage = () => {
    return(
        <Box
        display="grid"
        gridTemplateColumns="repeat(20, minmax(0, 1fr))"
        sx={{ height: '100vh'}} >
            <Box
            gridColumn="span 15"
            sx={{
                backgroundImage:`url(${coffee})`,
                backgroundSize:"cover",
                backgroundRepeat: 'no-repeat',
                width:"100%",
                backgroundPosition: 'center',
            }}
            />
            <Box
            gridColumn="span 5"
            sx={{
                my:30,
            }}
            >
                <Typography 
                        variant = "h4" 
                        gridColumn='span 2'
                        sx={{
                            textAlign: "center",
                        }}
                        >Sign In</Typography>
                <Form/>
            </Box>
        </Box>
    );
};

export default LoginPage;