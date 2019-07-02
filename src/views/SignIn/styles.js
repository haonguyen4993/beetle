export default theme => ({
	image: {
		backgroundImage: 'url("/images/login.jpg")',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		margin: theme.spacing(0, 16),
	},
	avatar: {
		width: '100px',
		height: '100px',
	},
	submit: {
		marginTop: theme.spacing(1),
	}
});