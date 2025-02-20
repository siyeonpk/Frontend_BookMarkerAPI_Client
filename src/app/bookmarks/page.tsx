import { getAllBookmarks } from "@/lib/bookmarkApi";
import { BookmarkType, BookmarksResponse } from "@/types";

export default async function BookmarkPage()  {
  const bookmarksData: Promise<BookmarksResponse> = getAllBookmarks()
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