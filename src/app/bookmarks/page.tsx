import { getAllBookmarks } from "@/lib/bookmarkApi";
import { BookmarkType, BookmarksResponse } from "@/types";

type Props = {
  searchParams: { page: string }
}

export default async function BookmarkPage(props: Props)  {
  const { page = 1 } = props.searchParams
  const bookmarksData: Promise<BookmarksResponse> = getAllBookmarks(parseInt(String(page)))
  const { data } = await bookmarksData
  const bookmarks: BookmarkType[] = data

  return (
    <div>
        <h1>Welcome to Bookmarker</h1>
        {
          bookmarks.map(bookmark => {
            return (
                <h2 key={bookmark.id}>{bookmark.title}</h2>
            )
          })
        }
    </div>
  );
}