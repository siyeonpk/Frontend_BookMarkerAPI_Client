import { getAllBookmarks } from "@/lib/bookmarkApi";
import { BookmarksResponse } from "@/types";
import Bookmarks from "@/app/components/Bookmarks";

type Props = {
  searchParams: { page: string }
}

export default async function BookmarkPage(props: Props)  {
  const { page = 1 } = props.searchParams
  const bookmarksData: Promise<BookmarksResponse> = getAllBookmarks(parseInt(String(page)))
  // const { data } = await bookmarksData
  // const bookmarks: BookmarkType[] = data
  const bookmarksRes = await bookmarksData

  return (
    <div>
      <Bookmarks bookmarks={bookmarksRes} />
    </div>
  );
}