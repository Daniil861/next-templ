import styles from '../../styles/user.module.scss';
import MainContainer from "../../components/MainContainer";

export default function ({ newUser }) {

	return (
		<MainContainer keywords={newUser.name}>
			<h1 className={styles.user}>Пользователь c id {newUser.id}</h1>
			<h2>Имя пользователя - {newUser.name}</h2>
		</MainContainer>
	)
}

export async function getServerSideProps({ params }) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
	const newUser = await response.json();
	return {
		props: { newUser },
	}
}