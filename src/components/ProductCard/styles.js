export default theme => ({
	product: {
		display: 'block',
		position: 'relative',
	},
	productImage: {
		width: '100%',
		height: 'auto'
	},
	productContent: {
		position: 'absolute',
		top: '50%',
		width: '100%',
		textAlign: 'center',
		color: theme.palette.common.white,
		textTransform: 'uppercase'
	}
});