'use client'

import React, {useState} from "react";
import { useRouter } from "next/navigation";
import { saveBookmark } from "@/lib/bookmarkAdd";

const AddBookmarkPage = () => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [message, setMessage] = useState<string|null>(null);
    
    const router = useRouter();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if(!url) {
            alert("Please enter URL");
            return;
        }

        if(!title) {
          alert("Please enter Title");
          return;
	      }

        const payload = {
            title, url
        }

	    try {
	      const response = await saveBookmark(payload);
	      console.log("SaveBookmark response: ", response);
	      setMessage("Bookmark saved successfully");  
	      await router.push(`/bookmarks`);
	      router.refresh();
	    } catch (error) {
	      console.log('등록 실패!!!!')  
	      console.log(error);
	      setMessage("Bookmark saved fail");  
	    }
	
	    setTitle("");
	    setUrl("");
	        
     } //handleSubmit 

    return (
	  )
}

export default AddBookmarkPage;