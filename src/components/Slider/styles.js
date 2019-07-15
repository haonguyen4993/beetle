export default theme => ({
	item: {
		height: 'calc(-85px + 100vh)',
	},
	contentWraper: {
		backgroundColor: theme.palette.blueGrey.lightest,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	content: {
		width: '50%'
	},
	subtitle: {
		marginBottom: theme.spacing(5)
	},
	title: {
		marginBottom: theme.spacing(5)
	},
	image: {
		backgroundImage: 'url("/images/products/bag1.jpg")',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}
});