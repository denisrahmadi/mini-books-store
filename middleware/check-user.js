export default function ({ route, store, redirect }) {
  const bookDetail = store.getters.detailBooksData(route.params.detail);
  const userId = store.getters.userId;
  if (bookDetail.userId !== userId) {
    redirect("/");
  }
}
