import { useNavigate, useSearchParams } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  console.log(id);
  console.log(mode);

  return (
    <div>
      <h1>Edit</h1>
      <button
        onClick={() =>
          setSearchParams({
            id: 10,
            mode: "winterlood",
          })
        }
      >
        QS 바꾸기
      </button>
      <button onClick={() => navigate("/")}>HOME으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

export default Edit;
