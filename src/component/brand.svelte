<script lang="ts" context="module">
	export interface Brand {
		id: string;
		name: string;
		abbreviation?: string;
		color: string;
	}

	export const blender: Brand = {
		id: "blender",
		name: "Blender",
		color: "#ea7600",
	};

	export const photoshop: Brand = {
		id: "photoshop",
		name: "Photoshop",
		abbreviation: "Ps",
		color: "#31a8ff",
	};

	export const lightroom: Brand = {
		id: "lightroom",
		name: "Lightroom",
		abbreviation: "Lr",
		color: "#31a8ff",
	};

	export const premiere: Brand = {
		id: "premiere",
		name: "Premiere",
		abbreviation: "Pr",
		color: "#9999ff",
	};

	export const after_effects: Brand = {
		id: "after_effects",
		name: "After Effects",
		abbreviation: "Ae",
		color: "#9999FF",
	};

	export const indesign: Brand = {
		id: "indesign",
		name: "InDesign",
		abbreviation: "Id",
		color: "#ff3366",
	};

	export const illustrator: Brand = {
		id: "illustrator",
		name: "Illustrator",
		abbreviation: "Ai",
		color: "#ff9a00",
	};

	export enum NameForm {
		None,
		Abbreviate,
		Full,
	}
	function nameFormFn(nameForm: NameForm, program: Brand): string {
		return nameForm == NameForm.Full
			? program.name
			: nameForm == NameForm.Abbreviate
			? program.abbreviation ?? program.name
			: "";
	}
</script>

<script lang="ts">
	import { base } from "$app/paths";

	export let brand: Brand;
	export let naming: NameForm | string = NameForm.Full;
	export let size: string = "1.5em";
</script>

<span class="root">
	<img
		style="width:{size};height:{size}"
		src="{base}/software/{brand.id}.svg"
		alt="{brand.name} Icon"
	/>
	<span style="color:{brand.color}"
		>{typeof naming === "string" ? naming : nameFormFn(naming, brand)}</span
	>
</span>

<style lang="scss">
	.root {
		white-space: nowrap;
	}

	img {
		vertical-align: middle;
	}
</style>
