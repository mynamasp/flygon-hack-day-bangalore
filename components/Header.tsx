import React, { useState } from "react";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import { IoIosArrowDropdown } from "react-icons/io";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
} from "@mui/material";

const routes = [
  {
    path: "/",
    name: "Home",
    icons: <HomeIcon />,
  },
  {
    path: "/about",
    name: "About US",
    icons: <InfoIcon />,
  },
  {
    path: "/contact",
    name: "Contact",
    icons: <ContactPageIcon />,
  },
];

const Header = () => {
  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(menu);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };
  const wallet_address: string = "0x9c169e7b2dA3401CC4e83B7c7BB08Ae8C6eBEB4E";
  //   const wallet_address: string = "";
  const router = useRouter();
  const path = router.pathname;

  const [menuState, setMenuState] = useState(false);

  if (!router.pathname) return null;

  return (
    <div className="pt-10">
      <div className="w-2/3 shadow-lg mx-auto rounded-full bg-primary px-5 md:px-10 flex justify-between items-center">
        <div className="">
          <Image
            className="w-16 h-16 rounded-full shadow-xl scale-75 md:hover:scale-50 duration-300 md:cursor-pointer ease out"
            src={require("../assets/images/logo.png")}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="lg:hidden py-5">
          <IconButton onClick={() => setMenuState(true)}>
            <HiMenuAlt3 className="text-[#00DCC9] w-10 h-10 md:cursor-pointer" />
          </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={menuState}
            onClose={() => setMenuState(false)}
            onOpen={() => setMenuState(true)}
          >
            <List>
              {routes.map((route, index) => (
                <ListItem key={index}>
                  <ListItemButton onClick={() => router.push(route.path)}>
                    <ListItemIcon>{route.icons}</ListItemIcon>
                    <ListItemText primary={route.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </div>
        <div className="hidden lg:flex py-5 space-x-10 items-center text-white">
          {routes.map((route, index) => (
            <p
              key={index}
              onClick={() => router.push(route.path)}
              className={`text-md font-semibold lg:cursor-pointer ${
                path == route.path && "lg:border-b-2 lg:border-secondary"
              }`}
            >
              {route.name}
            </p>
          ))}

          {!wallet_address ? (
            <button className="bg-gradient-to-r from-blue-500 md:hover:scale-75 duration-300 ease-out to-blue-900 rounded-lg px-4 py-2 font-semibold">
              Connect Wallet
            </button>
          ) : (
            <div>
              <button
                onClick={handleClick}
                className="flex items-center space-x-2 bg-gradient-to-r from-green-500 duration-300 to-green-900 rounded-lg px-4 py-2 font-semibold"
              >
                <p>
                  {wallet_address.slice(0, 6)}...{wallet_address.slice(-4)}
                </p>
                <IoIosArrowDropdown />
              </button>
              <Menu
                onClose={handleClose}
                id="basic-menu"
                style={{
                  marginTop: "10px",
                }}
                open={open}
                anchorEl={menu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>View Profile</MenuItem>
                <MenuItem>My Trips</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
