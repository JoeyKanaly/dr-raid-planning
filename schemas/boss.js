export default {
	title: 'Boss',
	name: 'boss',
	type: 'document',
	fields: [
		{
			title: 'Boss Name',
			name: 'name',
			type: 'string',
		},
		{
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name',
			},
		},
		{
			title: 'Video Guide',
			name: 'video',
			type: 'url',
		},
		{
			title: 'Abilities',
			name: 'abilities',
			type: 'array',
			of: [{ type: 'ability' }],
		},
		{
			title: 'Raid Layout/Formation',
			name: 'layout',
			type: 'layout',
			options: {
				collapsible: true,
			},
		},
		{
			title: 'Strategy',
			name: 'strategy',
			type: 'array',
			of: [{ type: 'block' }, { type: 'image' }],
		},
	],
};
