import { base } from "$app/paths";

export const categories = [
  {
    id: "retouch",
    tags: ["retouch"],
    name: "Retouch",
  },
  {
    id: "photo_manipulation",
    tags: ["image:manipulation"],
    name: "Photo Manipulation",
  },
  {
    id: "vstaging",
    tags: ["vstaging"],
    name: "Virtual Staging",
  },
  {
    id: "d3",
    tags: ["3d:model"],
    name: "3D",
  },
  {
    id: "video",
    path: "video",
    name: "Video",
  },
  {
    id: "illustration",
    tags: ["illustration"],
    name: "Illustration",
  },
  {
    id: "photography",
    tags: ["photography"],
    name: "Photography",
  },
  {
    id: "fine_art",
    tags: ["fine_art"],
    name: "Fine Art",
  },
  {
    id: "brochure",
    tags: ["brochure"],
    name: "Brochure",
  },
];

export function tagDisplay(tag: string): string | undefined {
  return {
    retouch: "Retouching",
    image: "Image Editing",
    "3d": "3D",
    "3d:model": "3D Modeling",
    vstaging: "Virtual Staging",
    exterior: "Exterior",
    interior: "Interior",
    "image:manipulation": "Image Manipulation",
    tod: "Time of Day Conversion",
    visualisation: "Visualisation",
    illustration: "Illustration",
    art: "Art",
    fine_art: "Fine Art",
    photography: "Photography",
    brochure: "Brochure",
  }[tag];
}

export function categoryUrl(
  category: { tags: string[] } | { path: string }
): string {
  return "tags" in category
    ? `${base}/portfolio?${category.tags.map((t) => `tag=${t}`).join("&")}`
    : `${base}/${category.path}`;
}
