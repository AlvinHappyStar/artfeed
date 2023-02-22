import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, IconButton, MenuItem, InputBase, Slider, Button, Dialog, Divider } from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';
import styled from "@emotion/styled";

const ColumnCountSlider = styled(Slider)(({ theme }) => ({
  color: 'black',
}))

const Layout = () => {

  const [selectedMenu, setSelectedMenu] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openSignUp, setSignUpOpen] = useState(false)
  const [openSignIn, setSignInOpen] = useState(false)
  const [openUploadImage, setUploadImageOpen] = useState(true)

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectMenu = (event, option) => {
    console.log(option);
    setSelectedMenu(option);
    navigate(option);
    setAnchorEl(null);
  };

  const handleSignUp = () => {
    setSignUpOpen(true);
  }

  const handleSignUpClose = () => {
    setSignUpOpen(false);
  }

  const handleSignIn = () => {
    setSignInOpen(true);
  }

  const handleSignInClose = () => {
    setSignInOpen(false);
  }

  const handleSignOut = () => {

  }

  const handleUploadImage = () => {
    setUploadImageOpen(true);
  }

  const handleUploadImageClose = () => {
    setUploadImageOpen(false);
  }

  return (
    <>
      <nav>
        <div className="p-7 flex flex-row gap-10">
          <div className="w-1/4">
            <img alt="" src="./images/distropic.png" />
          </div>
          
          <div className="basis-3/12 flex flex-end gap-3 justify-center">
            <div className="basis-4/5 flex flex-row justify-center gap-10">
              <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
              {/* <Button variant="contained" onClick={handleSignIn}>Sign In</Button> */}
              {/* <Button variant="contained" onClick={handleSignOut}>Sign Out</Button> */}
              <Button variant="contained" onClick={handleUploadImage}>Upload Image</Button>
            </div>
          </div>
        </div>

      </nav>

      <Outlet />
      <Dialog
        fullWidth={true}
        maxWidth={"xs"}
        open={openSignUp}
      >
        <div className="h-[400px] m-10 flex flex-col">
          <IconButton
            aria-label="close"
            onClick={handleSignUpClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="flex flex-col h-full gap-3">
            <div className="basis-1/6 h-full">
              <span className="basis-4/5 text-[24px]">Sign Up</span>
            </div>
            <Divider orientation="horizontal" flexItem />
            <div className="basis-1/6 h-full flex flex-col gap-1">
              <span className="text-[14px]">Name *</span>
              <InputBase className="border-b border-black" />
            </div>
            <div className="basis-1/6 h-full flex flex-col gap-1">
              <span className="text-[14px]">Email *</span>
              <InputBase className="border-b border-black" />
            </div>
            <div className="basis-1/6 h-full flex flex-col gap-1">
              <span className="text-[14px]">Password *</span>
              <InputBase className="border-b border-black" />
            </div>
            <div className="basis-1/6 h-full flex flex-col gap-1">
              <span className="text-[14px]">Password Confirm *</span>
              <InputBase className="border-b border-black" />
            </div>
            <div className="basis-1/6 h-full flex flex-row justify-center">
              <Button variant="contained">Sign Up</Button>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        fullWidth={true}
        maxWidth={"xs"}
        open={openSignIn}
      >
        <div className="h-[250px] m-10 flex flex-col">
          <IconButton
            aria-label="close"
            onClick={handleSignInClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="flex flex-col h-full gap-3">
            <div className="basis-1/6 h-full">
              <span className="basis-4/5 text-[24px]">Sign In</span>
            </div>
            <Divider orientation="horizontal" flexItem />
            <div className="basis-1/6 h-full flex flex-col gap-1">
              <span className="text-[14px]">Email *</span>
              <InputBase className="border-b border-black" />
            </div>
            <div className="basis-1/6 h-full flex flex-col gap-1">
              <span className="text-[14px]">Password *</span>
              <InputBase className="border-b border-black" />
            </div>
            <div className="basis-1/6 h-full flex flex-row justify-center">
              <Button variant="contained">Sign In</Button>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        fullWidth={true}
        maxWidth={"xs"}
        open={openUploadImage}
      >
        <div className="h-[800px] m-10 flex flex-col">
          <IconButton
            aria-label="close"
            onClick={handleUploadImageClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="flex flex-col h-full gap-3">
            <div className="basis-1/6 h-full">
              <span className="basis-4/5 text-[24px]">Upload Image</span>
            </div>
            <Divider orientation="horizontal" flexItem />
            <div className="basis-1/6 h-full flex flex-col gap-1">
              <span className="text-[14px]">Name *</span>
              <InputBase className="border-b border-black" />
            </div>
            <div className="basis-1/6 h-full flex flex-col gap-1">
              <span className="text-[14px]">Email *</span>
              <InputBase className="border-b border-black" />
            </div>
            <div className="basis-1/6 h-full flex flex-col gap-1">
              <span className="text-[14px]">Password *</span>
              <InputBase className="border-b border-black" />
            </div>
            <div className="basis-1/6 h-full flex flex-col gap-1">
              <span className="text-[14px]">Password Confirm *</span>
              <InputBase className="border-b border-black" />
            </div>
            <div className="basis-1/6 h-full flex flex-row justify-center">
              <Button variant="contained">Sign Up</Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
};

export default Layout;