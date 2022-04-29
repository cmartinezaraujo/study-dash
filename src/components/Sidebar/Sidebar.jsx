import { ConstructionRounded, DashboardRounded, ListRounded, LogoutRounded } from '@mui/icons-material';
import { ToggleButton } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import "./sidebar.css";

export default function Sidebar() {
    const [view, setView] = useState('list');

    const handleChange = (event, nextView) => {
      setView(nextView);
    };

  return (
      <div className='sidebar'>
          <img className='sidebar-img' src="https://freepikpsd.com/file/2019/10/avatar-png-icon-2-Transparent-Images.png" alt="" />
          
          <div className="button-cluster">
          <ToggleButtonGroup
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
            className="button-group"
        >
            <ToggleButton sx={{width: 75, height: 75}} value="dash" >
                <DashboardRounded sx={{ fontSize: 50}}/>
            </ToggleButton>

            <ToggleButton sx={{width: 75, height: 75}} value="task" >
                <ListRounded sx={{ fontSize: 50}}/>
            </ToggleButton>

            <ToggleButton sx={{width: 75, height: 75}} value="settings" >
                <ConstructionRounded sx={{ fontSize: 50}}/>
            </ToggleButton >

            </ToggleButtonGroup>
          </div>

          <LogoutRounded sx={{ fontSize: 75}}/>
      </div>
  )
}
