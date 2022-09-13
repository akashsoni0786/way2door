import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Modal, Tooltip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoginIcon from "@mui/icons-material/Login";
import TelegramIcon from "@mui/icons-material/Telegram";
import CancelIcon from "@mui/icons-material/Cancel";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { contxtname } from "./Context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import apicall from "./db.js";
import DeleteIcon from "@mui/icons-material/Delete";
const styleoffer = {
  fontWeight: "bolder",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const theme = createTheme();
export default function Nav() {
  const contxt = React.useContext(contxtname);
  const [login, setlogin] = React.useState(false);
  const handlelogin = () => setlogin(true);
  const handleloginClose = () => setlogin(false);

  const [register, setregister] = React.useState(false);
  const handleregister = () => setregister(true);
  const handleregisterClose = () => setregister(false);

  const [location, setlocation] = React.useState(false);
  const handlelocation = () => setlocation(true);
  const handlelocationClose = () => setlocation(false);

  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: "400px" }}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      {contxt.cartcount === 0 ? (
        <div className="headcross">
          <h1>Cart is Empty!</h1>{" "}
          <IconButton
            onClick={() => {
              toggleDrawer("right", false);
            }}
            sx={{
              position: "absolute",
              top: "0px",
              right: "0px",
              cursor: "pointer",
              color: "red",
            }}
          >
            <CancelIcon />
          </IconButton>
        </div>
      ) : (
        <>
          <div className="headcross">
            <h1>Your Cart</h1>{" "}
            <Tooltip title="Empty Cart">
              <IconButton onClick={emptycart}>
                <DeleteIcon sx={{ color: "#6A8A0A", fontSize: "40px" }} />
              </IconButton>
            </Tooltip>
            <IconButton
              onClick={() => {
                toggleDrawer("right", false);
              }}
              sx={{
                position: "absolute",
                top: "0px",
                right: "0px",
                cursor: "pointer",
                color: "red",
              }}
            >
              <CancelIcon />
            </IconButton>
          </div>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ width: "50px", fontWeight: "bolder" }}
                      align="left"
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{ width: "30px", fontWeight: "bolder" }}
                      align="left"
                    >
                      Quantity
                    </TableCell>
                    <TableCell
                      sx={{ width: "30px", fontWeight: "bolder" }}
                      align="left"
                    >
                      Price
                    </TableCell>
                    <TableCell
                      sx={{ width: "30px", fontWeight: "bolder" }}
                      align="center"
                    >
                      Remove
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contxt.addtocartstate.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{row.pname}</TableCell>
                      <TableCell sx={{ width: "30px" }} align="left">
                        {row.quantity}
                      </TableCell>
                      <TableCell align="left">
                        {row.sellPrice * row.quantity}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          onClick={() => {
                            deteleitem(row.id);
                          }}
                          sx={{
                            color: "red",
                          }}
                        >
                          <CancelIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
    </Box>
  );
  const emptycart = () => {
    contxt.addtocartstate.map(async (i) => {
      try {
        await apicall.delete(`/addtocart/${i.id}`);
        contxt.setAddtocartstate([]);
        contxt.setCartCount(0);
      } catch (er) {
        console.log(er);
      }
    });
    // handleClose();
  };
  const deteleitem = async (e) => {
    alert(e)
    // toggleDrawer("right", true);
    try {
      await apicall.delete(`/addtocart/${e}`);
      // console.log(apicall.delete("/addtocart/7d957804-9429-46de-8d45-8330bf033b24"))
      let addtocart = await apicall.get("/addtocart");
      console.log(addtocart);

      contxt.setAddtocartstate(addtocart.data);
      contxt.setCartCount(addtocart.data.length);
    } catch (er) {
      console.log(er);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const stylecontact = {
    backgroundColor: "#6A8A0A",
    fontWeight: "bolder",
    marginTop: "13px",
    "&:hover": {
      backgroundColor: "#3B4F00",
    },
  };
  return (
    <>
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>

      <div>
        <div style={{ position: "relative" }}>
          <Modal
            open={location}
            onClose={handlelocationClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <IconButton
                onClick={handlelocationClose}
                sx={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  cursor: "pointer",
                  color: "red",
                }}
              >
                <CancelIcon />
              </IconButton>

              <Box>
                <ThemeProvider theme={theme}>
                  <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                      sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography component="h1" variant="h5">
                        Location
                      </Typography>
                      <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              id="email"
                              label="Enter PIN CODE"
                              name="email"
                              autoComplete="email"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              name="email"
                              label="Enter City"
                              type="email"
                              id="email"
                              autoComplete="new-password"
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          onClick={handlelocationClose}
                          sx={stylecontact}
                        >
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Box>
          </Modal>
        </div>
        <div style={{ position: "relative" }}>
          <Modal
            open={login}
            onClose={handleloginClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <IconButton
                onClick={handleloginClose}
                sx={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  cursor: "pointer",
                  color: "red",
                }}
              >
                <CancelIcon />
              </IconButton>

              <Box>
                <ThemeProvider theme={theme}>
                  <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                      sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h5">
                        Sign up
                      </Typography>
                      <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="given-name"
                              name="firstName"
                              required
                              fullWidth
                              id="firstName"
                              label="First Name"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id="lastName"
                              label="Last Name"
                              name="lastName"
                              autoComplete="family-name"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="new-password"
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={stylecontact}
                        >
                          Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <Link href="#" variant="body2">
                              Already have an account? Sign in
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Box>
          </Modal>
        </div>
        <div style={{ position: "relative" }}>
          <Modal
            open={register}
            onClose={handleregisterClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <IconButton
                onClick={handleregisterClose}
                sx={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  cursor: "pointer",
                  color: "red",
                }}
              >
                <CancelIcon />
              </IconButton>

              <Box>
                <ThemeProvider theme={theme}>
                  <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                      sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h5">
                        Login
                      </Typography>
                      <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="new-password"
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={stylecontact}
                        >
                          Login
                        </Button>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <Link href="#" variant="body2">
                              Don't have an account? Register
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="upperdiv">
        <div className="linkdiv">
          <p className="downloadnow">Download Way2doorApp - </p>
          <a
            href="https://play.google.com/store/apps/details?id=io.ionic.way2doorapp"
            className="downloadlink"
          >
            Click here
          </a>
        </div>
        <div className="iconsupper">
          <Tooltip title="Location">
            <IconButton onClick={handlelocation}>
              <LocationOnIcon sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Login">
            <IconButton onClick={handleregister}>
              <LoginIcon sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Register here">
            <IconButton onClick={handlelogin}>
              <TelegramIcon sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="navbar">
        <img alt="" src="http://www.way2door.com/images/way2door-min.png" />
        <p className="sastatext">
          Today's order will be delivered tomorrow. सबसे सस्ता और सबसे अच्छा.
        </p>

        <IconButton onClick={toggleDrawer("right", true)}>
          <Badge
            badgeContent={contxt.cartcount}
            color="error"
            sx={{ marginRight: "20px" }}
          >
            <ShoppingCartIcon sx={{ color: "#6A8A0A", fontSize: "40px" }} />
          </Badge>
        </IconButton>
      </div>
      <div className="lowerdiv">
        <div className="timingdiv">
          <p className="timehead">Order Timing : </p>
          <p className="timing"> 8:00 am To 6:00 pm </p>
        </div>
        <Button variant="contained" sx={styleoffer}>
          My Offers
        </Button>
      </div>
    </>
  );
}
