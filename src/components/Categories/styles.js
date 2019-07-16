export default theme => ({
	header: {
		padding: '4rem 0',
		textAlign: 'center'
	},
	category: {
		display: 'block',
		position: 'relative',
	},
	categoryImage: {
		width: '100%',
		height: 'auto'
	},
	categoryContent: {
		position: 'absolute',
		top: '50%',
		width: '100%',
		textAlign: 'center',
		color: theme.palette.common.white,
		textTransform: 'uppercase'
	}
});