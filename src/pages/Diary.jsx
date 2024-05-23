import { useParams } from "react-router-dom";   // 현재 url parameter의 값을 가져오는 기능을 하는 커스텀 훅

const Diary = () => {
    const params = useParams();
    console.log(params);
    return (
        <>
        {params.id}번 일기입니다~!
        </>
    );
};

export default Diary;