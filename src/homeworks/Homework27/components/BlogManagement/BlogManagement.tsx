import { useState, createContext, ChangeEvent } from "react";

import { Card } from "homeworks/Homework27/components";

import { BlogManagementWrapper } from "./styles";
import Button from "components/Button";

// interface PostData {
//   post: string;
// }

export const PostContext = createContext("");

function BlogManagement() {
  const [textareaValue, setTextAreaValue] = useState<string>('');
  const [postData, setPostData] = useState<string>('');

  return (
    <PostContext.Provider value={postData}>
    <BlogManagementWrapper>
      <textarea
        value={textareaValue}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setTextAreaValue(event.target.value)
        }
      />
      <Button name="Posting" onClick={() => setPostData(textareaValue)} />
      <Card />
    </BlogManagementWrapper>
    </PostContext.Provider>
  );
}

export default BlogManagement;
