import { HomeIcon, TicketIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const NavBar = () => {
	return (
		<nav>
			<div>
				<Link href='/'>
					<HomeIcon className='h-6 w-6 text-default-text' />
				</Link>
				<Link href='/ticketPage/new'>
					<TicketIcon className='h-6 w-6 text-default-text' />
				</Link>
			</div>
			<div>
				<p className='text-default-text'>someemail@gmail.com</p>
			</div>
		</nav>
	);
};

export default NavBar;
