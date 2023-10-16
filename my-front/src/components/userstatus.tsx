"use client";

import { Box } from "@mui/material";
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";

export default function UserStatus() {
    const [userLogged, setUserLogged] = useState<boolean>(false);
    
    return (
        <Box>
            {!userLogged && 
            <div className="flex items-center">
                <div>
                    <AccountCircleIcon/>
                </div>
                <div>
                    <label><Link href={'/login'}>Entre</Link></label>
                </div>
            </div>}
        </Box>
    )
} 