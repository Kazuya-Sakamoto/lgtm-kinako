export const handleStatusCode = (statusCode: number, error) => {
  switch (statusCode) {
    case 401:
      alert(`401: ログインに失敗しました。${error}`);
      break;
    case 500:
      alert(`500: サーバーでエラーが発生しました。${error}`);
      break;
    // 他のステータスコードに対するエラーハンドリングを追加できます
    default:
      alert(`Unknown Error: 不明なエラーが発生しました。${error}`);
  }
};
