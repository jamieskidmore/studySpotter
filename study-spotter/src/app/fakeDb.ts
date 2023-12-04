export const db = {
  spots: [
    {
      id: 1,
      name: "Tech Hub",
      address: "555 Seymour",
      distance: "5km",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      photo:
        "https://cdn.discordapp.com/attachments/1156321096572866580/1181237006005710988/img-placeholder.webp?ex=658053b0&is=656ddeb0&hm=b61da144f1213218077ef2a7b791f3be008857804c60db28724c75d0ab482ce7&",
      rating: 3,
      reviews: [
        {
          id: 1,
          anonymous: true,
          author: "Hani",
          rating: 3,
          body: "I love this spot!",
        },
        {
          id: 2,
          anonymous: true,
          author: "Jamie",
          rating: 1,
          body: "I don't like it here",
        },
      ],
    },
    {
      id: 2,
      name: "Computer Lab",
      address: "555 Seymour",
      distance: "5km",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      photo:
        "https://cdn.discordapp.com/attachments/1156321096572866580/1181237006005710988/img-placeholder.webp?ex=658053b0&is=656ddeb0&hm=b61da144f1213218077ef2a7b791f3be008857804c60db28724c75d0ab482ce7&",
      rating: 4,
      reviews: [
        {
          id: 1,
          anonymous: true,
          author: "Anita",
          rating: 4,
          body: "Usually empty here",
        },
      ],
    },
  ],
};

export type Spot = {
  id: number;
  name: string;
  address: string;
  distance: string;
  description: string;
  photo: string;
  rating: number;
  reviews: Array<Review>; // Assuming you have a Review type as well
};

export type Review = {
  id: number;
  anonymous: boolean;
  author: string;
  rating: number;
  body: string;
};
