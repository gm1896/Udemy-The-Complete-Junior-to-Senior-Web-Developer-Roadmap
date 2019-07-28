import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
	return (
		<div>
			<h1>Robots</h1>
			<div>
			{props.robots.map(robot => (
          <li key={robot.id}>
            <Link href={`robots/${robot.id}`}>
              <a>{robot.name}</a>
            </Link>
          </li>
        ))}
		</div>
		<br />
		<br />
		<Link href ='/'>
			<button>
				Home Page
			</button>
		</Link>
	</div>
);
}

Robots.getInitialProps = async function() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json();
	console.log(data);
	return{
		robots:data
	}

}

export default Robots;