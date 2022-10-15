import Link from "next/link";
import MainContainer from "../components/MainContainer";

function Users({ newUsers }) {
	return (
		<MainContainer keywords="users page">
			<h1>Список пользователей</h1>
			<ul>
				{newUsers.map(user =>
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							<a>{user.name}</a>
						</Link>
					</li>
				)}
			</ul>
		</MainContainer>
	)
}

export default Users;

export async function getStaticProps(context) {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const newUsers = await response.json();

	return {
		props: { newUsers }
	}
}