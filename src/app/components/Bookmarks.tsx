import { BookmarksResponse } from '@/types';
import React from 'react';
import Bookmark from './Bookmark';
import Pagination from './Pagination';

type Props = {
    bookmarks: BookmarksResponse
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <Pagination bookmarks={bookmarks} />
            { bookmarks.data.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />) }            
        </div>
    );
};

export default Bookmarks;