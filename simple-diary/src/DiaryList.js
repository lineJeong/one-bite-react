import DiaryItem from "./DiaryItem";

function DiaryList({ data, onDelete }) {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{data.length}개의 일기가 있습니다.</h4>
      <div>
        {data.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  data: [],
};

export default DiaryList;
