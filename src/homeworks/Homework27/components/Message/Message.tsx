import{ useContext } from 'react';

import{PostContext} from 'homeworks/Homework27/components/BlogManagement/BlogManagement';

import{MessageWrapper} from './styles';

function Message() {
    const postData = useContext(PostContext);
    return <MessageWrapper>
        <p>{postData}</p>

    </MessageWrapper>
}
export default Message;