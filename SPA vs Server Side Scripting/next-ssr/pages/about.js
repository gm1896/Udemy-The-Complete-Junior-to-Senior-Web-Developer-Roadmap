import Link from 'next/link';
import Image from '../components/Image';

const About = () => {
	return (
		<div style={{fontSize: '20px',color:'red'}}>
			<h1>About</h1>
			<Image />
			<br />
			<br />
			<Link href='/'>
			<button> Back </button>
			</Link>
			<p> Madmax defeated me?!</p>
		</div>
		);
}

export default About;