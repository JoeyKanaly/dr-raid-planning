export default {
	title: 'Ability',
	name: 'ability',
	type: 'object',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
		},
		{
			title: 'Wowhead Link',
			name: 'link',
			type: 'url',
		},
		{
			title: 'Short Description',
			name: 'description',
			type: 'string',
		},
		{
			title: 'Affected Roles',
			name: 'roles',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ value: 'tank', title: 'Tank' },
					{ value: 'dps', title: 'DPS' },
					{ value: 'healer', title: 'Healer' },
				],
			},
		},
	],
};
