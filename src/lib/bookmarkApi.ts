import { BookmarksResponse } from "@/types"
import axios, { AxiosResponse } from "axios"

const API_BASE_URL = 'http://localhost:8080'

export async function  getAllBookmarks(page: number): Promise<BookmarksResponse> {

    const API_URL = `${API_BASE_URL}/api/bookmarks?page=${page}`
    console.log(`url = ${API_URL}`)
    const res = await axios.get<BookmarksResponse>(`${API_URL}`)

    return res.data
}

export async function saveBookmark(bookmark:{title: string, url: string}) {
    const res: AxiosResponse<unknown, unknown> = await axios.post(`${API_BASE_URL}/api/bookmarks`, bookmark)
    return res.data
}