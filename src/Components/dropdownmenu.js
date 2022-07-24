import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const auth = getAuth()

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () =>{
    signOut(auth).then(()=>{console.log("Succsessfully logged out")}).catch((erroe)=>{console.log("Somthing wrong happend")})
    setAnchorEl(null)
  }

  const getUser = () => {
    onAuthStateChanged(auth,(user)=>{
      if(user){
        console.log(user.uid,"is logged in")
      } else {console.log("there is not anyone signed in right now")}
    })
    setAnchorEl(null)
  }

  

  return (
    <div>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <DehazeIcon/>
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=>navigate("/questionspage")}>Questions</MenuItem>
        <MenuItem onClick={()=>navigate("/ChoseTeam")}>Teams</MenuItem>
        <MenuItem onClick={()=>navigate("/login")}>Log in</MenuItem>
        <MenuItem onClick={logOut}>Log out</MenuItem>
      </Menu>
    </div>
  );
}