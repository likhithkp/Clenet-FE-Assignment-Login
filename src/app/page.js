import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
  
const Login = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(https://img.freepik.com/free-vector/group-people-holding-crypto-currency-market-concept-flat-cartoon-illustration_40876-2866.jpg?w=826&t=st=1701521759~exp=1701522359~hmac=9a4382a7c85fb70ed15b79c687300f38415601f3a04b9bbc333577b490b02394)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome to materialize! 👋🏻
          </Typography>
          <Typography component="p" variant="p" style={{ fontSize: 13 }}>
            Please sign-in to your account and start the adventure
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              label="Email"
              name="email"
              autoFocus
              fullWidth
            />
            <TextField
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              fullWidth
            />
            <Grid container>
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      style={{ textDecoration: "none", fontSize: 13 }}
                    />
                  }
                  label="Remember me"
                  style={{ fontSize: 13 }}
                />
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center", marginTop: 10 }}>
                <Link
                  href="#"
                  variant="body2"
                  style={{ textDecoration: "none", fontSize: 13 }}
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              LOGIN
            </Button>
            <Grid container>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 3,
                }}
              >
                <Typography style={{ fontSize: 13 }}>
                  New on our platform?
                </Typography>
                <Link
                  href="#"
                  variant="body2"
                  style={{ textDecoration: "none", fontSize: 13 }}
                >
                  {"Create an account"}
                </Link>
              </Grid>
            </Grid>
            <Typography
              style={{ display: "flex", justifyContent: "center", margin: 20 }}
            >
              or
            </Typography>
            <Grid container>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 30,
                }}
              >
                <FacebookIcon style={{color: 'blue'}} />
                <TwitterIcon style={{color: 'skyblue'}} />
                <GitHubIcon style={{color: 'black'}} />
                <GoogleIcon style={{color: 'red'}} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
