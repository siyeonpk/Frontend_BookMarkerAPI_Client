
import { getAllBookmarks } from "@/lib/bookmarkApi";
import { BookmarksResponse } from "@/types";
import Bookmarks from '../components/Bookmarks';

type Props = {
  searchParams: { page: string }
}

export default async function BookmarkPage(props: Props)  {
  const { page = 1 } = props.searchParams
  const bookmarksData: Promise<BookmarksResponse> = getAllBookmarks(parseInt(String(page)))
  const bookmarksRes = await bookmarksData

  // const { data } = await bookmarksData
  // const bookmarks: BookmarkType[] = data

  return (
    <div>
        <Bookmarks bookmarks={bookmarksRes} />
    </div>
  );
}