export type albumQuery = {
  id: number;
  title: string;
  imageUrl: string;
};

export const albumsQuery = (): albumQuery[] => [
  {
    id: 1,
    title: "きなこのLGTM初めての投稿",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/56709557/262871504-48c3b110-e359-4376-958c-da671d6cd109.JPG",
  },
  {
    id: 2,
    title: "ソーーーーキューーと",
    imageUrl:
      "https://github.com/team-up-develop/teamup-develop-front/assets/56709557/43a56d97-80be-4f90-b97f-531db9539c3f",
  },
  {
    id: 3,
    title: "可愛すぎるだろ",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/56709557/262871504-48c3b110-e359-4376-958c-da671d6cd109.JPG",
  },
  {
    id: 4,
    title: "トイプードルなのか？",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/56709557/262871504-48c3b110-e359-4376-958c-da671d6cd109.JPG",
  },
  {
    id: 5,
    title: "太ってね？",
    imageUrl:
      "https://github.com/team-up-develop/teamup-develop-front/assets/56709557/43a56d97-80be-4f90-b97f-531db9539c3f",
  },
];
