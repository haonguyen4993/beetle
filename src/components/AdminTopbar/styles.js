export default theme => ({
	topbar: {
		borderBottom: `1px solid ${theme.palette.border}`,
		backgroundColor: theme.palette.common.white,
		display: 'flex',
		alignItems: 'center',
		height: '64px',
		width: 'calc(-270px + 100vw)',
		marginLeft: '270px'
	},
	toolbar: {
		minHeight: 'auto',
		width: '100%'
	},
	title: {
		// marginLeft: theme.spacing.unit
	},
	menuButton: {
		marginLeft: '-4px'
	}
});