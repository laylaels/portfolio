export type Portfolio = {
	categories: Category[],
}

export type Category = {
	id: string,
	name: string,
}

const data: Portfolio = {
	categories: [
		{
			id: "retouch",
			name: "Image Retouching",
		},
		{
			id: "photo_manipulate",
			name: "Photo Manipulation",
		},
		{
			id: "video",
			name: "Video",
		},
		{
			id: "vstage",
			name: "Virtual Staging",
		},
		{
			id: "d3",
			name: "3D",
		},
		{
			id: "illustration",
			name: "Illustration",
		},
		{
			id: "photography",
			name: "Photography",
		},
		{
			id: "fine_art",
			name: "Fine Art",
		},
	]
}
export default data;
