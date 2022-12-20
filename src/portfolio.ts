export type Portfolio<T> = {
	categories: Category<Category<T>[]>[],
}

export type Category<T> = {
	id: string,
	name: string,
	contents: T,
}

const data: Portfolio<void> = {
	categories: [
		{
			id: "image",
			name: "Image",
			contents: [
				{
					id: "retouch",
					name: "Retouching",
					contents: undefined
				},
				{
					id: "tod",
					name: "Day-Time Conversion",
					contents: undefined
				},
				{
					id: "interior",
					name: "Interior",
					contents: undefined
				},
				{
					id: "exterior",
					name: "Exterior",
					contents: undefined
				},
				{
					id: "visualisation",
					name: "Visualisation",
					contents: undefined
				},
			]
		},
		{
			id: "d3",
			name: "3D",
			contents: [
				{
					id: "vstage",
					name: "Virtual Staging",
					contents: undefined
				},
				{
					id: "modeling",
					name: "Modeling",
					contents: undefined
				},
			]
		},
		{
			id: "video",
			name: "Video",
			contents: [
				{
					id: "video_edit",
					name: "Editing",
					contents: undefined
				}
			],
		},
		{
			id: "creative",
			name: "Creative",
			contents: [
				{
					id: "art",
					name: "Art",
					contents: undefined
				},
				{
					id: "photography",
					name: "Photography",
					contents: undefined
				},
			],
		}
	]
}
export default data;
