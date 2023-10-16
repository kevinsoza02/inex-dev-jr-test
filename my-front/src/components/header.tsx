import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import UserStatus from './userstatus';
import Link from 'next/link';

export default function Header() {
    return (
        <Container className='flex mt-3 border-2 border-solid border-primary py-4 items-center'>
            <div className='text-xl font-bold'>CARROS RAPIDOS</div>
            <div className='ml-4'>
                <Link className='mx-3' href={'/'}>Home</Link>
            </div>
            <div className='ml-auto'>
                <UserStatus/>
            </div>
        </Container>   
    )
}