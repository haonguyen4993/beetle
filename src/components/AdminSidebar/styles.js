export default theme => ({
	sidebar: {
		backgroundColor: theme.palette.common.white,
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		width: '270px',
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1)
	},
	logoWrapper: {
		display: 'flex',
		flexShrink: 0,
		justifyContent: 'center',
		alignItems: 'center',
		height: '63px'
	},
	logoLink: {
		fontSize: 0
	},
	logoImage: {
		cursor: 'pointer',
		width: '60px',
		height: 'auto'
	},
	logoDivider: {
		marginBottom: theme.spacing(2)
	},
	profile: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: 'fit-content'
	},
	avatar: {
		width: '100px',
		height: '100px',
	},
	nameText: {
		marginTop: theme.spacing(2)
	},
	bioText: {},
	profileDivider: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	},
	listItem: {
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: theme.palette.primary.light,
			borderLeft: `4px solid ${theme.palette.primary.main}`,
			borderRadius: '4px',
			'& $listItemIcon': {
				color: theme.palette.primary.main,
				marginLeft: '-4px'
			}
		},
		'& + &': {
			marginTop: theme.spacing(1)
		}
	},
	listItemIcon: {
		marginRight: 0
	},
	listItemText: {
		fontWeight: 500,
		color: theme.palette.text.secondary
	},
	listDivider: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	}
});