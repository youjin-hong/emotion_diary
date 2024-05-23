import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [params, setParams] = useSearchParams();  // query string의 값을 불러오는 커스텀 훅
    console.log(params.get('value'));

    return (
        <>
        Home
        </>
    );
};

export default Home;