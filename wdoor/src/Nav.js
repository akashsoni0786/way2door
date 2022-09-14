import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Tooltip,
} from "@mui/material";
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
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryIcon from "@mui/icons-material/Category";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
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
const stylecontact = {
  backgroundColor: "#6A8A0A",
  fontWeight: "bolder",
  marginTop: "13px",
  "&:hover": {
    backgroundColor: "#3B4F00",
  },
};
const theme = createTheme();

const Search = styled("div")(({ theme }) => ({
  border: "1px solid black",

  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export default function Nav() {
  const contxt = React.useContext(contxtname);
  const [right, setRight] = React.useState(false);
  const [login, setlogin] = React.useState(false);
  const handlelogin = () => setlogin(true);
  const handleloginClose = () => setlogin(false);
  const [register, setregister] = React.useState(false);
  const handleregister = () => setregister(true);
  const handleregisterClose = () => setregister(false);
  const [location, setlocation] = React.useState(false);
  const handlelocation = () => setlocation(true);
  const handlelocationClose = () => setlocation(false);
  const [fname, setFirstname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const [chkmail, setchkMail] = React.useState("");
  const [chkpass, setchkPass] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElcat, setAnchorElcat] = React.useState(null);
  const [anchorElmoreoption, setAnchorElanchorElmoreoption] =
    React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const moreoption = Boolean(anchorElmoreoption);
  const handleClickopt = (event) => {
    setAnchorElanchorElmoreoption(event.currentTarget);
  };
  const handleCloseopt = () => {
    setAnchorElanchorElmoreoption(null);
  };

  const opencategory = Boolean(anchorElcat);
  const handleClickcat = (event) => {
    setAnchorElcat(event.currentTarget);
  };
  const handleClosecat = () => {
    setAnchorElcat(null);
  };
  const searchfunc = (e) => {
    var show = [];
    contxt.products.map((i) => {
      if (
        i.pname.toLowerCase().includes(e) ||
        i.mainCat.toLowerCase().includes(e)
      ) {
        window.scrollTo(0,200)
        show = [...show, i];
      }
    });
    contxt.setCat_Products(show);
  };
  const proceedtocheckout = () => {
    if (contxt.login === "") {
      handleregister();
    } else {
      alert("Your order has been placed");
      contxt.setAddtocartstate([]);
      contxt.setCartCount(0);
      contxt.setCartNames([]);
    }
  };
  const list = () => (
    <Box sx={{ width: "400px" }} role="presentation">
      {contxt.cartcount === 0 ? (
        <div className="headcross">
          <IconButton
            onClick={closecart}
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

          <div className="emptycart">
            <img
              alt=""
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
              style={{ width: "300px" }}
            />
            <h1>Cart is Empty!</h1>{" "}
          </div>
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
              onClick={closecart}
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
          <div className="reviewcontct2">
            <Button
              variant="contained"
              onClick={proceedtocheckout}
              sx={stylecontact}
            >
              Proceed To Checkout
            </Button>
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
    contxt.setAddtocartstate([]);
    contxt.setCartCount(0);
    contxt.setCartNames([]);
  };
  const deteleitem = async (e) => {
    contxt.addtocartstate.map((i, index) => {
      if (i.id === e) {
        var temp = [...contxt.addtocartstate];
        var temp2 = [...contxt.cartNames];
        temp.splice(index, 1);
        temp2.splice(index, 1);
        contxt.setCartNames([...temp2]);
        contxt.setAddtocartstate([...temp]);
        contxt.setCartCount(temp.length);
      }
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const closecart = () => {
    setRight(false);
  };
  const opencart = () => {
    setRight(true);
  };
  const signupfunc = () => {
    if (fname === "" || lname === "" || mail === "" || pass === "") {
      alert("All fields are mandetory!");
    }
    else {
      const user = {
        f_name: fname,
        l_name: lname,
        e_mail: mail,
        password: pass,
      };
      contxt.setUserdata([...contxt.userdata, user]);
      alert("Account Created successfully!");
      setMail("null");
      setPass("null");
      handleloginClose();
    }
  };
  const loginfunc = () => {
    let done = 0;
    if (chkmail === "" || chkpass === "") {
      alert("All fields are mandetory!");
    } else {
      contxt.userdata.map((i) => {
        if (i.e_mail === chkmail && i.password === chkpass) {
          done = 1;
        }
      });
    }
    if (done == 0) {
      alert("Invalid credentials");
    } else {
      contxt.setLogin(fname);
      alert("Logged in successfully");
      handleregisterClose();
    }
  };
  const handlelogout = () => {
    contxt.setLogin("");
  };
  const senttosignup = () => {
    handleregisterClose();
    handlelogin();
  };
  const senttologin = () => {
    handleloginClose();
    handleregister();
  };
  const categoryfunc = (ctg) => {
    if (ctg === "All_products") {
      contxt.setCat_Products(contxt.products);
    } else {
      var show = [];
      contxt.products.map((i) => {
        if (i.mainCat === ctg) {
          show = [...show, i];
        }
      });
      console.log(show);
      contxt.setCat_Products(show);
    }
  };

  const inc = () => {
    let ar1 = [...contxt.cat_products];
    ar1.sort((a, b) => a.price - b.price);
    contxt.setCat_Products(ar1);
  };
  const dec = () => {
    let ar1 = [...contxt.cat_products];
    ar1.sort((a, b) => b.price - a.price);
    contxt.setCat_Products(ar1);
  };

  return (
    <>
      <div>
        <>
          <SwipeableDrawer anchor="right" open={right} onClose={closecart}>
            {list()}
          </SwipeableDrawer>
        </>
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
                        // onSubmit={handleSubmit}
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
                        // onSubmit={signupfunc}
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
                              onChange={(e) => {
                                setFirstname(e.target.value);
                              }}
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
                              onChange={(e) => {
                                setLname(e.target.value);
                              }}
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
                              onChange={(e) => {
                                setMail(e.target.value);
                              }}
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
                              onChange={(e) => {
                                setPass(e.target.value);
                              }}
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={stylecontact}
                          onClick={signupfunc}
                        >
                          Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <Link
                              onClick={senttologin}
                              href="#"
                              variant="body2"
                            >
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
                        onSubmit={loginfunc}
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
                              onChange={(e) => {
                                setchkMail(e.target.value);
                              }}
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
                              onChange={(e) => {
                                setchkPass(e.target.value);
                              }}
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={stylecontact}
                          onClick={loginfunc}
                        >
                          Login
                        </Button>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <Link
                              onClick={senttosignup}
                              href="#"
                              variant="body2"
                            >
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
        <img
          onClick={handleClick}
          className="menumobile"
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/2099/2099125.png"
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              handlelocation();
            }}
          >
            <div className="plusminuscart2">
              <IconButton onClick={handlelocation}>
                <LocationOnIcon sx={{ color: "#556D0B" }} />
              </IconButton>
              <p>Location</p>
            </div>
          </MenuItem>
          {contxt.login === "" ? (
            <>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleregister();
                }}
              >
                <div className="plusminuscart2">
                  <IconButton onClick={handleregister}>
                    <LoginIcon sx={{ color: "#556D0B" }} />
                  </IconButton>
                  <p>Login</p>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handlelogin();
                }}
              >
                <div className="plusminuscart2">
                  <IconButton onClick={handlelogin}>
                    <TelegramIcon sx={{ color: "#556D0B" }} />
                  </IconButton>
                  <p>Register</p>
                </div>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handlelogout();
                }}
              >
                <div className="plusminuscart2">
                  <IconButton onClick={handlelogout}>
                    <LogoutIcon sx={{ color: "#556D0B" }} />
                  </IconButton>
                  <p>Logout</p>
                </div>
              </MenuItem>
            </>
          )}

          <MenuItem onClick={handleClickcat}>
            <div className="plusminuscart2">
              <IconButton onClick={handleClickcat}>
                <CategoryIcon sx={{ color: "#556D0B" }} />
              </IconButton>
              <p>Category</p>
            </div>
          </MenuItem>
        </Menu>

        <Menu
          id="basic-menu"
          anchorEl={anchorElcat}
          open={opencategory}
          onClose={handleClosecat}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClosecat();
              handleClose();
              categoryfunc("All_products");
            }}
          >
            All Products
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClosecat();
              handleClose();
              categoryfunc("Fresh_Fruits");
            }}
          >
            {" "}
            Fresh Fruits
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClosecat();
              handleClose();
              categoryfunc("Fresh_Vegetables");
            }}
          >
            Fresh Vegetables
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClosecat();
              handleClose();
              categoryfunc("Dry_Fruits");
            }}
          >
            Dry Fruits
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClosecat();
              handleClose();
              categoryfunc("Fresh_Non_Veg");
            }}
          >
            Fresh Non-Veg
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClosecat();
              handleClose();
              categoryfunc("Dairy_Product");
            }}
          >
            Dairy Product
          </MenuItem>
        </Menu>

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
          {contxt.login === "" ? (
            <>
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
            </>
          ) : (
            <>
              <Tooltip title="Logout">
                <IconButton onClick={handlelogout}>
                  <LogoutIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
            </>
          )}
        </div>
      </div>
      <div className="navbar">
        <img alt="" src="http://www.way2door.com/images/way2door-min.png" />
        <p className="sastatext">
          Today's order will be delivered tomorrow. सबसे सस्ता और सबसे अच्छा.
        </p>

        <IconButton onClick={opencart}>
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
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={(e) => {
              searchfunc(e.target.value);
            }}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Tooltip title="More Options">
          <IconButton onClick={handleClickopt}>
            <MoreVertIcon color="success" />
          </IconButton>
        </Tooltip>

        <Menu
          id="basic-menu"
          anchorEl={anchorElmoreoption}
          open={moreoption}
          onClose={handleCloseopt}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              inc();
              handleCloseopt();
            }}
          >
            Low to High
          </MenuItem>
          <MenuItem
            onClick={() => {
              dec();
              handleCloseopt();
            }}
          >
            High to Low
          </MenuItem>
        </Menu>
        {/* <Button variant="contained" sx={styleoffer}>
          My Offers
        </Button> */}
      </div>
    </>
  );
}
